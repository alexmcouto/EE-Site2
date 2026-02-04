"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { contactSchema } from "@/app/contact/schema";

type ActionState = {
  ok: boolean;
  message: string;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

function getClientIp() {
  const forwarded = headers().get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return headers().get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
}

export async function sendContact(formData: FormData): Promise<ActionState> {
  const honeypot = String(formData.get("website") ?? "");
  if (honeypot) {
    return { ok: true, message: "Submission received." };
  }

  const data = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false, message: "The submission could not be validated." };
  }

  const ip = getClientIp();
  if (isRateLimited(ip)) {
    return { ok: false, message: "Submission limit reached. Another attempt can be made later." };
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (RESEND_API_KEY && CONTACT_TO_EMAIL) {
    const resend = new Resend(RESEND_API_KEY);
    const fromEmail = CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    try {
      await resend.emails.send({
        from: fromEmail,
        to: CONTACT_TO_EMAIL,
        replyTo: data.email,
        subject: `New contact inquiry - ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nOrganization: ${data.organization || "Not provided"}\n\nMessage:\n${data.message}`,
      });
    } catch (error) {
      console.error("Resend error", error);
      return { ok: false, message: "The submission could not be delivered." };
    }
  } else {
    console.info("Contact form submission", data);
  }

  return { ok: true, message: "Submission received." };
}

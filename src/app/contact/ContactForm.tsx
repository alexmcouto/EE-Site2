"use client";

import { useRef, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContact } from "@/app/contact/actions";
import { contactSchema, type ContactValues } from "@/app/contact/schema";

export function ContactForm() {
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [isPending, startTransition] = useTransition();
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactValues) => {
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("organization", values.organization ?? "");
    formData.set("message", values.message);
    formData.set("website", honeypotRef.current?.value ?? "");

    startTransition(async () => {
      const result = await sendContact(formData);
      setStatus(result);
      if (result.ok) {
        reset();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Name" {...register("name")} />
          {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="name@example.com" {...register("email")} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">Organization (optional)</Label>
        <Input id="organization" placeholder="Organization" {...register("organization")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Project or inquiry</Label>
        <Textarea id="message" placeholder="Brief summary of the inquiry." {...register("message")} />
        {errors.message ? <p className="text-sm text-red-600">{errors.message.message}</p> : null}
      </div>

      <div className="sr-only" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
      </div>

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? "Sending..." : "Inquiry submission"}
      </Button>

      {status ? (
        <p className={status.ok ? "text-sm text-emerald-600" : "text-sm text-red-600"}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

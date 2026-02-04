import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "A name is required."),
  email: z.string().email("A valid email address is required."),
  organization: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "A message of at least 10 characters is required."),
});

export type ContactValues = z.infer<typeof contactSchema>;

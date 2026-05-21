import { z } from "zod";

export const contactNeedPlaceholder = "What do you need?";

export const contactNeedOptions = [
  "Website Development",
  "Meta Ads",
  "Landing Pages",
  "E-commerce",
  "Full Growth Plan",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  countryCode: z.string().min(1, "Please select a country code"),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your mobile number")
    .max(25, "Mobile number is too long")
    .regex(/^[0-9\s().-]+$/, "Please enter a valid mobile number")
    .refine((value) => {
      const digitCount = value.replace(/\D/g, "").length;
      return digitCount >= 7 && digitCount <= 15;
    }, "Please enter a valid mobile number"),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address")
    .max(254, "Email address is too long")
    .email("Please enter a valid email address"),
  message: z
    .string()
    .refine((value) => contactNeedOptions.includes(value as typeof contactNeedOptions[number]), {
      message: "Please select what you need",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

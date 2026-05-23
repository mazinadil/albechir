import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us — AL Bechir | Get a Free Marketing & Web Strategy",
  description:
    "Ready to scale your business? Book a free conversion-focused consultation with AL Bechir. Let's discuss high-converting websites, landing pages, and Meta Ads for UAE & GCC.",
  openGraph: {
    title: "Contact Us — AL Bechir | Get a Free Marketing & Web Strategy",
    description:
      "Ready to scale your business? Book a free conversion-focused consultation with AL Bechir. Let's discuss high-converting websites, landing pages, and Meta Ads for UAE & GCC.",
    type: "website",
    locale: "en_US",
    siteName: "AL Bechir",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

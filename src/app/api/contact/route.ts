import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas/contact";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, countryCode, phone, message } = result.data;
    const fullPhone = `${countryCode} ${phone}`;
    const submittedAt = new Date().toISOString();
    const emailTo = process.env.CONTACT_EMAIL_TO ?? "info@albechir.com";
    const emailFrom =
      process.env.RESEND_FROM_EMAIL ?? "AL Bechir <onboarding@resend.dev>";

    console.log("📧 New contact form submission:", {
      name,
      email,
      phone: fullPhone,
      message,
      timestamp: submittedAt,
    });

    if (!process.env.RESEND_API_KEY) {
      console.error("Contact form email is not configured: RESEND_API_KEY is missing");
      return Response.json(
        { error: "Contact email is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      replyTo: email,
      subject: `New lead from AL Bechir website: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 16px; color: #0f172a;">New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 700; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Phone</td>
              <td style="padding: 8px 0;">${escapeHtml(fullPhone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Need</td>
              <td style="padding: 8px 0;">${escapeHtml(message)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700;">Submitted</td>
              <td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td>
            </tr>
          </table>
        </div>
      `,
      text: [
        "New Contact Form Submission",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${fullPhone}`,
        `Need: ${message}`,
        `Submitted: ${submittedAt}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact email error:", error);
      const resendMessage =
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string"
          ? error.message
          : "Failed to send message";

      return Response.json(
        { error: resendMessage },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

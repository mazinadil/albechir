import { contactFormSchema } from "@/lib/schemas/contact";

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

    // Log the submission (replace with Resend or SMTP in production)
    console.log("📧 New contact form submission:", {
      name,
      email,
      phone: phone ? `${countryCode} ${phone}` : "Not provided",
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Uncomment and configure when Resend API key is available
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Digitida <noreply@digitida.com>',
    //   to: 'hello@digitida.com',
    //   subject: `New Lead: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // });

    return Response.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — AL Bechir | Websites & Meta Ads",
  description:
    "Learn about how AL Bechir collects, processes, and protects your information. Tailored compliance for websites, consultations, and marketing services in the UAE & GCC.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-white pt-28 lg:pt-36 pb-20">
        {/* Background glow accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(37,99,235,0.1),transparent)]" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-blue/[0.04] blur-[120px]" />
          <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-brand-blue/[0.03] blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-gray-500 text-sm mt-3">
              Last Updated: May 23, 2026
            </p>
          </div>

          {/* Policy content pane */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-[0_16px_40px_rgba(15,23,42,0.02)] prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-8">
            <div>
              <p>
                At <strong>AL Bechir for Global Buisness LLC</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website (the &quot;Site&quot;), request a free consultation, contact us via WhatsApp, or use our digital marketing and web development services in the United Arab Emirates (UAE) and the broader Gulf Cooperation Council (GCC) region.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this policy, please do not access the Site or submit your information to us.
              </p>
            </div>

            <hr className="border-gray-100" />

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">1. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you fill out our forms, request a growth audit, initiate a WhatsApp chat, or correspond with us directly. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Identity Data:</strong> Full Name.</li>
                <li><strong>Contact Data:</strong> Email Address, Phone Number (including country calling code).</li>
                <li><strong>Project Needs:</strong> Information about your business, website requirements, Meta Ads budget, or campaign goals.</li>
                <li><strong>Communication Logs:</strong> Message content submitted via our contact forms, direct emails, or WhatsApp conversations.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to deliver, maintain, and optimize our services. Specifically, we use your data to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Prepare and present your requested 15-minute free strategy consultation and conversion audit.</li>
                <li>Respond to inquiries, handle customer support, and conduct ongoing communication via WhatsApp or email.</li>
                <li>Configure, deliver, and report on high-converting websites, landing pages, and Meta Advertising campaigns.</li>
                <li>Log contact form submissions securely via Resend email integration for record-keeping and audit tracking.</li>
                <li>Identify usage trends, prevent security breaches, and improve the user experience of our Site.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only under the following limited circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Service Providers:</strong> With trusted third-party providers who assist us in operating our business (e.g., Resend for transactional emails, Vercel for hosting, and analytic platforms). These providers are obligated to keep your data confidential.</li>
                <li><strong>Legal Obligations:</strong> If required by law, subpoena, or government authority in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) or other applicable GCC regulations.</li>
                <li><strong>Business Protection:</strong> To protect our intellectual property, defend against legal liability, or ensure the safety of our staff, clients, and assets.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">4. Security of Your Information</h2>
              <p>
                We implement industry-standard administrative, physical, and technical security measures to safeguard your personal data from unauthorized access, alteration, or disclosure. However, please remember that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute data security.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">5. Your Rights and Data Choices</h2>
              <p>
                Depending on your location (including the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman), you hold key data protection rights under applicable local regulations, which we respect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Access and Rectification:</strong> You may request access to or updates of the personal information we hold about you.</li>
                <li><strong>Erasure:</strong> You can request that we delete your personal contact records from our active strategy databases at any time.</li>
                <li><strong>Opt-out:</strong> You can opt out of any informational follow-ups or promotional emails by hitting the unsubscribe link or replying directly to our WhatsApp support line.</li>
              </ul>
              <p className="mt-2">
                To exercise any of these choices, please email us directly at <a href="mailto:info@albechir.com" className="text-brand-blue hover:underline">info@albechir.com</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">6. Third-Party Links</h2>
              <p>
                Our Site contains links to external platforms, such as our completed work previews (e.g., Shopify stores or WordPress sites) and social platforms. This Privacy Policy applies solely to information collected by our Site. We are not responsible for the privacy practices or contents of third-party platforms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">7. Changes to This Policy</h2>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time. We will notify you of any changes by updating the &quot;Last Updated&quot; date at the top of this page. You are encouraged to review this Privacy Policy periodically to stay informed of updates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">8. Contact Us</h2>
              <p>
                If you have questions, comments, or complaints about this Privacy Policy or our data management practices, please reach out to us at:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-gray-50 border border-gray-100 text-sm space-y-1">
                <p className="font-bold text-gray-950">AL Bechir for Global Buisness LLC</p>
                <p>Dubai, United Arab Emirates</p>
                <p>Email: <a href="mailto:info@albechir.com" className="text-brand-blue hover:underline">info@albechir.com</a></p>
                <p>Phone: +971 50 232 3186</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

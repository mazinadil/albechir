import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — AL Bechir | Websites & Meta Ads",
  description:
    "Review the Terms & Conditions for AL Bechir. Covers contract rules, payment structures, project scopes, and UAE/GCC governing laws.",
};

export default function TermsConditionsPage() {
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
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-gray-500 text-sm mt-3">
              Last Updated: May 23, 2026
            </p>
          </div>

          {/* Policy content pane */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-[0_16px_40px_rgba(15,23,42,0.02)] prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-8">
            <div>
              <p>
                Welcome to <strong>AL Bechir for Global Buisness LLC</strong>. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of our website, located at <a href="https://www.albechir.com" className="text-brand-blue hover:underline">www.albechir.com</a> (the &quot;Site&quot;), including any consultations, marketing services, landing pages, Meta Ads campaigns, and websites built or hosted by us (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                By accessing our Site, booking a free consultation, or engaging our Services, you agree to be fully bound by these Terms. If you disagree with any part of these Terms, please do not use our Site or engage our team.
              </p>
            </div>

            <hr className="border-gray-100" />

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">1. Scope of Services</h2>
              <p>
                We specialize in creating premium, conversion-focused websites, Shopify stores, WordPress portals, high-converting landing pages, and Meta Ads (Facebook &amp; Instagram advertising) setups targeted toward the UAE and GCC business markets. 
              </p>
              <p>
                Specific project scopes, deliverables, timelines, and milestones will be detailed in individual Service Agreements or invoices signed between us and the client.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">2. Free Consultations and Strategy Audits</h2>
              <p>
                The &quot;15-Minute Free Consultation&quot; and web audits advertised on this Site are completely optional and provided at our discretion. Booking a consultation does not establish a binding contract for paid development or marketing services. We reserve the right to decline consultation requests if we determine your business is not a fit for our advertising model.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">3. Payment Terms</h2>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Retainers &amp; Deposits:</strong> Paid design, development, or marketing setup services require a deposit or upfront retainer payment before project kick-off, as detailed in your specific invoice or statement of work.</li>
                <li><strong>Meta Ads Budgets:</strong> Clients are solely responsible for funding their own ad budgets directly via their Meta Business Suite/Ad Account billing profiles. Our service fees cover strategy, creation, management, and continuous optimization, and do not include direct advertising media spend.</li>
                <li><strong>Late Payments:</strong> We reserve the right to halt website builds, pause running ad campaigns, or restrict system access if invoices remain unpaid past their agreed due dates.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">4. Client Obligations</h2>
              <p>
                To deliver high-performing campaigns, clients must cooperate in good faith. You agree to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Provide accurate brand guidelines, raw assets, logos, and business copy in a timely manner.</li>
                <li>Provide necessary admin or collaborator access levels to your Meta Business Manager, domains, hostings, or CMS dashboards (e.g., Shopify/WordPress) as required.</li>
                <li>Verify that all business claims, product descriptions, and promotional offers comply with UAE/GCC consumer protection standards and Meta&apos;s strict advertising policies.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">5. Communication Standards</h2>
              <p>
                For speed and reliability, our primary communication channel is <strong>WhatsApp</strong> and direct email (<a href="mailto:info@albechir.com" className="text-brand-blue hover:underline">info@albechir.com</a>). By initiating a chat via our floating widget or buttons, you agree to receive digital strategy audits, campaign updates, drafts, and technical queries directly via WhatsApp.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">6. Intellectual Property</h2>
              <p>
                Upon receipt of full payment, the client owns all intellectual property rights to the final customized visual designs, layouts, and copy developed specifically for their website or landing page. 
              </p>
              <p>
                We retain ownership of our core proprietary scripts, templates, reusable library components, and strategy frameworks utilized during the development. We also reserve the right to display screenshots and links to your completed website in our selected work portfolio, unless a non-disclosure agreement is explicitly requested and signed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">7. Limitation of Liability</h2>
              <p>
                While we construct high-converting setups backed by GCC market understanding, advertising performance (e.g., lead volumes, WhatsApp conversions, Shopify sales) is subject to user demand, market competition, product-market fit, and platform algorithm changes. 
              </p>
              <p>
                In no event will <strong>AL Bechir for Global Buisness LLC</strong>, its directors, or employees be liable for any direct, indirect, incidental, or consequential damages (including loss of business profits, data corruption, domain downtime, or paused ad accounts) arising out of the use of our Site, Services, or third-party hostings.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">8. Governing Law</h2>
              <p>
                These Terms and any dispute arising from your use of this Site or Services will be governed by and construed in accordance with the laws of the <strong>Emirate of Dubai</strong> and the federal laws of the <strong>United Arab Emirates (UAE)</strong>. Any disputes will be subject to the exclusive jurisdiction of the competent courts of Dubai.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-gray-950">9. Contact Information</h2>
              <p>
                For questions or clarifications regarding these Terms &amp; Conditions, please contact us directly:
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

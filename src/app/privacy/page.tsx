import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#173B5A] md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#245F8F]">← Back to Agilient Freight</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#2B78B8]">Legal</p>
        <h1 className="mt-3 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 leading-7 text-neutral-600">Agilient Freight respects your privacy. We use information you provide through this website, such as contact details and shipment requirements, only to respond to enquiries and improve our services.</p>
        <h2 className="mt-10 text-xl font-semibold">Information we collect</h2>
        <p className="mt-3 leading-7 text-neutral-600">We may collect your name, company, email address, phone number, and message when you contact us. Basic cookies may be used to remember consent and support site functionality.</p>
        <h2 className="mt-10 text-xl font-semibold">Contact</h2>
        <p className="mt-3 leading-7 text-neutral-600">Questions about privacy can be sent to <a className="text-[#245F8F] underline" href="mailto:info@agilentzw.com">info@agilentzw.com</a>.</p>
      </div>
    </main>
  );
}

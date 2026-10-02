import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-[#173B5A] md:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#245F8F]">← Back to Agilient Freight</Link>
        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#2B78B8]">Legal</p>
        <h1 className="mt-3 text-4xl font-bold">Terms of Service</h1>
        <p className="mt-6 leading-7 text-neutral-600">This website provides general information about Agilient Freight’s logistics and trade services. Enquiries submitted through the site are not binding bookings or quotations until confirmed by our team.</p>
        <h2 className="mt-10 text-xl font-semibold">Website use</h2>
        <p className="mt-3 leading-7 text-neutral-600">Please provide accurate information when contacting us and use this website lawfully. Service availability, pricing, schedules, and transit times are subject to confirmation.</p>
        <h2 className="mt-10 text-xl font-semibold">Contact</h2>
        <p className="mt-3 leading-7 text-neutral-600">For service enquiries, contact <a className="text-[#245F8F] underline" href="mailto:info@agilentzw.com">info@agilentzw.com</a>.</p>
      </div>
    </main>
  );
}

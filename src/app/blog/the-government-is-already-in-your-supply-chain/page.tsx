import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDown, ArrowLeft, ArrowRight, Check, Clock3 } from "lucide-react";

export const metadata: Metadata = {
  title: "The Government Is Already in Your Supply Chain | Agilent Freight",
  description:
    "A practical importer advisory on classification, customs value, origin evidence, permits, tax treatment and the decisions that shape landed cost.",
  alternates: {
    canonical: "/blog/the-government-is-already-in-your-supply-chain",
  },
  openGraph: {
    title: "The Government Is Already in Your Supply Chain",
    description:
      "The invoice and freight quote tell only part of the story. Understand the trade decisions that shape your real import cost.",
    type: "article",
    url: "/blog/the-government-is-already-in-your-supply-chain",
    siteName: "Agilent Freight",
    locale: "en_ZW",
    images: [
      {
        url: "/images/importer-advisory.jpg",
        width: 1080,
        height: 720,
        alt: "Freight port at sunset with trade compliance documents and an import checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Government Is Already in Your Supply Chain | Agilent Freight",
    description:
      "A practical importer advisory on the trade decisions that shape landed cost.",
    images: ["/images/importer-advisory.jpg"],
  },
};

const questions = [
  {
    title: "What is the product, precisely?",
    body: "A broad commercial description may not be enough to establish the correct tariff classification. Technical specifications, composition, function and intended use can all matter. Treat a code copied from an old entry as a starting point for verification, not proof.",
  },
  {
    title: "What customs value will be used?",
    body: "The invoice price and customs value are not always identical for every purpose. Consider the applicable valuation rules and any required adjustments using the facts of the transaction.",
  },
  {
    title: "Where do the goods actually originate?",
    body: "The country from which cargo is dispatched does not automatically establish preferential origin. An agreement may require particular production criteria, a qualifying change in tariff classification, value-content rules or prescribed evidence.",
  },
  {
    title: "What treatment are we relying on?",
    body: "Duty rates, surtax, VAT, fees and possible relief depend on the goods, entry date and relevant legal instruments. Treat a rebate, suspension, drawback or preferential rate as conditional until its requirements are checked.",
  },
  {
    title: "Can the goods enter on the planned terms?",
    body: "Some goods require permits, certificates, inspections or other controls. Requirements can vary by commodity and change over time, so confirm them before dispatch with the appropriate authorities or qualified specialists.",
  },
  {
    title: "What is one day of delay worth?",
    body: "Estimate the effect on working capital, storage, demurrage, production, customer commitments and lost sales. A slightly higher-priced option may be commercially stronger if it protects a critical delivery window.",
  },
];

const checklist = [
  "Product description and proposed classification",
  "Customs value and landed-cost assumptions",
  "Origin evidence and any preference claimed",
  "Permits, certificates and inspections to confirm",
  "Document hand-offs and responsible owners",
  "Route risks, delay exposure and delivery window",
];

export default function ImporterAdvisoryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f7f8] text-[#173b5a]">
        <section className="relative overflow-hidden bg-[#102d46] pt-36 text-white lg:pt-44">
          <div className="absolute inset-0 opacity-35">
            <Image
              src="/images/importer-advisory.jpg"
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b263d]/95 via-[#0b263d]/75 to-[#0b263d]/30" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:pb-24">
            <div className="max-w-3xl">
              <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
                <ArrowLeft className="h-4 w-4" /> All trade insights
              </Link>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                <span className="h-px w-8 bg-sky-300" /> Trade intelligence letter <span className="text-white/50">/ 01</span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                The Government Is Already in Your Supply Chain
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
                The invoice tells you what the supplier wants. The freight quote tells you what the transporter charges. Neither tells you, by itself, what the shipment will really cost.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> 6 minute read</span>
                <span className="h-1 w-1 rounded-full bg-sky-300" />
                <span>Importer advisory</span>
              </div>
            </div>
            <div className="border-l border-white/25 py-2 pl-6 lg:justify-self-end lg:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">The idea in one sentence</p>
              <p className="mt-3 text-lg leading-relaxed text-white/90">A shipment can be cheap to buy, cheap to move—and unexpectedly expensive to import.</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">The difference is often decided by classification, customs value, origin evidence, permits, tax treatment and time.</p>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20 lg:py-20">
          <article className="min-w-0">
            <div className="mb-12 overflow-hidden rounded-sm border border-[#173b5a]/10 bg-white shadow-sm">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/images/importer-advisory.jpg"
                  alt="Freight port at sunset with trade compliance documents and a shipment planning checklist"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              <p className="px-5 py-3 text-xs tracking-wide text-[#61788a]">From border to bottom line: turn compliance into a competitive advantage.</p>
            </div>

            <div className="prose-copy">
              <section className="article-section">
                <p className="article-lede">A purchase can look sound on paper, then lose margin after the cargo moves. The gap often comes from decisions made across procurement, freight and customs that were never considered together.</p>
                <h2 id="the-bill">The bill arrives after the decision</h2>
                <p>Picture a familiar scene. You have negotiated the supplier down, compared transport rates, arranged payment, set a delivery date and told your customer when the goods should be available. The numbers look respectable. The deal looks done.</p>
                <p>Then the shipment meets the machinery of trade: tariff schedules, customs procedures, documentary requirements, inspections and the practical realities of a border crossing. A question arises over the tariff code. A certificate does not support the origin you expected to claim. A permit has not been arranged. The customs value needs to be examined. Or a document that looked like an administrative detail becomes the reason your cargo waits.</p>
                <p>The painful part is not merely the extra charge. It is the timing. By the time the problem appears, the purchase has been made, the cargo may already be moving and your options have narrowed. Money is tied up in goods that cannot yet earn money. A production line may be waiting. A customer may be growing impatient. Storage, demurrage, finance costs or emergency sourcing can turn a seemingly sound purchase into a disappointing transaction.</p>
                <p>This is how a business can lose margin without making one spectacular mistake. It makes several reasonable decisions—each in isolation—and discovers too late that they do not fit together.</p>

                <h2>The freight rate is visible. The hidden costs are not.</h2>
                <p>Most businesses scrutinise the transport quote because it arrives as a neat, comparable number. The less visible costs are harder to compare, so they are often treated as inevitable. But an overlooked risk does not become unavoidable simply because it was not included in the spreadsheet.</p>
                <blockquote>What has to be true for this cargo to arrive, clear and become saleable at the cost and time we planned?</blockquote>
                <p>That question connects procurement to customs. It connects origin documents to the trade preference being claimed. It connects the product description to the tariff classification. And it connects the route plan to the cost of delay and the cash tied up while the goods are in transit.</p>

                <h2 id="six-questions">Six small questions can protect a large decision</h2>
                <div className="question-list">
                  {questions.map((question, index) => (
                    <div className="question-row" key={question.title}>
                      <span className="question-number">0{index + 1}</span>
                      <div><h3>{question.title}</h3><p>{question.body}</p></div>
                    </div>
                  ))}
                </div>

                <h2>The opportunity is to know the rules</h2>
                <p>Trade agreements, customs procedures and forms of duty relief can create legitimate opportunities—but they are not magic words that make a shipment cheaper. Each has a defined scope, conditions and documentary requirements. The commercial advantage belongs to the importer who identifies a potentially relevant mechanism early, checks eligibility and keeps the evidence in order.</p>
                <p>For a business importing regularly, this need not become a mountain of paperwork. A disciplined pre-shipment control can be straightforward: record the product description and proposed classification; confirm the origin and supporting documents; list the applicable permits; model expected duties, taxes and other charges; assign responsibility for each document; and flag unresolved questions before the cargo is released to move.</p>
                <p>The system should be proportionate. A familiar, low-risk repeat shipment may need only a short check. A new product, supplier, route, controlled commodity or shipment relying on preferential treatment deserves a closer look. The point is to recognise which imports could become complicated—and act while there is still time to do something about it.</p>

                <h2 id="better-conversation">A better conversation before the cargo moves</h2>
                <p>This is the kind of thinking Agilent Freight brings to the movement of cargo. Transport is essential, but the movement itself is only one stage in a longer commercial process. A shipment must be described correctly, supported by the right documents, planned around its route and handled with a clear view of the issues that could affect clearance, cost and timing.</p>
                <p>For importers, a pre-shipment review can help organise the questions that deserve attention before dispatch: the proposed tariff classification for verification; the assumptions behind the landed-cost estimate; the evidence supporting origin or a claimed preference; cargo-specific permits and certificates to confirm; document hand-offs; and operational risks that may affect the route or delivery window.</p>
                <p>The aim is not to promise that every delay can be prevented or that every shipment qualifies for a saving. It is to replace avoidable surprises with informed decisions. Sometimes that means resolving a documentation gap. Sometimes it means revising the budget, route or delivery promise. Sometimes it confirms that the original plan is sound. Each outcome is useful because it is reached before the cost of changing course becomes unnecessarily high.</p>
              </section>
            </div>

            <section className="my-14 rounded-sm border border-[#dce6ec] bg-white p-7 sm:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2b78b8]">Before your next import</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#173b5a]">A short review before dispatch can surface the important questions.</h2>
              <p className="mt-4 leading-relaxed text-[#526c7e]">Share the product description, country of origin, supplier invoice or pro-forma invoice, intended route and any tariff code or permit details already available. Agilent Freight can help identify key questions and documentary gaps to resolve, then agree the appropriate scope for any further review.</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#294c66]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2b78b8]" />{item}</li>)}
              </ul>
              <Link href="/#contact" className="mt-8 inline-flex items-center gap-2 bg-[#245f8f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173b5a]">
                Discuss an upcoming shipment <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="border-t border-[#173b5a]/15 pt-10">
              <h2 className="font-heading text-2xl font-semibold tracking-tight">The question that changes the economics</h2>
              <p className="mt-5 text-xl font-medium leading-relaxed text-[#245f8f]">Do not ask only what it costs to move the cargo. Ask what must be true for the cargo to arrive, clear and become saleable at the cost and time you planned.</p>
              <p className="mt-5 leading-relaxed text-[#526c7e]">That is the difference between buying transport and managing an import. One gives you a rate. The other gives you a clearer view of the transaction—its costs, obligations, uncertainties and the decisions that remain within your control.</p>
              <p className="mt-4 leading-relaxed text-[#526c7e]">The government is already part of your supply chain. The question is whether its rules enter your calculation before the cargo moves—or after the bill gets bigger.</p>
            </section>

            <p className="mt-12 border-t border-[#173b5a]/10 pt-6 text-xs leading-relaxed text-[#718594]">This letter is general trade and logistics information, not a legal, tax or customs ruling. Tariff classifications, rates, reliefs, permits and procedures can change and must be confirmed against current Zimbabwe legislation, applicable instruments and the facts of the specific shipment before reliance.</p>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[#dce6ec] bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">The landed-cost lens</p>
              <p className="mt-3 text-lg font-semibold leading-snug">Right classification. Right treatment. Lower risk. Better outcomes.</p>
              <div className="mt-5 space-y-3 border-t border-[#e7edf1] pt-5">
                {["Classification", "Valuation", "Origin", "Duties & taxes", "Permits", "Compliance"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between text-sm text-[#526c7e]"><span>{item}</span><span className="text-xs font-medium text-[#2b78b8]">0{index + 1}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-[#e9f1f5] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">In this article</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#35576e]">
                <li><a className="transition hover:text-[#245f8f]" href="#the-bill">The bill arrives after the decision</a></li>
                <li><a className="transition hover:text-[#245f8f]" href="#six-questions">Six questions for importers</a></li>
                <li><a className="transition hover:text-[#245f8f]" href="#better-conversation">Plan before cargo moves</a></li>
              </ul>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#245f8f]"><ArrowDown className="h-4 w-4" /> Back to top</a>
            </div>
            <a href="mailto:info@agilentzw.com" className="block border border-[#dce6ec] bg-white p-6 transition hover:border-[#2b78b8]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">Talk to our team</p>
              <p className="mt-3 text-lg font-semibold">Planning an import?</p>
              <p className="mt-2 text-sm text-[#61788a]">Start with the cargo, origin and route.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#245f8f]">info@agilentzw.com <ArrowRight className="h-4 w-4" /></span>
            </a>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

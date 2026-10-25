import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const slug = "/blog/air-freight-costs-zimbabwe-fuel-capacity-peak-season";
const title = "The Airfreight Squeeze: When Fuel Costs Double and Capacity Becomes a Strategic Asset";
const dek = "What Zimbabwean importers, exporters and supply-chain decision-makers need to know.";
const cover = "/images/airfreight-squeeze-cover.webp";
const sections = [{"id":"why-costs","heading":"Why airfreight costs are under pressure","blocks":[{"type":"paragraph","text":"Jet fuel is a major airline operating expense, but it is not the only one. Aircraft leasing and ownership, crew, maintenance, airport handling, security, insurance and network costs also shape pricing. When fuel rises sharply, carriers may adjust fuel surcharges, base rates or both—but the timing and magnitude vary by route and commercial agreement."},{"type":"paragraph","text":"At the same time, cargo space is not infinitely flexible. Freighter schedules, passenger belly capacity, aircraft type, route frequency and seasonal demand determine how much cargo can move. If demand rises while effective capacity is constrained, shippers may face fewer routing choices, tighter booking windows and less room to negotiate."}]},{"id":"fuel-and-rates","heading":"Why a fuel increase does not translate one-for-one into freight rates","blocks":[{"type":"paragraph","text":"A freight quote is not a direct pass-through of the fuel price. Fuel represents only part of the total operating cost, and carriers may use different surcharge formulas or update them on different schedules. Contracted rates can behave differently from spot-market rates; a route with strong competition may respond differently from one with limited service."},{"type":"paragraph","text":"For a Zimbabwean shipper, the right question is not simply, “How much has fuel increased?” It is: “What has changed in the complete, bookable cost and reliability of moving this specific shipment, on this route, within this time window?”"}]},{"id":"peak-season","heading":"Peak season makes capacity a commercial asset","blocks":[{"type":"paragraph","text":"During seasonal peaks, capacity can become as important as price. A low quotation is of little value if it is not backed by confirmed space, realistic cut-off times and a workable routing. Capacity constraints can also push cargo onto longer routings or increase the risk of rollover to a later flight."},{"type":"paragraph","text":"Businesses should distinguish between an indicative rate and a confirmed booking. Ask whether the quotation includes an actual allotment or confirmed space, how long the rate remains valid, what happens if the cargo misses cut-off, and whether the transit time is scheduled or guaranteed."}]},{"id":"cost-of-waiting","heading":"The hidden cost of waiting","blocks":[{"type":"paragraph","text":"Waiting for a lower rate can be sensible when timing is flexible. It can be expensive when the shipment supports production, a customer deadline, a repair, a project milestone or a seasonal sales window."},{"type":"paragraph","text":"Consider a shipment where airfreight costs US$8,000 and a slower option costs US$3,000. The apparent saving is US$5,000. But if the slower route creates 15 extra days of delay, the business should assess the value of those days: lost contribution margin, production stoppage, penalties, emergency procurement, stock-outs or a missed delivery commitment. These figures are illustrative, not a market quotation."},{"type":"paragraph","text":"The relevant comparison is total economic cost—not transport price alone."}]},{"id":"landed-cost","heading":"Compare the complete landed and delivered cost","blocks":[{"type":"paragraph","text":"For Zimbabwe-bound cargo, the airport-to-airport rate is only one component of the shipment’s cost. Compare like with like and request a written breakdown of:"},{"type":"list","items":["Airfreight base rate and fuel or security surcharges","Origin handling, screening, documentation and export charges","Destination handling, terminal charges and delivery order fees","Customs clearance, applicable duties and taxes, and any permit requirements","Inland delivery to the final Zimbabwean destination","Storage, terminal charges or other costs if documentation or collection is delayed","Rate validity, currency, payment terms, exclusions and booking conditions"]},{"type":"paragraph","text":"Do not assume that two quotations are comparable because both show a price per kilogram. One may exclude origin fees, destination handling, screening or inland transport. A properly normalised comparison exposes the real difference."}]},{"id":"chargeable-weight","heading":"Chargeable weight can change the economics","blocks":[{"type":"paragraph","text":"Airfreight is commonly priced on chargeable weight, which reflects the greater of actual gross weight and volumetric weight under the applicable carrier or service rules. Bulky, lightweight cartons can therefore cost more than their scale weight suggests."},{"type":"paragraph","text":"Before booking, verify carton dimensions, packaging and palletisation. Sensible packaging can improve space utilisation, but never compromise cargo protection or regulatory requirements. Ask the freight provider to confirm the chargeable-weight calculation before the shipment is accepted."}]},{"id":"zimbabwe-planning","heading":"Zimbabwe-specific planning: documentation is part of transit time","blocks":[{"type":"paragraph","text":"A flight may be fast; the full movement can still be delayed by incomplete paperwork, inconsistent commercial documents, permit questions, customs classification issues or a mismatch between the shipment description and supporting documents."},{"type":"paragraph","text":"Zimbabwean importers should align the commercial invoice, packing list, transport documents and any required licences or permits before dispatch. Confirm the tariff classification, customs valuation basis and applicable import requirements with a qualified customs professional or the relevant authority. Requirements vary by commodity and can change; this article is general commercial guidance, not a tariff ruling or legal opinion."},{"type":"paragraph","text":"For cargo moving through regional gateways, include the onward leg, handover times, operating calendars and contingency arrangements in the plan. A fast international flight does not guarantee fast delivery to Harare, Bulawayo, Mutare or a mine or project site."}]},{"id":"hybrid-strategy","heading":"Use a hybrid freight strategy","blocks":[{"type":"paragraph","text":"Not every shipment should travel by air, and not every shipment should avoid it. Segment cargo by business consequence:"},{"type":"list","items":["Airfreight: urgent spares, high-value goods, samples, critical components or cargo where delay costs exceed the premium.","Sea freight: planned replenishment, heavier cargo and shipments with sufficient lead time.","Road or multimodal options: suitable regional movements where route, border conditions, cargo type and delivery deadlines support them.","Split shipments: move the critical quantity by air and the balance through a lower-cost mode when the economics justify it."]},{"type":"paragraph","text":"A hybrid plan can reduce the risk of putting every item into the most expensive mode—or allowing one delayed item to hold up an entire order."}]},{"id":"checklist","heading":"A practical checklist for importers and exporters","blocks":[{"type":"list","items":["Forecast demand early and identify shipments that cannot miss their delivery window.","Request an itemised, written quotation with a clear validity period.","Confirm space, routing, cut-off, transit-time assumptions and contingency options.","Validate dimensions and chargeable weight before finalising the budget.","Prepare customs and shipping documents before cargo handover.","Compare air, sea, road and split-shipment scenarios using total economic cost.","Agree who will communicate exceptions and what decisions are required if a flight or connection changes.","Review the shipment after delivery: quoted versus final cost, planned versus actual transit, and causes of avoidable delay."]}]},{"id":"decision","heading":"The decision is not simply speed versus price","blocks":[{"type":"paragraph","text":"The best freight choice is the one that protects the commercial objective at an acceptable total cost and level of risk. In a volatile market, that requires more than asking for the cheapest rate. It requires a clear view of the cargo’s urgency, a credible booking, clean documentation and a realistic end-to-end plan."},{"type":"paragraph","text":"For Zimbabwean businesses, the strategic advantage lies in making the transport decision before the shipment becomes an emergency. Early planning does not remove market volatility, but it improves the number of options available when conditions tighten."}]},{"id":"sources","heading":"Sources and market-data note","blocks":[{"type":"paragraph","text":"The supplied campaign graphic attributes a 111% year-on-year jet-fuel increase to TAC Index for the week to 2 October 2026. A Baltic Exchange market column published on 9 October reported the IATA Jet Fuel Price Monitor at +108% year on year as of 2 October. These are differently attributed series; verify the underlying index before treating the percentages as directly comparable. The same Baltic Exchange column reported the TAC Airfreight Baltic Index up 25.5% year on year in the week to 5 October. IATA’s August 2026 air-cargo analysis reported demand up 4.4% year on year and capacity down 0.1%. Dates and measures differ, so the figures are shown with their respective sources."},{"type":"list","items":["Baltic Exchange, Air freight rates remain firm in September with renewed surge in jet fuel yet to feed through: https://www.balticexchange.com/en/news-and-events/news/guest-column/2026/Air-freight-rates-remain-firm-in-September-with-renewed-surge-in-jet-fuel-yet-to-feed-through.html","IATA, Air Cargo Market Analysis — August 2026: https://www.iata.org/en/publications/economics/reports/air-cargo-market-analysis-august-2026/"]}]}];

type ArticleBlock = { type: "paragraph"; text: string } | { type: "list"; items: string[] };
type ArticleSection = { id: string; heading: string; blocks: ArticleBlock[] };

export const metadata: Metadata = {
  title: "Air Freight Costs in Zimbabwe: Fuel, Capacity & Peak Season | Agilent Freight",
  description: "Rising jet fuel costs and tight air cargo capacity can increase shipping costs to Zimbabwe. Learn how importers can compare quotes, secure space and reduce landed-cost risk.",
  alternates: { canonical: slug },
  authors: [{ name: "Agilent Freight" }],
  openGraph: {
    title,
    description: dek,
    type: "article",
    url: slug,
    siteName: "Agilent Freight",
    locale: "en_ZW",
    images: [{ url: cover, width: 1280, height: 853, alt: "Agilent Freight airfreight insight on fuel costs, cargo capacity and peak-season shipping" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: dek,
    images: [cover],
  },
};

function SourceItem({ text }: { text: string }) {
  const urlStart = text.indexOf("https://");
  if (urlStart === -1) return <>{text}</>;
  const label = text.slice(0, urlStart).replace(/:\\s*$/, "");
  const url = text.slice(urlStart).trim();
  return <><span>{label}: </span><a href={url} target="_blank" rel="noopener noreferrer" className="break-all font-medium text-[#245f8f] underline underline-offset-2 hover:text-[#173b5a]">View source</a></>;
}

function MarketStat({value,label,source}:{value:string;label:string;source:string}) {
  return <div className="border-l border-white/15 pl-4 first:border-0 first:pl-0"><p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{value}</p><p className="mt-1 text-xs font-medium leading-snug text-white/75">{label}</p><p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-sky-200/75">{source}</p></div>;
}

export default function AirfreightSqueezeArticlePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f7f8] text-[#173b5a]">
        <section className="relative isolate overflow-hidden bg-[linear-gradient(118deg,#0b2338_0%,#102d46_62%,#174a70_100%)] px-6 pb-14 pt-32 text-white sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
          <div aria-hidden="true" className="pointer-events-none absolute -right-44 -top-56 h-[34rem] w-[34rem] rounded-full border border-sky-200/10 shadow-[0_0_0_70px_rgba(84,197,240,0.035),0_0_0_150px_rgba(84,197,240,0.025)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] lg:items-center lg:gap-16">
            <div>
              <Link href="/blog" className="mb-9 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> All trade insights</Link>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200"><span className="h-px w-8 bg-[#54c5f0]" /> Air freight / Peak-season planning</p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{dek}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70"><span>Agilent Freight</span><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" /> 9 minute read</span><span>Zimbabwe · October 2026</span></div>
            </div>
            <aside aria-label="Market snapshot" className="border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Market snapshot</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">Recent indicators point to a tighter and more expensive airfreight market.</p>
              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-2">
                <MarketStat value="+111%" label="Jet fuel prices, year on year" source="TAC Index · supplied graphic" />
                <MarketStat value="+25.5%" label="Global airfreight rates, year on year" source="TAC Index · week to 5 Oct" />
                <MarketStat value="+4.4%" label="Global air cargo demand, year on year" source="IATA · August 2026" />
                <MarketStat value="−0.1%" label="Available cargo capacity, year on year" source="IATA · August 2026" />
              </div>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/55">Figures refer to the source periods shown; fuel-index readings differ by series. See the source note below.</p>
            </aside>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pt-8 sm:pt-10 lg:pt-14">
          <figure>
            <Image src={cover} alt="Agilent Freight airfreight infographic on rising jet fuel prices, air cargo rates and capacity ahead of peak season" width={1280} height={853} priority sizes="(max-width: 1280px) 100vw, 1280px" className="h-auto w-full border border-[#dce6ec]" />
            <figcaption className="mt-3 text-sm leading-relaxed text-[#61788a]">Airfreight planning for Zimbabwean businesses: compare the complete cost, confirmed space and delivery risk.</figcaption>
          </figure>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 sm:py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20 lg:py-20">
          <article className="min-w-0">
            <div className="mb-10 border-l-4 border-[#2b78b8] bg-white px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">The central idea</p>
              <p className="mt-3 text-lg leading-relaxed text-[#294c66]">In international trade, the real cost is not just what you pay to move cargo; it is what you pay to get it through the system. Right mode, confirmed capacity and clean documentation help protect the delivery outcome.</p>
            </div>
            <div className="prose-copy">
              <p className="mb-8 text-lg leading-relaxed text-[#294c66]">Airfreight is often treated as a simple purchase: obtain a rate, book space, move the cargo. In a tight market, that view is incomplete. Fuel prices, available capacity, routing decisions, chargeable weight, security requirements and the cost of delay all influence the final commercial outcome.</p>
              <p className="mb-8">With industry reporting pointing to sharp year-on-year increases in jet fuel and 2026 peak season approaching amid capacity pressure, Zimbabwean importers and exporters should treat airfreight planning as a supply-chain decision—not merely a freight-rate negotiation.</p>
              <p className="mb-12">A critical distinction: a rise in jet fuel does not mean that an airfreight quotation automatically rises by the same percentage. Fuel is one input among several. The practical effect depends on the carrier, route, contract, surcharge structure, aircraft economics and market conditions.</p>
              {(sections as ArticleSection[]).map((section) => (
                <section className="article-section" key={section.id}>
                  <h2 id={section.id}>{section.heading}</h2>
                  {section.blocks.map((block, index) => block.type === "paragraph" ? (
                    <p key={`${section.id}-${index}`}>{section.id === "sources" ? <SourceItem text={block.text} /> : block.text}</p>
                  ) : (
                    <ul key={`${section.id}-${index}`} className="mb-8 list-disc space-y-3 pl-6 marker:text-[#2b78b8]">
                      {block.items.map((item) => <li key={item}><SourceItem text={item} /></li>)}
                    </ul>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-[#173b5a]/15 pt-8">
              <p className="text-sm font-semibold text-[#173b5a]">Agilent Freight</p>
              <p className="mt-1 text-sm text-[#61788a]">Agile in Motion. Intelligent in Mind.</p>
              <p className="mt-2 text-sm text-[#61788a]">www.agilentzw.com · +263 242 313 707 · info@agilentzw.com</p>
              <Link href="/blog/the-customs-act-is-not-just-a-border-rulebook" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#245f8f] hover:text-[#173b5a]"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Read the customs insight</Link>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Article contents" className="bg-[#e9f1f5] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">In this article</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#35576e]">
                {(sections as ArticleSection[]).filter((section) => section.id !== "sources").map((section) => <li key={section.id}><a className="transition hover:text-[#245f8f]" href={`#${section.id}`}>{section.heading}</a></li>)}
              </ul>
            </nav>
            <Link href="/#contact" className="block border border-[#dce6ec] bg-white p-6 transition hover:border-[#2b78b8]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">Talk to our team</p>
              <p className="mt-3 text-lg font-semibold">Planning an import?</p>
              <p className="mt-2 text-sm text-[#61788a]">Share your route, cargo dimensions, readiness date and delivery window to compare suitable options.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#245f8f]">Contact Agilent Freight <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

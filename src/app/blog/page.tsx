import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trade Insights | Agilent Freight",
  description:
    "Practical trade intelligence for importers: customs, landed cost, classification, valuation, origin and shipment readiness.",
  alternates: { canonical: "/blog" },
};

const articles = [
  {
    number: "01",
    title: "The Government Is Already in Your Supply Chain",
    description:
      "The invoice and freight quote tell only part of the story. Understand the decisions that shape your real import cost.",
    href: "/blog/the-government-is-already-in-your-supply-chain",
    image: "/images/importer-advisory.jpg",
    alt: "Freight port at sunset with trade compliance documents",
    readTime: "6 min read",
    author: "Agilent Freight",
  },
  {
    number: "02",
    title: "The Customs Act Is Not Just a Border Rulebook",
    description:
      "Customs law shapes the transaction long before goods reach a port of entry. A practical guide to the questions importers should resolve before dispatch.",
    href: "/blog/the-customs-act-is-not-just-a-border-rulebook",
    image: "/images/customs-act-blog.jpg",
    alt: "Agilent Freight customs article illustration showing a trade professional reviewing clearance documents",
    readTime: "12 min read",
    author: "Tafadzwa Madondo",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f7f8] text-[#173b5a]">
        <section className="bg-[#102d46] px-6 pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Agilent Freight / Insights</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Trade intelligence for better decisions.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">Clear thinking on customs, cost and the decisions that make a shipment ready to move.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20" aria-label="Trade insight articles">
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => (
              <article key={article.href} className="flex flex-col overflow-hidden border border-[#dce6ec] bg-white">
                <Link href={article.href} className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b78b8]" aria-label={`Read ${article.title}`}>
                  <div className="relative aspect-[3/2] overflow-hidden bg-[#102d46]">
                    <Image src={article.image} alt={article.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none" />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">Trade intelligence letter / {article.number}</p>
                  <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"><Link href={article.href} className="hover:text-[#2b78b8]">{article.title}</Link></h2>
                  <p className="mt-4 flex-1 leading-relaxed text-[#526c7e]">{article.description}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-[#dce6ec] pt-5 text-sm text-[#61788a]">
                    <span>{article.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" aria-hidden="true" />{article.readTime}</span>
                  </div>
                  <Link href={article.href} className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#245f8f] hover:text-[#173b5a]">Read article <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

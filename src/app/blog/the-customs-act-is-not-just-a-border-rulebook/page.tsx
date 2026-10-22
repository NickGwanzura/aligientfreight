import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import article from "@/content/customs-act-article.json";

const slug = "/blog/the-customs-act-is-not-just-a-border-rulebook";
type ArticleBlock = { type: "paragraph"; text: string } | { type: "list"; items: string[] };
const sections = article.sections as { id: string; heading: string; blocks: ArticleBlock[] }[];

export const metadata: Metadata = {
  title: `${article.title} | Agilent Freight`,
  description: article.dek,
  alternates: { canonical: slug },
  authors: [{ name: article.author }],
  openGraph: {
    title: article.title,
    description: article.dek,
    type: "article",
    url: slug,
    siteName: "Agilent Freight",
    locale: "en_ZW",
    images: [{ url: "/images/customs-act-blog.jpg", width: 1280, height: 853, alt: "Agilent Freight customs article illustration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.dek,
    images: ["/images/customs-act-blog.jpg"],
  },
};

function SourceItem({ text }: { text: string }) {
  const urlStart = text.indexOf("https://");
  if (urlStart === -1) return <>{text}</>;
  const label = text.slice(0, urlStart).replace(/:\s*$/, "");
  const url = text.slice(urlStart).trim();
  return <><span>{label}: </span><a href={url} target="_blank" rel="noopener noreferrer" className="break-all font-medium text-[#245f8f] underline underline-offset-2 hover:text-[#173b5a]">View official source</a></>;
}

export default function CustomsActArticlePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f7f8] text-[#173b5a]">
        <section className="bg-[#102d46] px-6 pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
          <div className="mx-auto max-w-7xl">
            <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> All trade insights</Link>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Trade intelligence letter / 02</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">{article.dek}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/70"><span>By {article.author}</span><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" aria-hidden="true" /> 12 minute read</span></div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 pt-10 lg:pt-14">
          <Image src="/images/customs-act-blog.jpg" alt="Agilent Freight customs compliance illustration: a trade professional reviews shipment documents by a port" width={1280} height={853} priority sizes="(max-width: 1280px) 100vw, 1280px" className="h-auto w-full border border-[#dce6ec]" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20 lg:py-20">
          <article className="min-w-0">
            <div className="mb-12 border-l-4 border-[#2b78b8] bg-white px-6 py-6 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">The central idea</p>
              <p className="mt-3 text-lg leading-relaxed text-[#294c66]">{article.centralIdea}</p>
            </div>
            <p className="mb-12 text-sm leading-relaxed text-[#61788a]">{article.audience}</p>
            <div className="prose-copy">
              {sections.map((section) => (
                <section className="article-section" key={section.id}>
                  <h2 id={section.id}>{section.heading}</h2>
                  {section.blocks.map((block, index) => block.type === "paragraph" ? (
                    <p key={`${section.id}-${index}`}>{block.text}</p>
                  ) : (
                    <ul key={`${section.id}-${index}`} className="mb-8 list-disc space-y-3 pl-6 marker:text-[#2b78b8]">
                      {block.items.map((item) => <li key={item}><SourceItem text={item} /></li>)}
                    </ul>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-[#173b5a]/15 pt-8">
              <p className="text-sm font-semibold text-[#173b5a]">{article.author}</p>
              <p className="mt-1 text-sm text-[#61788a]">Agilent Freight · Agile in Motion. Intelligent in Mind.</p>
              <Link href="/blog/the-government-is-already-in-your-supply-chain" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#245f8f] hover:text-[#173b5a]"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Read the first trade intelligence letter</Link>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Article contents" className="bg-[#e9f1f5] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">In this article</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#35576e]">
                {sections.filter((section) => !section.heading.startsWith("Sources")).map((section) => <li key={section.id}><a className="transition hover:text-[#245f8f]" href={`#${section.id}`}>{section.heading}</a></li>)}
              </ul>
            </nav>
            <Link href="/#contact" className="block border border-[#dce6ec] bg-white p-6 transition hover:border-[#2b78b8]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2b78b8]">Talk to our team</p>
              <p className="mt-3 text-lg font-semibold">Planning an import?</p>
              <p className="mt-2 text-sm text-[#61788a]">Resolve the important questions before cargo moves.</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#245f8f]">Contact Agilent Freight <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

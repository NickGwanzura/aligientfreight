import Image from "next/image";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f2f7fb] text-[#173b5a]">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-[#2b78b8]/[0.045] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[38%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#173b5a]/[0.06] to-transparent lg:block" />

      <div className="relative mx-auto grid min-h-[640px] max-w-[1440px] items-center gap-12 px-5 pb-12 pt-10 sm:px-8 md:px-12 lg:min-h-[690px] lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] lg:gap-12 lg:px-16 lg:py-14 xl:gap-20 xl:px-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2b78b8]/20 bg-white/75 px-4 py-2.5 shadow-sm shadow-[#173b5a]/[0.04]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2b78b8]/40 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#2b78b8]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#35576e] sm:text-xs">Freight solutions from Zimbabwe across SADC</span>
          </div>

          <div className="mt-8 flex items-start gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#61788a] sm:text-xs">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2b78b8]" aria-hidden="true" />
            <span>Harare, Zimbabwe <span className="mx-2 text-[#2b78b8]/55">/</span> Global freight solutions</span>
          </div>

          <h1 className="mt-6 max-w-2xl font-heading text-[clamp(3.3rem,6vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#173b5a]">
            Engineering cargo flow <span className="text-[#2b78b8]">across Africa.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#526c7e] sm:text-lg sm:leading-8">
            Road, ocean and air freight, customs support and corridor coordination—planned as one connected movement from origin to delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#2b78b8] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#173b5a]/15 transition hover:bg-[#245f8f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b78b8]">
              Request a freight quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#services" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#173b5a]/15 bg-white/70 px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#173b5a] transition hover:border-[#2b78b8]/50 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b78b8]">
              Explore capabilities
              <ArrowUpRight className="h-4 w-4 text-[#2b78b8]" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-[#173b5a]/12 pt-5 sm:mt-12 sm:pt-6">
            <div className="pr-3 sm:pr-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#173b5a] sm:text-sm">Road</p>
              <p className="mt-1.5 text-[11px] leading-5 text-[#61788a] sm:text-xs">Regional movement</p>
            </div>
            <div className="border-l border-[#173b5a]/12 px-3 sm:px-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#173b5a] sm:text-sm">Ocean & air</p>
              <p className="mt-1.5 text-[11px] leading-5 text-[#61788a] sm:text-xs">Import and export</p>
            </div>
            <div className="border-l border-[#173b5a]/12 pl-3 sm:pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#173b5a] sm:text-sm">Customs</p>
              <p className="mt-1.5 text-[11px] leading-5 text-[#61788a] sm:text-xs">Trade coordination</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[700px] lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#2b78b8]/20 via-white to-[#f4c64e]/25 blur-xl" aria-hidden="true" />
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-[#102d46] shadow-2xl shadow-[#173b5a]/20 sm:min-h-[460px] lg:min-h-[540px] xl:min-h-[580px]">
            <Image
              src="/global-logistics-port.png"
              alt="Container ship, cargo aircraft and freight trucks connected at a port"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071e31]/90 via-[#071e31]/15 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
              <span className="rounded-full border border-white/30 bg-[#102d46]/60 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur sm:text-[10px]">Agilent Freight / SADC</span>
              <span className="rounded-full bg-white p-2.5 shadow-lg"><Image src="/agilient-freight-logo.svg" alt="Agilent Freight" width={34} height={34} className="h-7 w-auto" /></span>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-[#0b2338]/75 p-5 text-white shadow-xl backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9bddf6]">One connected movement</p>
              <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3">
                <div><p className="text-xs font-semibold sm:text-sm">Origin</p><p className="mt-1 text-[10px] text-white/65 sm:text-xs">Supplier</p></div>
                <span className="h-px w-full bg-[#75c9ed]/60" aria-hidden="true" />
                <div><p className="text-xs font-semibold sm:text-sm">Border</p><p className="mt-1 text-[10px] text-white/65 sm:text-xs">Clearance</p></div>
                <span className="h-px w-full bg-[#75c9ed]/60" aria-hidden="true" />
                <div><p className="text-xs font-semibold sm:text-sm">Delivery</p><p className="mt-1 text-[10px] text-white/65 sm:text-xs">Destination</p></div>
              </div>
              <p className="mt-4 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/75 sm:text-sm">We coordinate the hand-offs that keep cargo moving across regional and global trade routes.</p>
            </div>
          </div>
          <p className="mt-3 text-right text-[10px] font-medium uppercase tracking-[0.16em] text-[#61788a]">Agile in Motion. Intelligent in Mind.</p>
        </div>
      </div>
    </section>
  );
}

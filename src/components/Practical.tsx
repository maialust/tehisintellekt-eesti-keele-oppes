import { ArrowUpRight, CalendarDays, CalendarPlus, Clock, Laptop, MapPin, Plus, Presentation } from "lucide-react";
import { facilitator, faq, hasRegistrationUrl, REGISTRATION_ANCHOR, workshop } from "../data/workshop";
import { LinkButton, RegisterButton } from "./Buttons";
import { SectionHeading } from "./SectionHeading";
import { cap, weekday } from "./dates";
import { nav } from "./Header";

const calendarHref = `${import.meta.env.BASE_URL}tootuba-28-11-2026.ics`;

export function CalendarButton({ variant = "outlineDark" as "outline" | "outlineDark" }) {
  return (
    <a
      href={calendarHref}
      download
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-bold transition duration-200 ${
        variant === "outline"
          ? "border border-white/35 text-white hover:border-white/60 hover:bg-white/10"
          : "border border-navy-900/20 text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/5"
      }`}
    >
      <CalendarPlus className="size-[1.1em]" aria-hidden="true" />
      Lisa kalendrisse
    </a>
  );
}

/* ---------------------------------------------------------------------
 * Läbiviija
 * ------------------------------------------------------------------- */
export function Facilitator() {
  return (
    <section id="labiviija" aria-labelledby="labiviija-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading id="labiviija-title" eyebrow="Läbiviija" tone="coral" title="Kes töötoa läbi viib?" />

        <div className="reveal card mt-12 flex flex-col gap-7 p-7 sm:flex-row sm:items-center sm:p-9">
          <img
            src={`${import.meta.env.BASE_URL}${facilitator.photo}`}
            alt={`Töötoa läbiviija ${facilitator.name}`}
            width={160}
            height={160}
            loading="lazy"
            className="size-32 shrink-0 rounded-3xl bg-white object-cover ring-1 ring-line sm:size-40"
          />
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-navy-900">{facilitator.name}</h3>
            <ul className="mt-3 space-y-1.5">
              {facilitator.roles.map((r) => (
                <li key={r} className="flex items-start gap-2.5 leading-snug font-semibold text-teal-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-coral-400" aria-hidden="true" />
                  {cap(r)}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {facilitator.profile && (
                <a
                  href={facilitator.profile}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-700 underline-offset-4 hover:text-navy-900 hover:underline"
                >
                  ETIS
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (avaneb uues aknas)</span>
                </a>
              )}
              {facilitator.orcid && (
                <a
                  href={facilitator.orcid}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-700 underline-offset-4 hover:text-navy-900 hover:underline"
                >
                  ORCID
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (avaneb uues aknas)</span>
                </a>
              )}
              {facilitator.portfolio && (
                <a
                  href={facilitator.portfolio}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-700 underline-offset-4 hover:text-navy-900 hover:underline"
                >
                  Meisterõpetaja portfoolio
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (avaneb uues aknas)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Aeg ja koht
 * ------------------------------------------------------------------- */
export function Info() {
  const items = [
    { icon: CalendarDays, label: "Kuupäev", value: workshop.date, note: cap(weekday(workshop.date)) },
    { icon: Clock, label: "Kellaaeg", value: `${workshop.start}–${workshop.end}`, note: `${workshop.durationMinutes} minutit` },
    { icon: Presentation, label: "Vorm", value: workshop.type, note: "Praktiline, kohapeal" },
    { icon: Laptop, label: "Vaja läheb", value: "Nutitelefon või sülearvuti", note: "Proovime kõike ise" },
  ];

  return (
    <section id="info" aria-labelledby="info-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="info-title"
          eyebrow="Aeg ja koht"
          tone="teal"
          title="Praktiline info"
          lead={`Töötuba toimub EKTKÕLi juubelikonverentsil „${workshop.event}“.`}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {items.map((it, i) => (
              <li key={it.label} className="reveal card flex flex-col p-6" style={{ ["--delay" as string]: `${(i % 2) * 80}ms` }}>
                <span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-teal-700">
                  <it.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-sm font-semibold text-muted">{it.label}</p>
                <p className="mt-0.5 text-xl font-extrabold text-navy-900">{it.value}</p>
                <p className="mt-1 text-sm text-muted">{it.note}</p>
              </li>
            ))}
          </ul>

          <div className="reveal on-dark relative flex flex-col overflow-hidden rounded-3xl bg-navy-900 p-7 text-white sm:p-9" style={{ ["--delay" as string]: "120ms" }}>
            <div className="absolute -top-16 -right-16 size-56 rounded-full bg-coral-500/30 blur-3xl" aria-hidden="true" />
            <span className="relative grid size-12 place-items-center rounded-2xl bg-coral-400 text-navy-950">
              <MapPin className="size-6" aria-hidden="true" />
            </span>
            <p className="relative mt-5 text-sm font-bold tracking-wider text-sun-300 uppercase">Toimumiskoht</p>
            <p className="relative mt-2 text-2xl leading-snug font-extrabold">{workshop.venue}</p>
            <p className="relative mt-2 text-navy-100">{workshop.address}</p>
            <div className="relative mt-auto flex flex-col gap-3 pt-8 sm:flex-row sm:flex-wrap">
              <a
                href={workshop.mapUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[0.95rem] font-bold text-navy-900 transition hover:bg-navy-50"
              >
                Ava kaardil
                <ArrowUpRight className="size-[1.1em]" aria-hidden="true" />
                <span className="sr-only"> (avaneb uues aknas)</span>
              </a>
              <CalendarButton variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * KKK
 * ------------------------------------------------------------------- */
export function Faq() {
  return (
    <section id="kkk" aria-labelledby="kkk-title" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="kkk-title" eyebrow="KKK" tone="sun" title="Korduma kippuvad küsimused" />
        </div>
        <div className="reveal divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left font-bold text-navy-900 transition-colors hover:bg-navy-50/60 sm:px-7">
                <span>{item.q}</span>
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-900 transition-transform duration-300 group-open:rotate-45 group-open:bg-coral-400">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted sm:px-7">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Registreerimine
 * ------------------------------------------------------------------- */
export function FinalCta() {
  return (
    <section id={REGISTRATION_ANCHOR} aria-labelledby="registreeru-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="on-dark relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-navy-900 px-6 py-16 text-center text-white sm:px-12 sm:py-24">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
        <div className="absolute -top-32 -left-24 -z-10 size-[30rem] rounded-full bg-violet-500/35 blur-[110px]" aria-hidden="true" />
        <div className="absolute -right-24 -bottom-32 -z-10 size-[30rem] rounded-full bg-teal-500/25 blur-[110px]" aria-hidden="true" />

        <p className="reveal eyebrow justify-center text-sun-300">
          <span className="size-2 rounded-full bg-sun-400" aria-hidden="true" />
          Registreerimine
        </p>
        <h2 id="registreeru-title" className="reveal h2 mx-auto mt-4 max-w-3xl text-white">
          Kohtume {workshop.date} kell {workshop.start}
        </h2>
        <p className="reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
          {workshop.venue}, Tallinn. Võta kaasa nutitelefon või sülearvuti.
        </p>

        <div className="reveal mx-auto mt-9 flex max-w-xl flex-col items-center gap-4">
          {hasRegistrationUrl ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <RegisterButton size="lg" />
              <CalendarButton variant="outline" />
            </div>
          ) : (
            <>
              <p className="w-full rounded-2xl bg-white/10 px-6 py-5 leading-relaxed ring-1 ring-white/20">
                <strong className="block text-lg text-white">Registreerimise info lisatakse sellele lehele.</strong>
                <span className="text-navy-100">Seniks saad aja oma kalendrisse salvestada.</span>
              </p>
              <CalendarButton variant="outline" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Jalus
 * ------------------------------------------------------------------- */
export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-14 pb-28 lg:pb-14">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold tracking-tight text-navy-900">{workshop.name}</p>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            {workshop.type} EKTKÕLi juubelikonverentsil „{workshop.event}“. Läbiviija {facilitator.name}.
          </p>
          <p className="mt-2 text-muted">
            {workshop.date}, {workshop.start}–{workshop.end} · {workshop.address}
          </p>
          <div className="mt-5">
            <LinkButton href="#top" variant="outlineDark" className="!px-4 !py-2 text-sm">
              Lehe algusesse
            </LinkButton>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-wider text-navy-900 uppercase">Korraldaja</h2>
          <img
            src={`${import.meta.env.BASE_URL}${workshop.organizerLogo}`}
            alt={workshop.organizer}
            width={800}
            height={259}
            loading="lazy"
            className="mt-4 block h-16 w-auto max-w-full mix-blend-multiply"
          />
        </div>

        <nav aria-label="Jaluse menüü">
          <h2 className="text-sm font-bold tracking-wider text-navy-900 uppercase">Lehel</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-muted">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-navy-900 hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container-page mt-12 border-t border-line pt-6 text-sm text-muted">
        See leht ei kogu isikuandmeid ega kasuta küpsiseid ega jälgimisvahendeid.
      </div>
    </footer>
  );
}

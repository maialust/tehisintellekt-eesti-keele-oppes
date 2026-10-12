import {
  BookA,
  FileText,
  Gift,
  Languages,
  MessageSquareCheck,
  MessagesSquare,
  Scale,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import { activities, critical, estonianCheck, perspectives, workshop, type IconKey } from "../data/workshop";
import { RegisterButton } from "./Buttons";
import { SectionHeading } from "./SectionHeading";

const icons: Record<IconKey, typeof Sparkles> = {
  sparkles: Sparkles,
  messages: MessagesSquare,
  sliders: SlidersHorizontal,
  book: BookA,
  check: MessageSquareCheck,
  file: FileText,
};

const tints = [
  "bg-coral-50 text-coral-700",
  "bg-teal-50 text-teal-700",
  "bg-violet-50 text-violet-700",
  "bg-sun-50 text-sun-700",
];

/* ---------------------------------------------------------------------
 * Töötoast: kaks vaatenurka + kellele
 * ------------------------------------------------------------------- */
export function About() {
  const pIcons = [UserRound, UsersRound];
  return (
    <section id="tootoast" aria-labelledby="tootoast-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="tootoast-title"
          eyebrow="Töötoast"
          tone="coral"
          title="Tehisaru kahest küljest: õppija ja koolitaja"
          lead={`50-minutiline praktiline töötuba ürituse „${workshop.event}“ raames.`}
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {perspectives.map((p, i) => {
            const I = pIcons[i % pIcons.length];
            return (
              <li key={p.title} className="reveal card p-7 sm:p-8" style={{ ["--delay" as string]: `${i * 100}ms` }}>
                <span className={`grid size-12 place-items-center rounded-2xl ${tints[i % tints.length]}`}>
                  <I className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy-900">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Mida töötoas proovime
 * ------------------------------------------------------------------- */
export function Activities() {
  return (
    <section id="proovime" aria-labelledby="proovime-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="proovime-title"
          eyebrow="Mida proovime"
          tone="teal"
          title="Kuus viisi, kuidas tehisaru keeleõppes appi võtta"
          lead="Töötoas ei räägita ainult tehisarust — proovime kõike ise järele."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => {
            const I = icons[a.icon];
            return (
              <li
                key={a.title}
                className="reveal card group relative overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                style={{ ["--delay" as string]: `${(i % 3) * 90}ms` }}
              >
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-navy-50 tabular-nums" aria-hidden="true">
                  {i + 1}
                </span>
                <span className={`relative grid size-12 place-items-center rounded-2xl ${tints[i % tints.length]}`}>
                  <I className="size-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-xl font-extrabold tracking-tight text-navy-900">{a.title}</h3>
                <p className="relative mt-2 leading-relaxed text-muted">{a.text}</p>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-5 flex flex-col gap-5 rounded-3xl bg-gradient-to-br from-violet-50 via-white to-teal-50 p-7 ring-1 ring-line sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-navy-900 text-sun-300">
            <Languages className="size-7" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-navy-900">{estonianCheck.title}</h3>
            <p className="mt-1 leading-relaxed text-muted">{estonianCheck.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Kriitiline pool
 * ------------------------------------------------------------------- */
export function Critical() {
  return (
    <section aria-labelledby="kriitiline-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="on-dark relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-navy-900 px-6 py-14 text-white sm:px-12 sm:py-20">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-24 -right-24 -z-10 size-[24rem] rounded-full bg-violet-500/30 blur-[100px]" aria-hidden="true" />
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr]">
          <span className="reveal grid size-24 place-items-center rounded-3xl bg-white/10 text-sun-300 ring-1 ring-white/15 sm:size-28">
            <Scale className="size-12 sm:size-14" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <div className="reveal" style={{ ["--delay" as string]: "100ms" }}>
            <p className="eyebrow text-sun-300">
              <span className="size-2 rounded-full bg-sun-400" aria-hidden="true" />
              Kriitiline pool
            </p>
            <h2 id="kriitiline-title" className="h2 mt-4 text-white">
              {critical.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-navy-100">{critical.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Mida kaasa saad / mida kaasa võtta
 * ------------------------------------------------------------------- */
export function Takeaway() {
  return (
    <section id="kaasa" aria-labelledby="kaasa-title" className="pb-20 sm:pb-28">
      <div className="container-page">
        <SectionHeading id="kaasa-title" eyebrow="Kaasa" tone="violet" title="Tule seadmega, lahku valmis promptidega" />

        <div className="mt-12 grid gap-5 md:grid-cols-[1.25fr_1fr]">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral-400 via-sun-400 to-teal-400 p-[2px] shadow-lift">
            <div className="h-full rounded-[calc(1.5rem-2px)] bg-white p-7 sm:p-9">
              <span className="grid size-12 place-items-center rounded-2xl bg-coral-50 text-coral-700">
                <Gift className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-bold tracking-wider text-muted uppercase">Töötoast saad kaasa</p>
              <p className="mt-2 text-2xl leading-snug font-extrabold tracking-tight text-navy-900 sm:text-3xl">
                {workshop.takeaway}
              </p>
            </div>
          </div>

          <div className="reveal card flex flex-col p-7 sm:p-9" style={{ ["--delay" as string]: "100ms" }}>
            <span className="grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
              <Smartphone className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm font-bold tracking-wider text-muted uppercase">Võta kaasa</p>
            <p className="mt-2 text-2xl leading-snug font-extrabold tracking-tight text-navy-900">Nutitelefon või sülearvuti</p>
            <p className="mt-2 leading-relaxed text-muted">Töötoas proovime tehisaru ise järele, seega on seadet vaja.</p>
            <div className="mt-auto pt-6">
              <RegisterButton variant="outlineDark" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

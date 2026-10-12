import { CircleCheck, Clock, Gift, GraduationCap, ScanSearch, Smartphone, UserRound } from "lucide-react";
import { about, outcomes, schedule, topics, workshop, type IconKey } from "../data/workshop";
import { RegisterButton } from "./Buttons";
import { SectionHeading } from "./SectionHeading";

const topicIcons: Record<IconKey, typeof UserRound> = {
  learner: UserRound,
  teacher: GraduationCap,
  critical: ScanSearch,
};

const tints = ["bg-coral-50 text-coral-700", "bg-teal-50 text-teal-700", "bg-sun-50 text-sun-700"];
const bars = ["bg-coral-400", "bg-teal-400", "bg-sun-400"];

/** "15:13" → minutid päeva algusest */
const toMin = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

/* ---------------------------------------------------------------------
 * Töötoast + töötoa järel osaleja
 * ------------------------------------------------------------------- */
export function About() {
  return (
    <section id="tootoast" aria-labelledby="tootoast-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <div>
          <SectionHeading
            id="tootoast-title"
            eyebrow="Töötoast"
            tone="coral"
            title="Proovime tehisaru praktiliselt ja vaatame seda kriitiliselt"
          />
          <div className="reveal mt-6 space-y-4 text-lg leading-relaxed text-pretty text-muted">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div
          className="reveal on-dark relative self-start overflow-hidden rounded-3xl bg-navy-900 p-7 text-white sm:p-9"
          style={{ ["--delay" as string]: "120ms" }}
        >
          <div className="absolute -top-16 -right-16 size-56 rounded-full bg-coral-500/30 blur-3xl" aria-hidden="true" />
          <h3 className="relative text-sm font-bold tracking-wider text-sun-300 uppercase">Töötoa järel osaleja</h3>
          <ul className="relative mt-5 space-y-4">
            {outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-lg leading-snug">
                <CircleCheck className="mt-0.5 size-6 shrink-0 text-sun-400" aria-hidden="true" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Teemad
 * ------------------------------------------------------------------- */
export function Topics() {
  return (
    <section id="teemad" aria-labelledby="teemad-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="teemad-title"
          eyebrow="Teemad"
          tone="teal"
          title="Õppija, koolitaja ja kriitiline vaade"
        />

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {topics.map((t, i) => {
            const I = topicIcons[t.icon];
            return (
              <li
                key={t.title}
                className="reveal card flex flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                style={{ ["--delay" as string]: `${i * 90}ms` }}
              >
                <span className={`grid size-12 place-items-center rounded-2xl ${tints[i % tints.length]}`}>
                  <I className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy-900">{t.title}</h3>
                <ul className="mt-4 space-y-3">
                  {t.items.map((it) => (
                    <li key={it} className="flex gap-3 leading-snug text-muted">
                      <span className={`mt-2 size-2 shrink-0 rounded-full ${bars[i % bars.length]}`} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Kava
 * ------------------------------------------------------------------- */
export function Schedule() {
  const total = toMin(schedule[schedule.length - 1].end) - toMin(schedule[0].start);
  const longest = Math.max(...schedule.map((s) => toMin(s.end) - toMin(s.start)));

  return (
    <section id="kava" aria-labelledby="kava-title" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="on-dark relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-navy-900 px-6 py-14 text-white sm:px-12 sm:py-20">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-24 -right-24 -z-10 size-[24rem] rounded-full bg-violet-500/30 blur-[100px]" aria-hidden="true" />

        <div className="mx-auto max-w-4xl">
          <div className="reveal">
            <p className="eyebrow text-sun-300">
              <span className="size-2 rounded-full bg-sun-400" aria-hidden="true" />
              Kava
            </p>
            <h2 id="kava-title" className="h2 mt-4 text-white">
              {total} minutit, {workshop.start}–{workshop.end}
            </h2>
          </div>

          <ol className="mt-10 space-y-3">
            {schedule.map((s, i) => {
              const mins = toMin(s.end) - toMin(s.start);
              const main = mins === longest;
              return (
                <li
                  key={s.start}
                  className={`reveal grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 rounded-2xl px-5 py-4 ring-1 sm:grid-cols-[8.5rem_1fr_11rem] ${
                    main ? "bg-white/[0.12] ring-sun-400/60" : "bg-white/[0.05] ring-white/10"
                  }`}
                  style={{ ["--delay" as string]: `${i * 60}ms` }}
                >
                  <span className="font-bold text-sun-300 tabular-nums">
                    {s.start}–{s.end}
                  </span>
                  <span className={`text-lg leading-snug font-bold ${main ? "text-white" : "text-navy-100"}`}>{s.title}</span>
                  <span className="col-span-2 flex items-center gap-3 sm:col-span-1">
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                      <span
                        className={`block h-full rounded-full ${main ? "bg-gradient-to-r from-coral-400 to-sun-400" : "bg-white/40"}`}
                        style={{ width: `${(mins / longest) * 100}%` }}
                      />
                    </span>
                    <span className="flex w-[4.5rem] shrink-0 items-center justify-end gap-1 text-sm font-semibold whitespace-nowrap text-navy-100 tabular-nums">
                      <Clock className="size-3.5" aria-hidden="true" />
                      {mins} min
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------
 * Kaasa võtta / töötoa lõpus
 * ------------------------------------------------------------------- */
export function Takeaway() {
  return (
    <section id="kaasa" aria-labelledby="kaasa-title" className="pb-20 sm:pb-28">
      <div className="container-page">
        <SectionHeading id="kaasa-title" eyebrow="Kaasa" tone="violet" title="Tule seadmega, lahku oma promptiga" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="reveal card flex flex-col p-7 sm:p-9">
            <span className="grid size-12 place-items-center rounded-2xl bg-teal-50 text-teal-700">
              <Smartphone className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm font-bold tracking-wider text-muted uppercase">Võta kaasa</p>
            <p className="mt-2 text-2xl leading-snug font-extrabold tracking-tight text-navy-900">Nutitelefon või sülearvuti</p>
            <p className="mt-2 leading-relaxed text-muted">Töötoas proovime tehisaru ise järele, seega on seadet vaja.</p>
          </div>

          <div
            className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-coral-400 via-sun-400 to-teal-400 p-[2px] shadow-lift"
            style={{ ["--delay" as string]: "100ms" }}
          >
            <div className="flex h-full flex-col rounded-[calc(1.5rem-2px)] bg-white p-7 sm:p-9">
              <span className="grid size-12 place-items-center rounded-2xl bg-coral-50 text-coral-700">
                <Gift className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-sm font-bold tracking-wider text-muted uppercase">Töötoa lõpus</p>
              <p className="mt-2 text-2xl leading-snug font-extrabold tracking-tight text-navy-900">{workshop.takeaway}</p>
              <p className="mt-2 leading-relaxed text-muted">Koostad prompti, mis arvestab sinu õppijate keeleoskustaset ja vajadusi.</p>
              <div className="mt-auto pt-6">
                <RegisterButton variant="outlineDark" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

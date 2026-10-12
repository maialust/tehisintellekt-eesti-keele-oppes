import { useEffect, useRef, useState } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { leadQuestion, rotatingRoles, workshop } from "../data/workshop";
import { LinkButton, RegisterButton } from "./Buttons";
import { HeroIllustration } from "./HeroIllustration";
import { cap, weekday } from "./dates";

const SPARKS = [
  { top: "14%", left: "8%", size: 14, delay: "0s" },
  { top: "24%", left: "46%", size: 10, delay: "1.2s" },
  { top: "70%", left: "4%", size: 12, delay: "2.1s" },
  { top: "84%", left: "38%", size: 9, delay: "0.6s" },
  { top: "10%", left: "90%", size: 16, delay: "1.6s" },
  { top: "60%", left: "95%", size: 10, delay: "2.6s" },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function RotatingRole() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return setI(0);
    const id = window.setInterval(() => setI((v) => (v + 1) % rotatingRoles.length), 2400);
    return () => window.clearInterval(id);
  }, [reduced]);
  return (
    <span className="inline-block h-[1.25em] overflow-hidden align-bottom" aria-hidden="true">
      <span key={rotatingRoles[i]} className="word-in text-gradient block font-extrabold">
        {rotatingRoles[i]}
      </span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const facts = [
    { icon: CalendarDays, label: `${cap(weekday(workshop.date))}, ${workshop.date}` },
    { icon: Clock, label: `${workshop.start}–${workshop.end}` },
    { icon: MapPin, label: "Park Inn by Radisson Meriton, Tallinn" },
  ];

  return (
    <section
      id="top"
      ref={ref}
      onPointerMove={onMove}
      aria-labelledby="hero-title"
      className="on-dark hero-spotlight relative isolate overflow-hidden bg-navy-900 pt-[4.5rem] text-white"
    >
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="blob-a absolute -top-40 -left-40 -z-10 size-[36rem] rounded-full bg-violet-500/30 blur-[120px]" />
      <div className="blob-b absolute top-1/3 -right-32 -z-10 size-[28rem] rounded-full bg-teal-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 -z-10 size-[24rem] rounded-full bg-coral-500/15 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {SPARKS.map((s, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="twinkle absolute text-sun-300"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
          >
            <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" fill="currentColor" />
          </svg>
        ))}
      </div>

      <div className="container-page grid items-center gap-12 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div className="reveal">
          <p className="eyebrow mb-6 max-w-full rounded-2xl bg-white/10 px-3.5 py-2 leading-snug text-sun-300 ring-1 ring-white/15">
            <span className="pulse-dot size-2 shrink-0 rounded-full bg-sun-400" aria-hidden="true" />
            <span>
              {workshop.type} · {workshop.eventShort}
            </span>
          </p>

          <h1
            id="hero-title"
            className="text-[2.15rem] leading-[1.06] font-extrabold tracking-tight text-balance min-[400px]:text-[2.45rem] sm:text-6xl lg:text-[3.6rem]"
          >
            Tehisintellekt <span className="text-gradient">täiskasvanute</span> eesti keele õppes
          </h1>

          <p className="mt-6 text-xl font-semibold text-white sm:text-2xl">
            <span className="sr-only">
              Proovime tehisaru kui vestluspartnerit, harjutuste loojat, tekstide kohandajat, sõnavara treenerit,
              tagasiside andjat ja õppematerjali koostajat.
            </span>
            <span aria-hidden="true">Proovime tehisaru kui </span>
            <RotatingRole />
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-navy-100">{leadQuestion}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <RegisterButton size="lg" />
            <LinkButton href="#proovime" variant="outline" className="py-4">
              Vaata, mida proovime
            </LinkButton>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-navy-100">
            {facts.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-2">
                <I className="size-4 text-teal-300" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal hidden sm:block" style={{ ["--delay" as string]: "150ms" }}>
          <HeroIllustration />
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 block h-10 w-full text-paper sm:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 80 L0 40 Q 720 -30 1440 40 L1440 80 Z" fill="currentColor" />
      </svg>
    </section>
  );
}

import { BookA, Check, SlidersHorizontal, Sparkles } from "lucide-react";

/**
 * Avaekraani illustratsioon: lühike näidisvestlus tehisaruga,
 * selle kohal prompt ja ümber väikesed sildid töötoa teemadega.
 * Kõik on dekoratiivne (aria-hidden).
 */
export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[5/4.6] w-full max-w-[34rem]" aria-hidden="true">
      {/* prompt */}
      <div className="float-slow absolute top-0 left-0 z-20 w-[68%] rounded-2xl bg-sun-300 p-4 text-navy-950 shadow-lift">
        <p className="flex items-center gap-1.5 text-[0.7rem] font-extrabold tracking-wider uppercase">
          <Sparkles className="size-3.5" />
          Prompt
        </p>
        <p className="mt-1.5 text-sm leading-snug font-semibold">
          Ole minu vestluspartner. Räägi lihtsate lausetega, A2 tasemel.
        </p>
      </div>

      {/* vestlusaken */}
      <div className="absolute top-[17%] right-0 z-10 w-[86%] rounded-3xl bg-white p-5 pt-6 text-navy-900 shadow-lift">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="size-2.5 rounded-full bg-coral-400" />
          <span className="size-2.5 rounded-full bg-sun-400" />
          <span className="size-2.5 rounded-full bg-teal-400" />
          <span className="ml-2 text-xs font-bold tracking-wider text-muted uppercase">Vestlus</span>
        </div>

        <ul className="mt-4 space-y-3 text-sm">
          <li className="msg-in flex justify-end" style={{ ["--d" as string]: "0.4s" }}>
            <span className="max-w-[80%] rounded-2xl rounded-br-md bg-navy-900 px-3.5 py-2.5 leading-snug text-white">
              Kas me saame harjutada poes käimist?
            </span>
          </li>
          <li className="msg-in flex" style={{ ["--d" as string]: "1.4s" }}>
            <span className="max-w-[85%] rounded-2xl rounded-bl-md bg-teal-50 px-3.5 py-2.5 leading-snug">
              Muidugi! Mina olen müüja. Tere! Kuidas saan teid aidata?
            </span>
          </li>
          <li className="msg-in flex justify-end" style={{ ["--d" as string]: "2.4s" }}>
            <span className="max-w-[80%] rounded-2xl rounded-br-md bg-navy-900 px-3.5 py-2.5 leading-snug text-white">
              Tere! Ma tahan osta leiba ja piima.
            </span>
          </li>
          <li className="msg-in flex" style={{ ["--d" as string]: "3.2s" }}>
            <span className="typing inline-flex items-center gap-1 rounded-2xl rounded-bl-md bg-teal-50 px-4 py-3">
              <i />
              <i />
              <i />
            </span>
          </li>
        </ul>
      </div>

      {/* sildid */}
      <div className="float-slower absolute bottom-[4%] left-[2%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-sm font-bold text-navy-900 shadow-lift">
        <span className="grid size-7 place-items-center rounded-lg bg-violet-50 text-violet-700">
          <SlidersHorizontal className="size-4" />
        </span>
        Tekst B1 tasemele
      </div>
      <div className="float-slow absolute right-[4%] bottom-[0%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 text-sm font-bold text-navy-900 shadow-lift">
        <span className="grid size-7 place-items-center rounded-lg bg-coral-50 text-coral-700">
          <BookA className="size-4" />
        </span>
        Sõnavara
      </div>
      <div className="float-slower absolute top-[8%] -right-[2%] z-20 flex items-center gap-2 rounded-full bg-teal-400 px-3 py-1.5 text-xs font-extrabold text-navy-950 shadow-lift">
        <Check className="size-3.5" />
        Tagasiside
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { REGISTRATION_ANCHOR } from "../data/workshop";
import { RegisterButton } from "./Buttons";

/** Mobiilis ekraani alaservas püsiv registreerimisnupp. */
export function MobileCta() {
  const [pastHero, setPastHero] = useState(false);
  const [atRegister, setAtRegister] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const reg = document.getElementById(REGISTRATION_ANCHOR);
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.target === hero) setPastHero(!e.isIntersecting);
        if (e.target === reg) setAtRegister(e.isIntersecting);
      }
    });
    if (hero) obs.observe(hero);
    if (reg) obs.observe(reg);
    return () => obs.disconnect();
  }, []);

  const visible = pastHero && !atRegister;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-lg transition-transform duration-300 lg:hidden ${
        visible ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <RegisterButton className="w-full" />
    </div>
  );
}

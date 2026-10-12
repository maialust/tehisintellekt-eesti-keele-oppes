import { useEffect, useState } from "react";

/**
 * Etapid süttivad kordamööda (esimesest viimaseni, siis algusest).
 * `durations` — iga etapi kestus millisekundites.
 * Kui kasutaja viib hiire või fookuse etapile, jääb see esile.
 * Kui plokk pole ekraanil, vahetumist ei toimu. Kui seadmes on animatsioonid välja
 * lülitatud, vahetub esiletõst ikka, kuid ilma liikuva riba ja üleminekuteta.
 */
export function useStepCycle(durations: number[], sectionRef: React.RefObject<HTMLElement | null>) {
  const count = durations.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    if (paused || !inView) return;
    const id = window.setTimeout(() => setActive((v) => (v + 1) % count), durations[active] ?? 2200);
    return () => window.clearTimeout(id);
  }, [paused, inView, count, active, durations]);

  const running = !reduced && !paused && inView;
  return { active, setActive, setPaused, running, reduced };
}

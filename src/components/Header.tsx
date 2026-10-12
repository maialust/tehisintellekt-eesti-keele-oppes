import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { workshop } from "../data/workshop";
import { RegisterButton } from "./Buttons";

export const nav = [
  { href: "#tootoast", label: "Töötoast" },
  { href: "#proovime", label: "Mida proovime" },
  { href: "#kaasa", label: "Kaasa" },
  { href: "#labiviija", label: "Läbiviija" },
  { href: "#info", label: "Aeg ja koht" },
  { href: "#kkk", label: "KKK" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-white text-navy-900 transition-shadow duration-300 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-3 xl:max-w-7xl xl:gap-6">
        <a href="#top" className="flex min-w-0 shrink items-center rounded-lg" aria-label={`${workshop.organizer} — ${workshop.name}, lehe algusesse`}>
          <img
            src={`${import.meta.env.BASE_URL}${workshop.organizerLogo}`}
            alt={workshop.organizer}
            width={800}
            height={259}
            className="block h-12 w-auto max-w-full mix-blend-multiply sm:h-14"
          />
        </a>

        <nav aria-label="Peamenüü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-navy-50">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <RegisterButton label="Registreeru" />
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-navy-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobiilimenuu"
          aria-label={open ? "Sulge menüü" : "Ava menüü"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobiilimenuu" hidden={!open} className="border-t border-line bg-white text-navy-900 lg:hidden">
        <nav aria-label="Mobiilimenüü" className="container-page py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold hover:bg-navy-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-line pt-4" onClick={() => setOpen(false)}>
            <RegisterButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}

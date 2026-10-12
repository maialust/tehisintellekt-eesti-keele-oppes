import { ArrowRight } from "lucide-react";
import { hasRegistrationUrl, registrationHref } from "../data/workshop";

type Variant = "primary" | "light" | "outline" | "outlineDark";

const styles: Record<Variant, string> = {
  primary:
    "shimmer bg-coral-400 text-navy-950 hover:bg-coral-300 shadow-[0_10px_30px_-10px_rgb(255_111_89/0.7)]",
  light: "bg-white text-navy-900 hover:bg-navy-50 shadow-soft",
  outline:
    "border border-white/35 text-white hover:bg-white/10 hover:border-white/60",
  outlineDark: "border border-navy-900/20 text-navy-900 hover:bg-navy-900/5 hover:border-navy-900/40",
};

export function RegisterButton({
  variant = "primary",
  size = "md",
  className = "",
  label = "Registreeru töötuppa",
}: {
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  label?: string;
}) {
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-[0.95rem]";
  return (
    <a
      href={registrationHref}
      {...(hasRegistrationUrl ? { rel: "noopener" } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-bold transition duration-200 hover:-translate-y-0.5 ${sizing} ${styles[variant]} ${className}`}
    >
      {label}
      <ArrowRight
        className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </a>
  );
}

export function LinkButton({
  href,
  children,
  variant = "outline",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-bold transition duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

type Tone = "coral" | "teal" | "violet" | "sun" | "light";

const tones: Record<Tone, string> = {
  coral: "text-coral-700",
  teal: "text-teal-700",
  violet: "text-violet-700",
  sun: "text-sun-700",
  light: "text-sun-300",
};
const dots: Record<Tone, string> = {
  coral: "bg-coral-500",
  teal: "bg-teal-500",
  violet: "bg-violet-500",
  sun: "bg-sun-400",
  light: "bg-sun-400",
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "violet",
  align = "left",
  dark = false,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`reveal flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      <p className={`eyebrow ${tones[tone]}`}>
        <span className={`size-2 rounded-full ${dots[tone]}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={`h2 ${dark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {lead && <p className={`lead ${dark ? "!text-navy-100" : ""}`}>{lead}</p>}
    </div>
  );
}

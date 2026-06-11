export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

/** Mono eyebrow with a blue square tick. Use above section headings. */
export function Eyebrow({
  children,
  dark = false,
  lime = false,
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  lime?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`inline-block size-[7px] shrink-0 ${lime ? "bg-lime" : "bg-blue"}`}
      />
      <span
        className={`label-mono ${dark ? "text-paper/60" : "text-ink/70"}`}
      >
        {children}
      </span>
    </span>
  );
}

/** Mono index marker, e.g. [01] */
export function Index({
  n,
  dark = false,
  lime = false,
  className = "",
}: {
  n: string | number;
  dark?: boolean;
  lime?: boolean;
  className?: string;
}) {
  const label = typeof n === "number" ? String(n).padStart(2, "0") : n;
  return (
    <span
      className={`font-mono text-[0.875rem] ${
        lime ? "text-lime" : "text-blue"
      } ${dark ? "" : ""} ${className}`}
    >
      [{label}]
    </span>
  );
}

/** Standard section header row: eyebrow + headline, optional right-side slot. */
export function SectionHeader({
  eyebrow,
  title,
  dark = false,
  right,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  dark?: boolean;
  right?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-6 ${className}`}
    >
      <div className="max-w-3xl">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <h2 className={`display-1 mt-5 ${dark ? "text-paper" : "text-ink"}`}>
          {title}
        </h2>
      </div>
      {right}
    </div>
  );
}

const MARK_PATH =
  "M18 0 L80 0 A50 50 0 0 1 80 100 L18 100 A18 18 0 0 1 0 82 L0 18 A18 18 0 0 1 18 0 Z M56 0 L68 0 L68 44 L130 44 L130 56 L68 56 L68 100 L56 100 L56 56 L0 56 L0 44 L56 44 Z";

export function LogoMark({
  className,
  width = 36,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height={Math.round(width * (100 / 130))}
      viewBox="0 0 130 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}

export function Wordmark({
  markWidth = 34,
  textClassName = "text-lg",
  className = "",
}: {
  markWidth?: number;
  textClassName?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark width={markWidth} />
      <span
        className={`font-display font-bold italic tracking-tight whitespace-nowrap ${textClassName}`}
      >
        Dialed Intelligence
        <sup className="text-[0.5em] not-italic align-super">&reg;</sup>
      </span>
    </span>
  );
}

export { MARK_PATH };

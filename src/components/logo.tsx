import {
  MARK_PATH,
  MARK_VIEWBOX,
  WORDMARK_PATHS,
  WORDMARK_VIEWBOX,
} from "@/lib/brand";

const [, , MARK_W, MARK_H] = MARK_VIEWBOX.split(" ").map(Number);
const [, , WM_W, WM_H] = WORDMARK_VIEWBOX.split(" ").map(Number);

/**
 * The official Dialed Intelligence "iD" monogram. Renders in currentColor so
 * callers set ink, blue, or lime through text color. Decorative by default
 * (aria-hidden); wrap it in a labelled link or add your own label when it
 * carries meaning on its own.
 */
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
      height={Math.round((width * MARK_H) / MARK_W)}
      viewBox={MARK_VIEWBOX}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d={MARK_PATH} />
    </svg>
  );
}

/**
 * The official primary wordmark (bold italic, with the registered mark) as
 * vector art, so it shows the true Helvetica letterforms without waiting on a
 * licensed webfont. Sized by height; inherits currentColor.
 */
export function WordmarkLettering({
  className,
  height = 18,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <svg
      height={height}
      width={Math.round((height * WM_W) / WM_H)}
      viewBox={WORDMARK_VIEWBOX}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {WORDMARK_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/**
 * The official horizontal lockup: the iD mark beside the primary wordmark,
 * both inheriting currentColor. The art is aria-hidden because the linking
 * element that wraps it ("Dialed Intelligence home") supplies the name.
 */
export function Wordmark({
  markWidth = 34,
  className = "",
}: {
  markWidth?: number;
  className?: string;
}) {
  const markHeight = (markWidth * MARK_H) / MARK_W;
  const wordmarkHeight = Math.round(markHeight * 0.74);
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark width={markWidth} />
      <WordmarkLettering height={wordmarkHeight} />
    </span>
  );
}

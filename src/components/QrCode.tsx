import qrcode from "qrcode-generator";

type Props = {
  value: string;
  /** Accessible description, e.g. "QR code linking to …/get". */
  label: string;
  size?: number;
};

/**
 * Server-only QR code. Rendered to inline SVG during the static build,
 * so no QR library is shipped to the browser. Always dark-on-white so
 * phone cameras can read it in dark mode too.
 */
export function QrCode({ value, label, size = 184 }: Props) {
  const qr = qrcode(0, "M");
  qr.addData(value);
  qr.make();

  const count = qr.getModuleCount();
  const quiet = 4;
  const total = count + quiet * 2;

  let d = "";
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      if (qr.isDark(row, col)) d += `M${col + quiet} ${row + quiet}h1v1h-1z`;
    }
  }

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${total} ${total}`}
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className="rounded-md"
    >
      <rect width={total} height={total} className="fill-qr-paper" />
      <path d={d} className="fill-qr-ink" />
    </svg>
  );
}

import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { ReactNode } from "react";
import type { Messages } from "@/i18n/messages";

/**
 * Rebuilt UI states of the KoReady app, drawn with the site's tokens.
 * Each is labelled "Example" so nobody mistakes it for a screenshot.
 * If a real screenshot exists at /public/screens/<id>.webp at build time,
 * it is shown instead (cropped, no device frame).
 */

type Side = "right" | "left";

export function ExampleFrame({
  id,
  side,
  label,
  exampleWord,
  children,
}: {
  id: string;
  side: Side;
  label: string;
  exampleWord: string;
  children: ReactNode;
}) {
  const file = `/screens/${id}.webp`;
  const hasShot = existsSync(join(process.cwd(), "public", file));

  return (
    <figure className={side === "right" ? "bleed-right" : "bleed-left"}>
      <div className="example overflow-hidden">
        {hasShot ? (
          <div className="bleed-safe">
            <Image
              src={file}
              alt={label}
              width={720}
              height={1560}
              loading="lazy"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="block aspect-4/3 w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="bleed-safe p-6 md:p-10">
            <p className="pill mb-6">{exampleWord}</p>
            {children}
          </div>
        )}
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

type Rows = Messages["home"]["rows"];

export function PhraseExample({ t }: { t: Rows["say"] }) {
  return (
    <div>
      <p lang="en" className="well px-4 py-3 text-base text-ink-muted">
        {t.input}
      </p>
      <p lang="ko" className="mt-6 text-xl font-strong md:text-2xl">
        {t.output}
      </p>
      <p className="mt-6">
        <span className="btn btn-quiet pointer-events-none">{t.fullScreen}</span>
      </p>
    </div>
  );
}

export function ScamExample({ t }: { t: Rows["check"] }) {
  return (
    <ul className="space-y-4">
      {t.results.map((r) => (
        <li key={r.status} className="border-t border-rule pt-4 first:border-t-0 first:pt-0">
          <p className={r.tone === "red" ? "pill pill-red" : "pill"}>{r.status}</p>
          <p lang="ko" className="well mt-3 px-4 py-3 text-base">
            {r.message}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{r.why}</p>
        </li>
      ))}
    </ul>
  );
}

export function AlertExample({ t }: { t: Rows["alert"] }) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span lang="ko" className="pill pill-red">
          긴급재난문자
        </span>
        <span className="label">{t.sourceLabel}</span>
      </div>
      <p lang="ko" className="mt-3 text-lg">
        {t.source}
      </p>
      <div className="mt-6 border-t border-rule pt-6">
        <p className="label">{t.targetLabel}</p>
        <p lang="en" className="mt-2 text-base">
          {t.target}
        </p>
      </div>
    </div>
  );
}

export function HelpExample({ t }: { t: Rows["help"] }) {
  return (
    <ul>
      {t.lines.map((line) => (
        <li
          key={line.number}
          className="flex min-h-12 items-baseline gap-4 border-b border-rule py-3"
        >
          <span
            className={`tnum w-16 shrink-0 text-xl font-strong ${line.tone === "red" ? "text-red" : "text-teal"}`}
          >
            {line.number}
          </span>
          <span className="text-base">{line.label}</span>
        </li>
      ))}
      <li className="flex min-h-12 items-center justify-between gap-4 py-3">
        <span className="text-base font-strong">{t.findCare}</span>
        <span aria-hidden="true" className="text-teal">
          →
        </span>
      </li>
    </ul>
  );
}

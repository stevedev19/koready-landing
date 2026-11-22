import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const WIDTH = 180;
const HEIGHT = 390;

/**
 * Shows /public/screens/<id>.webp if it exists at build time, otherwise a
 * tinted placeholder with the same box, so there is never layout shift.
 * Images are lazy-loaded (they are below the fold) and served as WebP.
 */
export function Screenshot({ id, alt, placeholder }: { id: string; alt: string; placeholder: string }) {
  const file = `/screens/${id}.webp`;
  const exists = existsSync(join(process.cwd(), "public", file));

  return (
    <figure
      className="card relative overflow-hidden p-0"
      style={{ width: WIDTH, aspectRatio: `${WIDTH} / ${HEIGHT}` }}
    >
      {exists ? (
        <Image
          src={file}
          alt={alt}
          width={WIDTH}
          height={HEIGHT}
          loading="lazy"
          sizes={`${WIDTH}px`}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-accent-soft p-4 text-center text-accent-soft-fg">
          <span aria-hidden="true" className="h-2 w-12 rounded-full bg-current opacity-40" />
          <span className="text-sm font-semibold">{placeholder}</span>
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </figure>
  );
}

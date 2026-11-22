import type { ReactNode } from "react";

type Props = {
  href: string | null;
  children: ReactNode;
  /** Text for the honest empty state, e.g. "Coming soon". */
  comingSoonLabel: string;
  className?: string;
  /** Classes used instead of `className` when the link is missing. */
  comingSoonClassName?: string;
};

/**
 * Renders a real link when `href` is set. When it is empty, renders a
 * non-interactive "Coming soon" label instead of a broken link.
 */
export function MaybeLink({ href, children, comingSoonLabel, className, comingSoonClassName }: Props) {
  if (!href) {
    return (
      <span className={comingSoonClassName ?? className} aria-disabled="true">
        {children}
        <span className="pill">{comingSoonLabel}</span>
      </span>
    );
  }
  return (
    <a href={href} className={className} rel="noopener">
      {children}
    </a>
  );
}

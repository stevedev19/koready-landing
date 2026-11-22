const paths: Record<string, React.ReactNode> = {
  say: (
    <>
      <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 4v-4h0A2 2 0 0 1 5 13Z" />
      <path d="M9 9.5h6M9 12h3.5" />
    </>
  ),
  check: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  help: (
    <>
      <path d="M6.6 4.5h2.6l1.4 3.6-1.8 1.2a10 10 0 0 0 5.9 5.9l1.2-1.8 3.6 1.4v2.6a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.6 6.7a2 2 0 0 1 2-2.2Z" />
    </>
  ),
  discover: (
    <>
      <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 1 0-13 0c0 5.4 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
};

export function FeatureIcon({ id }: { id: string }) {
  return (
    <span
      aria-hidden="true"
      className="flex size-12 items-center justify-center rounded-[14px] bg-accent-soft text-accent-soft-fg"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[id]}
      </svg>
    </span>
  );
}

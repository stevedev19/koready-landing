import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader locale="ko" />
      <main id="main" className="mx-auto max-w-5xl px-5">
        <h1 className="text-3xl font-bold">KoReady</h1>
      </main>
    </>
  );
}

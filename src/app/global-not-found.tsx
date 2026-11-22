import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found · KoReady",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-dvh items-center justify-center p-6">
        <main className="card max-w-md p-8 text-center">
          <h1 className="text-2xl font-bold">Page not found</h1>
          <p className="mt-2 text-fg-muted">
            <span lang="ko">페이지를 찾을 수 없습니다.</span>
          </p>
          <p className="mt-6 flex flex-wrap justify-center gap-3">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="btn btn-primary">KoReady</a>
            <a href="/ko" className="btn btn-secondary" lang="ko">한국어</a>
          </p>
        </main>
      </body>
    </html>
  );
}

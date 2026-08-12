import { siteName } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-center px-8 py-8">
        <p className="font-mono text-sm text-muted">
          &copy; {year} {siteName} &middot; built with Next.js
        </p>
      </div>
    </footer>
  );
}

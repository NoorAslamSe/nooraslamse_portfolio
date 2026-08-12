export default function Home() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1120px] px-8 py-24">
        <p className="font-mono text-sm text-gold">
          noor@peshawar ~ % scaffold-ok
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium">
          Design tokens + fonts verified.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Fraunces, Inter, JetBrains Mono loaded. Ink, gold, teal tokens
          active.
        </p>
      </div>
    </main>
  );
}

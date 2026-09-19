import Link from "next/link";

export const metadata = { title: "Advisor — Warmtewijs" };

export default function Advisor() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "32px",
        textAlign: "center",
      }}
    >
      <div>
        <div
          style={{
            width: 22,
            height: 22,
            background: "var(--blue)",
            margin: "0 auto 24px",
          }}
        />
        <h1 style={{ fontSize: 36, letterSpacing: "-0.03em", marginBottom: 12 }}>
          The advisor is coming soon.
        </h1>
        <p style={{ color: "var(--ink-2)", marginBottom: 24 }}>
          This page is a placeholder for the free energy check.
        </p>
        <Link href="/">← Back to Warmtewijs</Link>
      </div>
    </main>
  );
}

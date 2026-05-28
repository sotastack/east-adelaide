const tokens = [
  ["--ink", "#0B1220"],
  ["--slate", "#1E2A3A"],
  ["--bone", "#F4F0E8"],
  ["--cream", "#EBE4D6"],
  ["--paper", "#FAF7F1"],
  ["--paper-deep", "#F1ECDF"],
  ["--copper", "#B86B3C"],
  ["--ember", "#8A4A2A"],
  ["--stone", "#6B6F75"],
  ["--hair-light", "#D8D1C2"],
] as const;

export default function Home() {
  return (
    <main className="container" style={{ paddingTop: 80, paddingBottom: 120 }}>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--copper)",
        }}
      >
        Phase 0 · Design tokens loaded
      </p>

      <h1
        style={{
          fontFamily: "var(--display)",
          fontWeight: 360,
          fontSize: "clamp(40px, 7vw, 96px)",
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          margin: "18px 0 8px",
        }}
      >
        East Adelaide{" "}
        <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
          Capital Group
        </span>
      </h1>

      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: 18,
          color: "var(--slate)",
          maxWidth: "52ch",
        }}
      >
        Instrument Sans body text — a diversified Australian operating group
        across shelter, biotech and food. If this renders in the right
        typefaces and the swatches below match, the token layer is wired
        correctly.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 14,
          marginTop: 48,
        }}
      >
        {tokens.map(([name, hex]) => (
          <div key={name} style={{ border: "1px solid var(--hair-light)" }}>
            <div style={{ height: 64, background: `var(${name})` }} />
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                padding: "8px 10px",
                color: "var(--stone)",
              }}
            >
              {name}
              <br />
              {hex}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

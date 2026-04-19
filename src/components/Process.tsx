const steps = [
  { n: "01", title: "Discovery", desc: "We map your goals, regulatory scope, and current systems." },
  { n: "02", title: "Blueprint", desc: "A clear plan — scope, timeline, deliverables, fixed pricing." },
  { n: "03", title: "Build & File", desc: "Engineers ship code while our compliance team files paperwork." },
  { n: "04", title: "Launch & Maintain", desc: "Go live with monitoring, support, and renewals handled." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-sky font-semibold">
            How we work
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            A predictable path from{" "}
            <span className="text-gradient-brand">idea to in-market</span>.
          </h2>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-3xl border border-border bg-surface p-7 hover:border-brand-sky/50 hover:shadow-soft transition"
            >
              <div className="font-display text-5xl font-bold text-gradient-brand">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden lg:block absolute top-1/2 -right-3 text-brand-sky/60"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

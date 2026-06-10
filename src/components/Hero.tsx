import logo from "@/assets/tamatech-logo.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero text-primary-foreground pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-brand-sky/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
              Software · Compliance · Registration
            </div>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Software that scales.{" "}
              <span className="text-gradient-brand">Compliance that protects.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-paper/80 leading-relaxed">
              TamaTech Business Solutions builds custom software and handles the paperwork that
              keeps your business legitimate, registered, and audit-ready — all under one roof.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-primary shadow-glow hover:scale-[1.02] transition"
              >
                Start a project
                <span aria-hidden>→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-paper/90 hover:bg-white/5 transition"
              >
                Explore services
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "120+", v: "Businesses launched" },
                { k: "98%", v: "Compliance success" },
                { k: "24/7", v: "Support coverage" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold text-gradient-brand">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-paper/60">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-square rounded-3xl bg-white border border-white/20 shadow-elevated p-10 flex items-center justify-center">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-accent opacity-20 blur-2xl -z-10" />
              <img
                src={logo}
                alt="TamaTech Business Solutions logo"
                className="relative w-full h-auto animate-float"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-background/90 text-foreground px-5 py-4 shadow-elevated backdrop-blur">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">ISO-aligned</div>
              <div className="font-display font-semibold">Secure by design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

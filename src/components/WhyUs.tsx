import { Sparkles, Users, Lock, Timer } from "lucide-react";

const points = [
  { icon: Sparkles, title: "Engineering-led", desc: "Real software engineers, not template shops." },
  { icon: Lock, title: "Compliance-first", desc: "Every build aligned to data and regulatory standards." },
  { icon: Timer, title: "Fast turnarounds", desc: "Registrations in days, MVPs in weeks." },
  { icon: Users, title: "Long-term partner", desc: "We stick around — support, audits, scale-ups." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-surface-elevated border-y border-border">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-sky font-semibold">
            Why TamaTech
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Built for businesses that{" "}
            <span className="text-gradient-brand">refuse to choose</span> between speed and rigor.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Most agencies do code. Most consultants do paperwork. We do both — so your tech and
            your legal stack actually talk to each other.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-brand-sky/40 hover:shadow-soft transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

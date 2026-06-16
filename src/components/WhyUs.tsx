import { Sparkles, Users, Zap, ShieldCheck, Megaphone, Layers } from "lucide-react";

const points = [
  { icon: Zap, title: "Launch-ready fast", desc: "Company registered, software live, and campaigns running — in weeks, not months." },
  { icon: Layers, title: "One team, full stack", desc: "No handoffs between agencies. Dev, compliance, and marketing under one roof." },
  { icon: ShieldCheck, title: "Compliance-first", desc: "Every product and process built aligned to legal and regulatory standards." },
  { icon: Megaphone, title: "Growth built in", desc: "We don't just build and leave — we market, advertise, and help you scale." },
  { icon: Sparkles, title: "Real engineers", desc: "Production-grade software, not templates. Custom solutions for real problems." },
  { icon: Users, title: "Long-term partner", desc: "We stick around — support, audits, campaigns, and scale-ups as you grow." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative pt-14 pb-20 md:pt-20 md:pb-28 bg-surface-elevated border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-sky font-semibold">
            Why TamaTech
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            Stop juggling agencies.{" "}
            <span className="text-gradient-brand">We handle everything.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Most businesses waste time and money stitching together developers, lawyers, and marketers.
            TamaTech is the single partner that covers it all — so you focus on building, not coordinating.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-brand-sky/40 hover:shadow-soft transition"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-accent text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

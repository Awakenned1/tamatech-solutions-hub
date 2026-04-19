import { Code2, ShieldCheck, FileBadge, Cloud, Workflow, BarChart3 } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Web apps, internal tools, and APIs engineered to your workflow — built with modern, maintainable stacks.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Business Compliance",
    desc: "Stay audit-ready with policies, filings and ongoing regulatory monitoring.",
    span: "lg:col-span-1",
  },
  {
    icon: FileBadge,
    title: "Company Registration",
    desc: "End-to-end incorporation, licensing, and statutory documentation.",
    span: "lg:col-span-1",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deploy faster with secure cloud infra, CI/CD and monitoring built-in.",
    span: "lg:col-span-1",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    desc: "Replace manual ops with workflows that move data, people and approvals.",
    span: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    title: "Data & Dashboards",
    desc: "Turn scattered spreadsheets into clean, real-time decision dashboards.",
    span: "lg:col-span-2",
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-sky font-semibold">
            What we do
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-foreground">
            One partner for{" "}
            <span className="text-gradient-brand">software & compliance</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From the code that runs your business to the certificates that legalize it — we handle
            the technical and regulatory heavy lifting.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-5 auto-rows-[14rem]">
          {items.map(({ icon: Icon, title, desc, span, featured }) => (
            <article
              key={title}
              className={`group relative overflow-hidden rounded-3xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${span} ${
                featured
                  ? "bg-gradient-hero text-primary-foreground"
                  : "bg-surface hover:border-brand-sky/40"
              }`}
            >
              {featured && (
                <>
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-teal/30 blur-3xl" />
                </>
              )}
              <div className="relative flex flex-col h-full">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    featured
                      ? "bg-white/10 text-brand-teal"
                      : "bg-secondary text-brand-mid group-hover:bg-gradient-accent group-hover:text-primary-foreground"
                  } transition-colors`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className={`mt-5 font-display font-semibold ${
                    featured ? "text-3xl md:text-4xl" : "text-xl"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    featured ? "text-paper/75 max-w-md" : "text-muted-foreground"
                  }`}
                >
                  {desc}
                </p>
                <div className="mt-auto pt-6">
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-medium ${
                      featured ? "text-brand-teal" : "text-brand-sky"
                    }`}
                  >
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

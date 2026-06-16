import { Code2, ShieldCheck, FileBadge, Cloud, Megaphone, ShoppingCart, Share2, TrendingUp } from "lucide-react";

const groups = [
  {
    label: "Software & Technology",
    color: "text-brand-sky",
    items: [
      {
        icon: Code2,
        title: "Custom Software Development",
        desc: "Web apps, internal tools, and APIs engineered to your workflow — built with modern, maintainable stacks.",
        featured: true,
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce Solutions",
        desc: "Online stores built to convert — product catalogues, payments, inventory, and seamless checkout flows.",
      },
      {
        icon: Cloud,
        title: "Cloud & DevOps",
        desc: "Deploy faster with secure cloud infra, CI/CD and monitoring built-in.",
      },
    ],
  },
  {
    label: "Marketing & Growth",
    color: "text-brand-teal",
    items: [
      {
        icon: Megaphone,
        title: "Digital Marketing",
        desc: "Strategy-led campaigns across SEO, email, and content that drive qualified traffic and leads.",
      },
      {
        icon: TrendingUp,
        title: "Paid Ads",
        desc: "Google, Meta, and LinkedIn ad campaigns optimised for ROI — from creative to targeting to reporting.",
      },
      {
        icon: Share2,
        title: "Social Media Management",
        desc: "Consistent presence across platforms — content calendars, engagement, and community growth handled for you.",
      },
    ],
  },
  {
    label: "Business & Compliance",
    color: "text-brand-mid",
    items: [
      {
        icon: FileBadge,
        title: "Company Registration",
        desc: "End-to-end incorporation, licensing, and statutory documentation.",
      },
      {
        icon: ShieldCheck,
        title: "Business Compliance",
        desc: "Stay audit-ready with policies, filings and ongoing regulatory monitoring.",
      },
    ],
  },
];

export function ServicesBento() {
  return (
    <section id="services" className="relative bg-white pt-2 pb-20 md:pt-6 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-sky font-semibold">
            What we do
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-foreground">
            Everything your business{" "}
            <span className="text-gradient-brand">needs to grow</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From registering your company and building your software to marketing your brand and selling online — all under one roof.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs uppercase tracking-[0.18em] font-bold ${group.color}`}>
                  {group.label}
                </span>
                <span className="flex-1 h-px bg-border" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map(({ icon: Icon, title, desc, featured }) => (
                  <article
                    key={title}
                    className={`group relative overflow-hidden rounded-3xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
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
                    <div className="relative flex flex-col gap-4">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                          featured
                            ? "bg-white/10 text-brand-teal"
                            : "bg-secondary text-brand-mid group-hover:bg-gradient-accent group-hover:text-primary-foreground"
                        } transition-colors`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3
                          className={`font-display font-semibold ${
                            featured ? "text-2xl" : "text-lg"
                          }`}
                        >
                          {title}
                        </h3>
                        <p
                          className={`mt-2 text-sm leading-relaxed ${
                            featured ? "text-paper/75" : "text-muted-foreground"
                          }`}
                        >
                          {desc}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

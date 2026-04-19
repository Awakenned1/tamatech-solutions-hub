import { Mail, Phone, MapPin } from "lucide-react";

export function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero text-primary-foreground p-10 md:p-16 shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-teal/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-sky/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-brand-teal font-semibold">
                Let's talk
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
                Ready to build something — and{" "}
                <span className="text-gradient-brand">register it properly?</span>
              </h2>
              <p className="mt-5 text-lg text-paper/80 max-w-lg">
                Tell us where your business is today. We'll send back a clear next step within one
                working day.
              </p>

              <ul className="mt-8 space-y-3 text-paper/85">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-teal" />
                  hello@tamatech.solutions
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-teal" />
                  +1 (555) 010-2024
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                  Available worldwide · Remote-first
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll be in touch within 1 business day.");
              }}
              className="rounded-2xl bg-background/95 text-foreground p-7 shadow-elevated backdrop-blur space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Jane Doe" />
                <Field label="Company" name="company" placeholder="Acme Inc." />
              </div>
              <Field label="Work email" name="email" type="email" placeholder="jane@acme.com" />
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  How can we help?
                </label>
                <select
                  name="topic"
                  className="mt-1.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Custom software</option>
                  <option>Business compliance</option>
                  <option>Company registration</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Project details
                </label>
                <textarea
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your goals, timelines, and where you are today."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-glow hover:scale-[1.01] transition"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Building2, FileBadge2, Hash, Loader2, CheckCircle2 } from "lucide-react";
import { EMAILJS_CONFIG } from "@/lib/emailjs-config";

const COMPANY_DETAILS = [
  { icon: Building2, label: "Company", value: "TamaTech Business Solutions" },
  { icon: FileBadge2, label: "Registration", value: "2024/652550/07" },
  { icon: Hash, label: "Tax Number", value: "9166327289" },
  { icon: MapPin, label: "Address", value: "Sandtot Wendywood, Gauteng" },
  { icon: Phone, label: "Phone", value: "+27 69 441 9361", href: "tel:+27694419361" },
  { icon: Mail, label: "Email", value: "tamatechnology8@gmail.com", href: "mailto:tamatechnology8@gmail.com" },
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactCTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      company: String(data.get("company") || "").trim(),
      email: String(data.get("email") || "").trim(),
      topic: String(data.get("topic") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email) {
      setStatus("error");
      setErrorMsg("Please fill in your name and email.");
      return;
    }
    if (payload.name.length > 100 || payload.email.length > 255 || payload.message.length > 2000) {
      setStatus("error");
      setErrorMsg("One or more fields exceeds the maximum length.");
      return;
    }

    if (
      EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID" ||
      EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY"
    ) {
      setStatus("error");
      setErrorMsg("EmailJS is not configured yet. Add your IDs in src/lib/emailjs-config.ts");
      return;
    }

    try {
      setStatus("sending");
      setErrorMsg("");
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        payload,
        { publicKey: EMAILJS_CONFIG.publicKey },
      );
      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Could not send right now. Please email us directly at tamatechnology8@gmail.com.");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero text-primary-foreground p-8 md:p-14 shadow-elevated">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-teal/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-sky/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-teal font-semibold">
                Let's talk
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
                Book a <span className="text-gradient-brand">consultation</span>.
              </h2>
              <p className="mt-5 text-paper/80 max-w-md">
                Tell us where your business is today. We'll respond within one working day.
              </p>

              <ul className="mt-8 space-y-3.5 text-sm">
                {COMPANY_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-brand-teal">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-paper/50 font-semibold">
                        {label}
                      </div>
                      {href ? (
                        <a href={href} className="text-paper/95 hover:text-brand-teal transition-colors break-words">
                          {value}
                        </a>
                      ) : (
                        <div className="text-paper/95 break-words">{value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 rounded-2xl bg-background/95 text-foreground p-7 shadow-elevated backdrop-blur space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Jane Doe" required maxLength={100} />
                <Field label="Company" name="company" placeholder="Acme Inc." maxLength={100} />
              </div>
              <Field
                label="Work email"
                name="email"
                type="email"
                placeholder="jane@acme.com"
                required
                maxLength={255}
              />
              <div>
                <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  How can we help?
                </label>
                <select
                  name="topic"
                  defaultValue="Custom software"
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
                  name="message"
                  rows={4}
                  maxLength={2000}
                  className="mt-1.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Tell us about your goals, timelines, and where you are today."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {errorMsg}
                </p>
              )}
              {status === "sent" && (
                <p className="flex items-center gap-2 text-sm text-brand-mid font-medium" role="status">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! We'll be in touch within 1 business day.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary shadow-glow hover:scale-[1.01] transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Book consultation"
                )}
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
  required,
  maxLength,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="mt-1.5 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

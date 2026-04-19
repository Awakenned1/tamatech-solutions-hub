import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { ContactCTA } from "@/components/ContactCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TamaTech Business Solutions — Software, Compliance & Registration" },
      {
        name: "description",
        content:
          "TamaTech builds custom software and handles business compliance and company registration — one partner for tech and regulation.",
      },
      { property: "og:title", content: "TamaTech Business Solutions" },
      {
        property: "og:description",
        content: "Software solutions, business compliance, and company registration — under one roof.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ServicesBento />
        <WhyUs />
        <Process />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

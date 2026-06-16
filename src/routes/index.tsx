import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { ContactCTA } from "@/components/ContactCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <WhyUs />
        <ServicesBento />
        <Process />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

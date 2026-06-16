import { useEffect, useState } from "react";
import tamaLogo from "@/assets/TamaTechLogo.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#top",      label: "Home",     section: "top" },
  { href: "#services", label: "Services", section: "services" },
  { href: "#why",      label: "Why Us",   section: "why" },
  { href: "#process",  label: "Process",  section: "process" },
  { href: "#contact",  label: "Contact",  section: "contact" },
];

export function SiteHeader() {
  const [active, setActive] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.section)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center flex-shrink-0">
            <img src={tamaLogo} alt="TamaTech Business Solutions" className="h-14 sm:h-16 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {links.map((l) => {
              const isActive = active === l.section;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-brand-deep"
                      : "text-gray-600 hover:text-brand-deep hover:bg-gray-100"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition"
            >
              Book a consult →
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = active === l.section;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-white bg-brand-deep"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Book a consult →
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

import logo from "@/assets/tamatech-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="TamaTech Business Solutions" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Software development, business compliance and company registration — engineered under
            one roof.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Software</a></li>
            <li><a href="#services" className="hover:text-foreground">Compliance</a></li>
            <li><a href="#services" className="hover:text-foreground">Registration</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#why" className="hover:text-foreground">Why TamaTech</a></li>
            <li><a href="#process" className="hover:text-foreground">Process</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} TamaTech Business Solutions · Reg: 2024/652550/07</p>
          <p>
            <a href="mailto:tamatechnology8@gmail.com" className="hover:text-foreground">tamatechnology8@gmail.com</a>
            <span className="mx-2">·</span>
            <a href="tel:+27694419361" className="hover:text-foreground">+27 69 441 9361</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

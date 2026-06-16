import tamaBot from "@/assets/TamaTech Bot.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-gradient-hero text-primary-foreground"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-brand-sky/15 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-brand-teal/10 blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-5 sm:px-8 lg:px-16 pt-24 sm:pt-28 pb-32 sm:pb-36 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-end">

          {/* Left — copy */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-7 pb-8 sm:pb-12 lg:pb-16">

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="h-px w-8 sm:w-10 bg-brand-teal flex-shrink-0" />
              <span className="text-brand-teal text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold leading-tight">
                TamaTech Business Solutions
              </span>
            </div>

            <h1 className="font-display font-bold leading-[0.92]">
              <span className="block text-[clamp(3rem,9vw,6.5rem)] text-white">Infinite</span>
              <span
                className="block text-[clamp(3rem,9vw,6.5rem)]"
                style={{
                  background: "linear-gradient(135deg, #3b9fd9, #00BFA5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Solutions.
              </span>
            </h1>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-sm">
              From registering your company to building your software and growing
              your brand — we handle every step under one roof.
            </p>

            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-white shadow-glow hover:brightness-110 active:scale-95 transition"
              >
                Start a project →
              </a>
            </div>

          </div>

          {/* Right — bot (shows above text on mobile via order) */}
          <div className="flex items-end justify-center order-first lg:order-last">
            <img
              src={tamaBot}
              alt="TamaTech mascot"
              className="w-[45%] sm:w-[38%] lg:w-full lg:max-w-[500px] h-auto animate-bot"
            />
          </div>

        </div>
      </div>

      {/* Curved bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "120px" }}
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

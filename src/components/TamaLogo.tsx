interface TamaLogoProps {
  className?: string;
}

export function TamaLogo({ className = "h-10 w-auto" }: TamaLogoProps) {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="TamaTech Business Solutions"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1565C0" />
          <stop offset="50%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#00BFA5" />
        </linearGradient>
        <linearGradient id="shieldGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Shield body */}
      <path
        d="M6 8 C6 8 20 5 32 5 C44 5 58 8 58 8 L58 44 C58 60 32 73 32 73 C32 73 6 60 6 44 Z"
        fill="url(#shieldGrad)"
      />
      {/* Shield highlight overlay */}
      <path
        d="M6 8 C6 8 20 5 32 5 C44 5 58 8 58 8 L58 44 C58 60 32 73 32 73 C32 73 6 60 6 44 Z"
        fill="url(#shieldGrad2)"
      />

      {/* Circuit T — horizontal bar */}
      <rect x="15" y="22" width="34" height="5.5" rx="2" fill="white" opacity="0.95" />
      {/* Circuit T — vertical stem */}
      <rect x="29.25" y="27.5" width="5.5" height="24" rx="2" fill="white" opacity="0.95" />

      {/* Nodes on horizontal bar */}
      <circle cx="15" cy="24.75" r="3" fill="white" />
      <circle cx="32" cy="24.75" r="2.5" fill="url(#shieldGrad)" />
      <circle cx="32" cy="24.75" r="1.5" fill="white" opacity="0.6" />
      <circle cx="49" cy="24.75" r="3" fill="white" />

      {/* Nodes on vertical stem */}
      <circle cx="32" cy="39" r="2.5" fill="white" />
      <circle cx="32" cy="51" r="2.5" fill="white" />

      {/* Short trace lines on horizontal bar ends */}
      <line x1="11" y1="24.75" x2="15" y2="24.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="49" y1="24.75" x2="53" y2="24.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* "Tama" — dark navy */}
      <text
        x="70"
        y="48"
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="#0D2151"
      >
        Tama
      </text>
      {/* "Tech" — teal */}
      <text
        x="146"
        y="48"
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="800"
        fontSize="30"
        fill="#00BFA5"
      >
        Tech
      </text>

      {/* "BUSINESS SOLUTIONS" */}
      <text
        x="71"
        y="62"
        fontFamily="'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="600"
        fontSize="10"
        letterSpacing="3"
        fill="#607D8B"
      >
        BUSINESS SOLUTIONS
      </text>
    </svg>
  );
}

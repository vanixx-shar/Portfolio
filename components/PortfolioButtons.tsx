import Link from "next/link";

type ButtonProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export function ContactButton({ href, children = "Contact Me", className = "" }: ButtonProps) {
  return (
    <a
      href={href}
      className={`metal-button inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-black uppercase tracking-widest text-[#0C0C0C] transition hover:scale-[1.02] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        color: "#0C0C0C",
      }}
    >
      {children}
    </a>
  );
}

export function LiveProjectButton({ href, children = "Case Study", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`metal-chip inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#F5F7FA] transition hover:scale-[1.02] sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      {children}
    </Link>
  );
}

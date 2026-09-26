import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  arrow?: boolean;
};

export function Button({
  children,
  variant = "outline",
  arrow = true,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`group inline-flex items-center justify-between gap-4 font-mono text-xs tracking-wider border transition-colors duration-200 cursor-pointer focus-visible:outline-1 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 ${
        variant === "primary"
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-transparent hover:text-[var(--color-accent)]"
          : variant === "secondary"
          ? "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          : "border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      } px-4 py-2.5 ${className}`}
      {...props}
    >
      <span>{children}</span>
      {arrow && <b className="font-normal text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</b>}
    </button>
  );
}


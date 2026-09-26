import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: "one" | "two" | "three" | "four";
  className?: string;
};

export function Reveal({ children, delay = "one", className = "" }: RevealProps) {
  return (
    <div className={`reveal reveal--${delay} ${className}`}>
      {children}
    </div>
  );
}


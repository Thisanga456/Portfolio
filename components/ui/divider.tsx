type DividerProps = {
  className?: string;
};

export function Divider({ className = "" }: DividerProps) {
  return <hr className={`border-t border-[var(--color-border)] my-0 ${className}`} aria-hidden="true" />;
}


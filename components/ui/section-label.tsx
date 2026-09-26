type SectionLabelProps = {
  number: string;
  label: string;
  className?: string;
};

export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <p className={`eyebrow ${className}`}>
      [ {number} / {label} ]
    </p>
  );
}


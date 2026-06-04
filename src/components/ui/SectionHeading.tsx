interface SectionHeadingProps {
  children: React.ReactNode;
  en?: string;
  index?: string;
}

export default function SectionHeading({
  children,
  en,
  index,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex items-baseline gap-3 border-b-2 border-ink/80 pb-3">
      {index && (
        <span className="font-display text-xl text-accent tabular-nums">
          {index}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
        {children}
      </h2>
      {en && (
        <span className="font-display text-sm text-faint uppercase tracking-widest">
          {en}
        </span>
      )}
    </div>
  );
}

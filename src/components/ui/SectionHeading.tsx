interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-bold text-center mb-12 relative">
      {children}
      <span className="block w-12 h-1 bg-blue-600 mx-auto mt-3 rounded" />
    </h2>
  );
}

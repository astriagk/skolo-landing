import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className,
  dark,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 px-4 md:py-24 md:px-6",
        dark ? "bg-gray-900 text-white" : "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

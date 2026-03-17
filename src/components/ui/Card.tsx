import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm",
        hover && "transition-all duration-200 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

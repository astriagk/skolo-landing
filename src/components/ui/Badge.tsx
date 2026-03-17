import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "warning" | "success";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-50 text-primary-700 border-primary-200",
    secondary: "bg-gray-50 text-gray-700 border-gray-200",
    warning: "bg-warning-50 text-warning-600 border-warning-100",
    success: "bg-secondary-50 text-secondary-700 border-secondary-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

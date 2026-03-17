import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({
  currentStep,
  totalSteps,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-6">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            i + 1 === currentStep
              ? "w-8 bg-primary-600"
              : i + 1 < currentStep
              ? "w-2 bg-primary-400"
              : "w-2 bg-gray-200"
          )}
        />
      ))}
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "accent";
}

const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ className, value, size = "md", variant = "primary", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-12 h-12",
      md: "w-16 h-16", 
      lg: "w-24 h-24"
    };

    const strokeWidth = size === "sm" ? 3 : size === "md" ? 4 : 6;
    const radius = size === "sm" ? 18 : size === "md" ? 24 : 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    const colors = {
      primary: "stroke-primary",
      success: "stroke-success", 
      accent: "stroke-accent"
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", sizeClasses[size], className)}
        {...props}
      >
        <svg
          className="transform -rotate-90"
          width="100%"
          height="100%"
          viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}
        >
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted opacity-20"
          />
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={cn("transition-all duration-500 ease-in-out", colors[variant])}
          />
        </svg>
        <span className="absolute text-sm font-bold text-foreground">
          {Math.round(value)}%
        </span>
      </div>
    );
  }
);
ProgressCircle.displayName = "ProgressCircle";

export { ProgressCircle };
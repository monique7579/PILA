import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lock, Star, CheckCircle2 } from "lucide-react";

interface LessonNodeProps {
  title: string;
  isCompleted?: boolean;
  isActive?: boolean;
  isLocked?: boolean;
  stars?: number;
  onClick?: () => void;
  position: "left" | "right" | "center";
}

export function LessonNode({ 
  title, 
  isCompleted = false, 
  isActive = false, 
  isLocked = false,
  stars = 0,
  onClick,
  position = "center"
}: LessonNodeProps) {
  const positionClasses = {
    left: "self-start",
    right: "self-end", 
    center: "self-center"
  };

  return (
    <div className={cn("relative", positionClasses[position])}>
      <Button
        variant={isCompleted ? "success" : isActive ? "hero" : "outline"}
        size="lg"
        className={cn(
          "h-16 w-16 rounded-full relative transition-all duration-300",
          isLocked && "opacity-50 cursor-not-allowed",
          !isLocked && "hover:scale-110 hover:shadow-medium"
        )}
        onClick={!isLocked ? onClick : undefined}
        disabled={isLocked}
      >
        {isLocked ? (
          <Lock className="h-6 w-6" />
        ) : isCompleted ? (
          <CheckCircle2 className="h-6 w-6" />
        ) : (
          <span className="font-bold text-sm">{title}</span>
        )}
        
        {isCompleted && stars > 0 && (
          <div className="absolute -top-2 -right-2 flex">
            {Array.from({ length: Math.min(stars, 3) }).map((_, i) => (
              <Star 
                key={i} 
                className="h-3 w-3 fill-accent text-accent" 
              />
            ))}
          </div>
        )}
      </Button>
      
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-xs font-medium text-foreground whitespace-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { cn } from "@/lib/utils";

interface LanguageCardProps {
  name: string;
  nativeName: string;
  flag: string;
  progress: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function LanguageCard({ 
  name, 
  nativeName, 
  flag, 
  progress, 
  isActive = false,
  onClick 
}: LanguageCardProps) {
  return (
    <Card 
      className={cn(
        "transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-medium",
        isActive ? "ring-2 ring-primary shadow-medium" : "hover:ring-1 hover:ring-primary/50"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 text-center space-y-4">
        <div className="text-4xl mb-2">{flag}</div>
        <div>
          <h3 className="font-bold text-lg text-foreground">{name}</h3>
          <p className="text-muted-foreground text-sm">{nativeName}</p>
        </div>
        
        {progress > 0 ? (
          <div className="flex flex-col items-center space-y-2">
            <ProgressCircle value={progress} size="md" variant="primary" />
            <Button variant="outline" size="sm" className="w-full">
              Continue
            </Button>
          </div>
        ) : (
          <Button variant="hero" size="sm" className="w-full">
            Start Learning
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
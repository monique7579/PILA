import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Star, RotateCcw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import pilaMascot from "@/assets/pila-mascot.png";

export default function LessonComplete() {
  const { languageId, lessonId } = useParams<{ languageId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const score = parseInt(searchParams.get("score") || "0");
  const totalQuestions = 3; // This would come from lesson data
  const percentage = Math.round((score / totalQuestions) * 100);
  const stars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : percentage >= 50 ? 1 : 0;

  const handleContinue = () => {
    navigate(`/lessons/${languageId}`);
  };

  const handleRetry = () => {
    navigate(`/lesson/${languageId}/${lessonId}`);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-6">
        <Card className="shadow-strong bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-8 text-center space-y-6">
            {/* Celebration Animation */}
            <div className="relative">
              <img 
                src={pilaMascot} 
                alt="PILA Mascot" 
                className="w-24 h-24 mx-auto animate-bounce" 
              />
              {stars > 0 && (
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <Trophy className="w-8 h-8 text-accent fill-accent" />
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Lesson Complete!
              </h1>
              <p className="text-muted-foreground">
                You scored {score} out of {totalQuestions} questions
              </p>
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-8 h-8 transition-all duration-500",
                    i < stars 
                      ? "text-accent fill-accent animate-pulse" 
                      : "text-muted-foreground/30"
                  )}
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>

            {/* Score Card */}
            <Card className={cn(
              "transition-all duration-300",
              percentage >= 70 ? "bg-success/10 border-success" : "bg-warning/10 border-warning"
            )}>
              <CardContent className="p-4">
                <div className="text-3xl font-bold mb-2">
                  <span className={cn(
                    percentage >= 70 ? "text-success" : "text-warning"
                  )}>
                    {percentage}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {percentage >= 90 ? "Perfect!" : 
                   percentage >= 70 ? "Great job!" : 
                   percentage >= 50 ? "Good effort!" : "Keep practicing!"}
                </p>
              </CardContent>
            </Card>

            {/* XP Gained */}
            <div className="bg-gradient-accent p-4 rounded-lg">
              <p className="text-sm text-accent-foreground/80 mb-1">XP Gained</p>
              <p className="text-2xl font-bold text-accent-foreground">
                +{score * 10}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleContinue}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Continue
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleRetry}
                  className="flex-1"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retry
                </Button>
                
                <Button 
                  variant="secondary" 
                  onClick={handleHome}
                  className="flex-1"
                >
                  Home
                </Button>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                {stars >= 2 
                  ? "🎉 Amazing progress! Keep up the great work!" 
                  : "💪 Practice makes perfect! You're improving!"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LessonNode } from "@/components/lesson-node";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { ArrowLeft, Trophy, Star } from "lucide-react";
import pilaMascot from "@/assets/pila-mascot.png";

const lessonsData = {
  tagalog: {
    name: "Tagalog",
    nativeName: "Tagalog",
    flag: "🇵🇭",
    progress: 65,
    lessons: [
      { id: 1, title: "Basics 1", isCompleted: true, isActive: false, isLocked: false, stars: 3 },
      { id: 2, title: "Greetings", isCompleted: true, isActive: false, isLocked: false, stars: 2 },
      { id: 3, title: "Family", isCompleted: false, isActive: true, isLocked: false, stars: 0 },
      { id: 4, title: "Food", isCompleted: false, isActive: false, isLocked: false, stars: 0 },
      { id: 5, title: "Colors", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
      { id: 6, title: "Numbers", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
    ]
  },
  bisaya: {
    name: "Bisaya", 
    nativeName: "Binisaya",
    flag: "🇵🇭",
    progress: 0,
    lessons: [
      { id: 1, title: "Basics 1", isCompleted: false, isActive: true, isLocked: false, stars: 0 },
      { id: 2, title: "Greetings", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
      { id: 3, title: "Family", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
      { id: 4, title: "Food", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
      { id: 5, title: "Colors", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
      { id: 6, title: "Numbers", isCompleted: false, isActive: false, isLocked: true, stars: 0 },
    ]
  }
};

export default function Lessons() {
  const { languageId } = useParams<{ languageId: string }>();
  const navigate = useNavigate();
  
  const language = languageId ? lessonsData[languageId as keyof typeof lessonsData] : null;

  if (!language) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Language not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const handleLessonClick = (lessonId: number) => {
    navigate(`/lesson/${languageId}/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b shadow-soft">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-3 flex-1">
            <span className="text-2xl">{language.flag}</span>
            <div>
              <h1 className="font-bold text-lg">{language.name}</h1>
              <p className="text-sm text-muted-foreground">{language.nativeName}</p>
            </div>
          </div>
          
          <ProgressCircle value={language.progress} size="sm" variant="primary" />
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Progress Card */}
        <Card className="mb-6 bg-gradient-primary shadow-medium">
          <CardContent className="p-4 text-center text-primary-foreground">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <img src={pilaMascot} alt="PILA Mascot" className="w-8 h-8" />
              <h2 className="font-bold">Great progress!</h2>
            </div>
            <p className="text-sm opacity-90">
              You're {language.progress}% through {language.name}
            </p>
          </CardContent>
        </Card>

        {/* Lesson Path */}
        <div className="space-y-6">
          <div className="flex flex-col space-y-8 relative">
            {/* Lesson Path Line */}
            <div className="absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-primary/30 via-primary/20 to-muted transform -translate-x-1/2" />
            
            {language.lessons.map((lesson, index) => (
              <LessonNode
                key={lesson.id}
                title={lesson.title}
                isCompleted={lesson.isCompleted}
                isActive={lesson.isActive}
                isLocked={lesson.isLocked}
                stars={lesson.stars}
                position={index % 3 === 0 ? "center" : index % 3 === 1 ? "left" : "right"}
                onClick={() => handleLessonClick(lesson.id)}
              />
            ))}
          </div>
        </div>

        {/* Achievement Section */}
        <Card className="mt-8 bg-gradient-accent">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-accent-foreground mx-auto mb-2" />
            <h3 className="font-bold text-accent-foreground mb-1">Keep it up!</h3>
            <p className="text-sm text-accent-foreground/80">
              Complete more lessons to unlock achievements
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LanguageCard } from "@/components/language-card";
import { ProgressCircle } from "@/components/ui/progress-circle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Flame, Trophy, Target, BookOpen } from "lucide-react";
import pilaMascot from "@/assets/pila-mascot.png";

interface UserStats {
  streak: number;
  totalXP: number;
  lessonsCompleted: number;
  currentGoal: number;
}

const mockUserStats: UserStats = {
  streak: 7,
  totalXP: 1250,
  lessonsCompleted: 23,
  currentGoal: 5
};

const languages = [
  {
    id: "tagalog",
    name: "Tagalog",
    nativeName: "Tagalog",
    flag: "🇵🇭",
    progress: 65
  },
  {
    id: "bisaya",
    name: "Bisaya",
    nativeName: "Binisaya",
    flag: "🇵🇭",
    progress: 0
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>("tagalog");

  const handleContinueLearning = () => {
    if (selectedLanguage) {
      navigate(`/lessons/${selectedLanguage}`);
    }
  };

  const handleBackToLanding = () => {
    navigate("/");
  };

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguage(languageId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b shadow-soft">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={pilaMascot} alt="PILA Mascot" className="w-10 h-10" />
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PILA
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-accent">
              <Flame size={20} />
              <span className="font-bold">{mockUserStats.streak}</span>
            </div>
            <div className="flex items-center space-x-1 text-primary">
              <Trophy size={20} />
              <span className="font-bold">{mockUserStats.totalXP}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Daily Goal Progress */}
        <Card className="bg-gradient-accent shadow-medium">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-accent-foreground">Daily Goal</h3>
                <p className="text-sm text-accent-foreground/80">
                  {mockUserStats.lessonsCompleted} / {mockUserStats.currentGoal} lessons
                </p>
              </div>
              <ProgressCircle 
                value={(mockUserStats.lessonsCompleted / mockUserStats.currentGoal) * 100}
                variant="primary" 
                size="md"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center">
            <CardContent className="p-3">
              <Flame className="w-6 h-6 text-accent mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Streak</p>
              <p className="font-bold">{mockUserStats.streak}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-3">
              <Trophy className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Total XP</p>
              <p className="font-bold">{mockUserStats.totalXP}</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-3">
              <BookOpen className="w-6 h-6 text-success mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">Lessons</p>
              <p className="font-bold">{mockUserStats.lessonsCompleted}</p>
            </CardContent>
          </Card>
        </div>

        {/* Language Selection */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold">Choose Your Language</h2>
          </div>
          
          <div className="grid gap-4">
            {languages.map((language) => (
              <LanguageCard
                key={language.id}
                name={language.name}
                nativeName={language.nativeName}
                flag={language.flag}
                progress={language.progress}
                isActive={selectedLanguage === language.id}
                onClick={() => handleLanguageSelect(language.id)}
              />
            ))}
          </div>
        </div>

        {/* Continue Learning Button */}
        {selectedLanguage && (
          <div className="sticky bottom-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={handleContinueLearning}
            >
              Continue Learning
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
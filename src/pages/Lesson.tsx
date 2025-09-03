import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Volume2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import pilaMascot from "@/assets/pila-mascot.png";

interface Question {
  id: number;
  type: "multiple_choice" | "translation";
  question: string;
  options?: string[];
  correctAnswer: string;
  translation?: string;
  audio?: string;
}

const lessonData: Record<string, Record<number, { title: string; questions: Question[] }>> = {
  tagalog: {
    3: {
      title: "Family",
      questions: [
        {
          id: 1,
          type: "multiple_choice",
          question: "How do you say 'mother' in Tagalog?",
          options: ["Ama", "Ina", "Anak", "Asawa"],
          correctAnswer: "Ina",
          translation: "Mother"
        },
        {
          id: 2,
          type: "multiple_choice", 
          question: "What does 'Tatay' mean?",
          options: ["Brother", "Father", "Sister", "Son"],
          correctAnswer: "Father",
          translation: "Father"
        },
        {
          id: 3,
          type: "translation",
          question: "Translate: 'My family is big'",
          correctAnswer: "Malaki ang aking pamilya",
          translation: "My family is big"
        }
      ]
    }
  },
  bisaya: {
    1: {
      title: "Basics 1",
      questions: [
        {
          id: 1,
          type: "multiple_choice",
          question: "How do you say 'hello' in Bisaya?",
          options: ["Kumusta", "Maayong adlaw", "Salamat", "Paalam"],
          correctAnswer: "Maayong adlaw",
          translation: "Good day/Hello"
        }
      ]
    }
  }
};

export default function Lesson() {
  const { languageId, lessonId } = useParams<{ languageId: string; lessonId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);

  const lesson = languageId && lessonId ? 
    lessonData[languageId]?.[parseInt(lessonId)] : null;

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Button onClick={() => navigate("/dashboard")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const question = lesson.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / lesson.questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setHearts(hearts - 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < lesson.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer("");
        setShowResult(false);
      } else {
        // Lesson completed
        navigate(`/lesson-complete/${languageId}/${lessonId}?score=${score + (isCorrect ? 1 : 0)}`);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b shadow-soft">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(`/lessons/${languageId}`)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <h1 className="font-bold">{lesson.title}</h1>
            
            <div className="flex items-center space-x-1">
              {Array.from({ length: hearts }).map((_, i) => (
                <Heart key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-6">
        {/* Mascot */}
        <div className="text-center mb-6">
          <img 
            src={pilaMascot} 
            alt="PILA Mascot" 
            className={cn(
              "w-20 h-20 mx-auto transition-all duration-500",
              showResult && selectedAnswer === question.correctAnswer 
                ? "animate-bounce" 
                : ""
            )} 
          />
        </div>

        {/* Question Card */}
        <Card className="mb-6 shadow-medium">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold mb-2">{question.question}</h2>
              {question.type === "translation" && (
                <p className="text-sm text-muted-foreground">
                  Type your answer below
                </p>
              )}
            </div>

            {question.type === "multiple_choice" && question.options && (
              <div className="space-y-3">
                {question.options.map((option) => (
                  <Button
                    key={option}
                    variant={
                      showResult 
                        ? option === question.correctAnswer 
                          ? "success"
                          : option === selectedAnswer 
                            ? "destructive" 
                            : "outline"
                        : selectedAnswer === option 
                          ? "hero" 
                          : "outline"
                    }
                    className="w-full justify-start text-left h-12"
                    onClick={() => !showResult && handleAnswerSelect(option)}
                    disabled={showResult}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {question.type === "translation" && (
              <div className="space-y-4">
                <input
                  type="text"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Type your translation here..."
                  disabled={showResult}
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Result Feedback */}
        {showResult && (
          <Card className={cn(
            "mb-6",
            selectedAnswer === question.correctAnswer 
              ? "bg-success/10 border-success" 
              : "bg-destructive/10 border-destructive"
          )}>
            <CardContent className="p-4 text-center">
              <p className={cn(
                "font-bold text-lg",
                selectedAnswer === question.correctAnswer 
                  ? "text-success" 
                  : "text-destructive"
              )}>
                {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Correct answer: {question.correctAnswer}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Submit Button */}
        {!showResult && (
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full"
            onClick={handleSubmit}
            disabled={!selectedAnswer}
          >
            Check Answer
          </Button>
        )}
      </main>
    </div>
  );
}
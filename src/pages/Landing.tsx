import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Globe, BookOpen, Trophy, Users, Star, Play, Heart } from "lucide-react";
import pilaMascot from "@/assets/pila-mascot.png";

const features = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Interactive Lessons",
    description: "Learn through engaging exercises, quizzes, and real-world conversations"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Gamified Learning",
    description: "Earn XP, maintain streaks, and unlock achievements as you progress"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multiple Languages",
    description: "Master Tagalog, Bisaya, and more Philippine languages"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Cultural Context",
    description: "Learn not just words, but the rich culture behind each language"
  }
];

const testimonials = [
  {
    name: "Maria Santos",
    text: "PILA helped me reconnect with my Filipino roots. The lessons are fun and authentic!",
    stars: 5
  },
  {
    name: "Jose Cruz", 
    text: "As a Filipino-American, this app bridged the gap between me and my heritage.",
    stars: 5
  },
  {
    name: "Anna Reyes",
    text: "The gamification keeps me motivated. I've learned more in a month than in years!",
    stars: 5
  }
];

export default function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  const handleTryDemo = () => {
    navigate("/lesson/tagalog/1");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={pilaMascot} 
              alt="PILA Mascot" 
              className="w-32 h-32 animate-bounce drop-shadow-lg" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Welcome to{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              PILA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            Philippines Language Adventure
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover the beauty of Filipino languages through interactive lessons inspired by Filipino culture. 
            Learn Tagalog, Bisaya, and more with gamified lessons that make learning fun!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-strong hover:scale-105 transition-all"
              onClick={handleGetStarted}
            >
              <Heart className="w-5 h-5 mr-2" />
              Start Learning Free
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
              onClick={handleTryDemo}
            >
              <Play className="w-5 h-5 mr-2" />
              Try Demo Lesson
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Why Choose PILA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the most engaging way to learn Philippine languages with features designed for modern learners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-secondary bg-clip-text text-transparent">
            Languages You'll Master
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/20 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🇵🇭</div>
                <h3 className="text-2xl font-bold mb-2">Tagalog</h3>
                <p className="text-muted-foreground mb-4">
                  The national language of the Philippines, spoken by over 25 million people
                </p>
                <div className="text-sm bg-primary/10 rounded-lg p-3">
                  <strong>Sample:</strong> "Maligayang pagdating!" (Welcome!)
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20 border-secondary/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🇵🇭</div>
                <h3 className="text-2xl font-bold mb-2">Bisaya</h3>
                <p className="text-muted-foreground mb-4">
                  Widely spoken in Visayas and Mindanao, rich in cultural expressions
                </p>
                <div className="text-sm bg-secondary/10 rounded-lg p-3">
                  <strong>Sample:</strong> "Maayong adlaw!" (Good day!)
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-accent/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Loved by Learners Worldwide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-foreground">
                    — {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Filipino Language Journey?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of learners discovering the beauty of Philippine languages. 
            Start with just 5 minutes a day!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-strong hover:scale-105 transition-all"
              onClick={handleGetStarted}
            >
              Begin Your Adventure
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            ✨ Free to start • 📱 Works on all devices • 🏆 Gamified learning
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={pilaMascot} alt="PILA" className="w-8 h-8" />
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PILA
            </h3>
          </div>
          <p className="text-muted-foreground">
            Preserving and celebrating Philippine languages through modern technology
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            🇵🇭 Made with love for Filipino culture
          </p>
        </div>
      </footer>
    </div>
  );
}
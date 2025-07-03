import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Gamepad2, Trophy, Gift, HelpCircle, Sun, Share, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QRCodeScanner from "@/components/QRCodeScanner";
import type { TriviaQuestion } from "@shared/schema";

export default function Rewards() {
  const [showScanner, setShowScanner] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<TriviaQuestion | null>(null);
  const [userStreak, setUserStreak] = useState(7);
  const [userPoints, setUserPoints] = useState(250);

  const { data: randomQuestion } = useQuery<TriviaQuestion>({
    queryKey: ['/api/trivia/random'],
    enabled: showScanner,
  });

  const handleStartQuiz = () => {
    setShowScanner(true);
    if (randomQuestion) {
      setCurrentQuestion(randomQuestion);
    }
  };

  return (
    <section id="rewards" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-wood-dark">
              <Gamepad2 size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Rewards</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark leading-tight">
              Scan. Play.<br />
              <span className="text-wood-dark">Win.</span>
            </h2>
            
            <p className="text-coffee-brown leading-relaxed">
              TŌKI is the first café that rewards your mind and your loyalty.
            </p>
            
            <p className="text-coffee-brown leading-relaxed">
              Each cup comes with a unique QR code — scan it to:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-wood-light p-2 rounded-full">
                  <HelpCircle className="text-coffee-dark" size={16} />
                </div>
                <span className="text-coffee-brown">Join weekly trivia challenges</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-wood-light p-2 rounded-full">
                  <Trophy className="text-coffee-dark" size={16} />
                </div>
                <span className="text-coffee-brown">Climb the leaderboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-wood-light p-2 rounded-full">
                  <Gift className="text-coffee-dark" size={16} />
                </div>
                <span className="text-coffee-brown">Unlock free drinks, merch, and surprises</span>
              </div>
            </div>
            
            <Card className="bg-warm-beige">
              <CardContent className="p-6">
                <h3 className="font-semibold text-coffee-dark mb-4">Coming Soon:</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Sun className="text-wood-dark mx-auto mb-2" size={24} />
                    <p className="text-sm text-coffee-brown">Streak bonuses</p>
                  </div>
                  <div>
                    <Share className="text-wood-dark mx-auto mb-2" size={24} />
                    <p className="text-sm text-coffee-brown">Referral boosts</p>
                  </div>
                  <div>
                    <Zap className="text-wood-dark mx-auto mb-2" size={24} />
                    <p className="text-sm text-coffee-brown">Trivia battles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-coffee-brown text-lg font-medium">
              Coffee's never been this fun.
            </p>
          </div>
          
          <div className="relative">
            {showScanner ? (
              <QRCodeScanner 
                question={currentQuestion}
                onClose={() => setShowScanner(false)}
                userPoints={userPoints}
                userStreak={userStreak}
              />
            ) : (
              <Card className="bg-warm-beige shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-coffee-dark mb-2">Scan Your Cup</h3>
                    <p className="text-coffee-brown">Try our QR code demo</p>
                  </div>
                  
                  <Card className="bg-white shadow-lg mb-6">
                    <CardContent className="p-6">
                      <div className="w-48 h-48 mx-auto bg-coffee-dark rounded-lg flex items-center justify-center relative">
                        <div className="grid grid-cols-8 gap-1 p-4">
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                          <div className="w-3 h-3 bg-coffee-dark rounded-sm"></div>
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                          <div className="w-3 h-3 bg-coffee-dark rounded-sm"></div>
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                          <div className="w-3 h-3 bg-coffee-dark rounded-sm"></div>
                          <div className="w-3 h-3 bg-white rounded-sm"></div>
                          <div className="w-3 h-3 bg-coffee-dark rounded-sm"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-wood-light p-4 rounded-lg">
                      <span className="text-coffee-dark font-semibold">Today's Challenge</span>
                      <span className="text-coffee-dark">+50 pts</span>
                    </div>
                    <div className="flex items-center justify-between bg-cream p-4 rounded-lg">
                      <span className="text-coffee-brown">Your Streak</span>
                      <span className="text-coffee-dark font-semibold">{userStreak} days 🔥</span>
                    </div>
                    <Button 
                      onClick={handleStartQuiz}
                      className="w-full bg-coffee-dark text-cream py-3 rounded-lg font-semibold hover:bg-coffee-brown transition-colors duration-200"
                    >
                      Start Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

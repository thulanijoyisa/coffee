import { useState } from "react";
import { X, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { TriviaQuestion } from "@shared/schema";

interface QRCodeScannerProps {
  question: TriviaQuestion | null;
  onClose: () => void;
  userPoints: number;
  userStreak: number;
}

export default function QRCodeScanner({ question, onClose, userPoints, userStreak }: QRCodeScannerProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSubmit = () => {
    if (selectedAnswer === null || !question) return;
    
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  if (!question) {
    return (
      <Card className="bg-warm-beige shadow-2xl">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-coffee-dark mx-auto mb-4"></div>
            <p className="text-coffee-brown">Loading question...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-warm-beige shadow-2xl relative">
      <CardContent className="p-8">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-coffee-brown hover:text-coffee-dark"
        >
          <X size={20} />
        </Button>
        
        {!showResult ? (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-coffee-dark mb-2">Trivia Challenge</h3>
              <p className="text-coffee-brown">Category: {question.category}</p>
              <p className="text-sm text-wood-dark">Worth {question.points} points</p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-coffee-dark mb-4">
                {question.question}
              </h4>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedAnswer(index)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      selectedAnswer === index
                        ? 'border-wood-dark bg-wood-light text-coffee-dark'
                        : 'border-wood-light bg-cream text-coffee-brown hover:border-wood-dark'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            <Button
              onClick={handleAnswerSubmit}
              disabled={selectedAnswer === null}
              className="w-full bg-coffee-dark text-cream py-3 rounded-lg font-semibold hover:bg-coffee-brown transition-colors duration-200 disabled:opacity-50"
            >
              Submit Answer
            </Button>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              {isCorrect ? (
                <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              ) : (
                <XCircle className="text-red-500 mx-auto mb-4" size={64} />
              )}
              
              <h3 className="text-2xl font-bold text-coffee-dark mb-2">
                {isCorrect ? "Correct!" : "Incorrect"}
              </h3>
              
              <p className="text-coffee-brown mb-4">
                {isCorrect 
                  ? `You earned ${question.points} points!` 
                  : `The correct answer was: ${question.options[question.correctAnswer]}`
                }
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-coffee-brown">Points</p>
                  <p className="text-xl font-bold text-coffee-dark">
                    {userPoints + (isCorrect ? (question.points ?? 0) : 0)}
                  </p>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-coffee-brown">Streak</p>
                  <p className="text-xl font-bold text-coffee-dark">
                    {isCorrect ? userStreak + 1 : 0} days
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button
                onClick={handleRetry}
                className="flex-1 bg-wood-light text-coffee-dark py-3 rounded-lg font-semibold hover:bg-wood-dark hover:text-cream transition-colors duration-200"
              >
                Try Another
              </Button>
              <Button
                onClick={onClose}
                className="flex-1 bg-coffee-dark text-cream py-3 rounded-lg font-semibold hover:bg-coffee-brown transition-colors duration-200"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

import { MapPin, Gamepad2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-warm-beige py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-coffee-dark leading-tight">
                Brew Your<br />
                <span className="text-wood-dark">Moment.</span>
              </h1>
              <p className="text-xl text-coffee-brown leading-relaxed">
                Craft coffee meets gamified culture — only at TŌKI.
              </p>
              <p className="text-coffee-brown/80 leading-relaxed">
                Small-format designer cafés serving bold coffee, interactive rewards, and minimalist vibes — designed for your daily rhythm.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('locations')}
                className="bg-coffee-dark text-cream px-8 py-4 rounded-lg font-semibold hover:bg-coffee-brown transition-colors duration-200 flex items-center justify-center"
              >
                <MapPin className="mr-2" size={20} />
                Find a TŌKI Near You
              </Button>
              <Button
                onClick={() => scrollToSection('rewards')}
                className="bg-wood-light text-coffee-dark px-8 py-4 rounded-lg font-semibold hover:bg-wood-dark hover:text-cream transition-colors duration-200 flex items-center justify-center"
              >
                <Gamepad2 className="mr-2" size={20} />
                Join the Trivia Challenge
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/assets/925D711E-31A7-4E16-BA7C-9C83C37232BE_1751549649418.PNG" 
              alt="TŌKI cafe interior with minimalist Japanese design" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-cream rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500 fill-current" size={20} />
                <span className="text-sm font-semibold text-coffee-dark">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

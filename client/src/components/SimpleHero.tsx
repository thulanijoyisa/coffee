import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimpleHero() {
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
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-coffee-dark leading-tight">
                Brew Your<br />
                <span className="text-wood-dark animate-pulse-gentle">Moment.</span>
              </h1>
              <p className="text-xl text-coffee-brown leading-relaxed">
                Craft coffee meets minimalist design — only at TŌKI.
              </p>
              <p className="text-coffee-brown/80 leading-relaxed">
                Small-format designer cafés serving exceptional coffee in beautifully designed spaces — crafted for your daily ritual.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-coffee-dark text-cream px-8 py-4 rounded-lg font-semibold hover:bg-coffee-brown transition-colors duration-200 flex items-center justify-center"
              >
                <MapPin className="mr-2" size={20} />
                Visit Us
              </Button>
              <Button
                onClick={() => scrollToSection('menu')}
                className="bg-wood-light text-coffee-dark px-8 py-4 rounded-lg font-semibold hover:bg-wood-dark hover:text-cream transition-colors duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call to Order
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-warm-beige to-wood-light rounded-2xl shadow-2xl p-8 h-80 flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                  <linearGradient id="coffeeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#D4B895', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#8B4513', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Minimalist cafe interior */}
                <rect width="400" height="300" fill="#F5F1E8" />
                
                {/* Counter */}
                <rect x="50" y="200" width="300" height="60" fill="#8B4513" rx="4" />
                <rect x="60" y="210" width="280" height="40" fill="#A0522D" rx="2" />
                
                {/* Coffee machine */}
                <rect x="280" y="160" width="40" height="40" fill="#654321" rx="4" />
                <circle cx="300" cy="170" r="8" fill="#2F1B14" />
                
                {/* Hanging light */}
                <line x1="200" y1="30" x2="200" y2="80" stroke="#8B4513" strokeWidth="2" />
                <ellipse cx="200" cy="90" rx="25" ry="15" fill="#D4B895" />
                
                {/* Minimalist shelves */}
                <rect x="100" y="80" width="200" height="4" fill="#8B4513" />
                <rect x="120" y="120" width="160" height="4" fill="#8B4513" />
                
                {/* Coffee cups on shelf */}
                <circle cx="140" cy="105" r="8" fill="#FFF" stroke="#8B4513" strokeWidth="1" />
                <circle cx="170" cy="105" r="8" fill="#FFF" stroke="#8B4513" strokeWidth="1" />
                <circle cx="200" cy="105" r="8" fill="#FFF" stroke="#8B4513" strokeWidth="1" />
                
                {/* Plants for Japanese aesthetic */}
                <ellipse cx="80" cy="140" rx="15" ry="30" fill="#228B22" />
                <rect x="75" y="170" width="10" height="15" fill="#8B4513" />
                
                <ellipse cx="320" cy="130" rx="12" ry="25" fill="#228B22" />
                <rect x="316" y="155" width="8" height="12" fill="#8B4513" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cream rounded-xl p-4 shadow-warm animate-float">
              <div className="flex items-center space-x-2">
                <span className="text-2xl animate-pulse-gentle">⭐</span>
                <span className="text-sm font-semibold text-coffee-dark">4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
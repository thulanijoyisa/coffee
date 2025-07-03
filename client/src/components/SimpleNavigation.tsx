import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimpleNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-coffee-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coffee className="text-coffee-dark" size={24} />
            <span className="text-xl font-bold text-coffee-dark">TŌKI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-coffee-dark"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-warm-beige border-t border-coffee-dark/10">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
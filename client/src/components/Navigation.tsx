import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-cream/95 backdrop-blur-md sticky top-0 z-50 border-b border-wood-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Coffee className="text-coffee-dark mr-2" size={24} />
              <span className="text-2xl font-bold text-coffee-dark">TŌKI</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
                onClick={() => scrollToSection('rewards')}
                className="text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
              >
                Rewards
              </button>
              <button 
                onClick={() => scrollToSection('locations')}
                className="text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
              >
                Locations
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-brown hover:text-coffee-dark"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-wood-light/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left px-3 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('rewards')}
              className="block w-full text-left px-3 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              Rewards
            </button>
            <button 
              onClick={() => scrollToSection('locations')}
              className="block w-full text-left px-3 py-2 text-coffee-brown hover:text-coffee-dark transition-colors duration-200"
            >
              Locations
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

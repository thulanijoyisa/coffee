import { Coffee, Mail, Phone, MapPin } from "lucide-react";

export default function SimpleFooter() {
  return (
    <footer className="bg-coffee-dark text-cream py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          <circle cx="100" cy="50" r="30" fill="currentColor" />
          <circle cx="300" cy="150" r="20" fill="currentColor" />
          <circle cx="50" cy="150" r="15" fill="currentColor" />
          <circle cx="350" cy="50" r="25" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6 animate-fadeInUp">
            <div className="flex items-center space-x-3">
              <div className="bg-wood-light p-2 rounded-full">
                <Coffee className="text-coffee-dark" size={28} />
              </div>
              <span className="text-2xl font-bold">TŌKI</span>
            </div>
            <p className="text-cream/90 text-lg leading-relaxed max-w-md">
              Minimalist coffee culture meets maximalist flavor. Experience the art of slow coffee in beautifully designed spaces.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-wood-light rounded-full"></div>
              <span className="text-cream/70 text-sm">Since 2025</span>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold text-cream border-b border-wood-light/30 pb-2">
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="text-wood-light mt-1 group-hover:scale-110 transition-transform duration-200" size={18} />
                <div>
                  <p className="text-cream/90 font-medium">TŌKI Shibuya</p>
                  <p className="text-cream/70 text-sm">1-1-1 Shibuya, Tokyo</p>
                  <p className="text-cream/70 text-sm">Japan 150-0002</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="text-wood-light group-hover:scale-110 transition-transform duration-200" size={18} />
                <div>
                  <p className="text-cream/90 font-medium">+81-3-1234-5678</p>
                  <p className="text-cream/70 text-sm">Call for orders</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="text-wood-light group-hover:scale-110 transition-transform duration-200" size={18} />
                <div>
                  <p className="text-cream/90 font-medium">hello@toki.coffee</p>
                  <p className="text-cream/70 text-sm">Questions & feedback</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hours Section */}
          <div className="space-y-6 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <h3 className="text-xl font-semibold text-cream border-b border-wood-light/30 pb-2">
              Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-cream/90">Monday - Friday</span>
                <span className="text-wood-light font-medium">7AM - 7PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cream/90">Saturday - Sunday</span>
                <span className="text-wood-light font-medium">8AM - 8PM</span>
              </div>
              <div className="mt-4 p-3 bg-wood-light/10 rounded-lg">
                <p className="text-cream/80 text-sm">
                  ✨ Extended hours during peak seasons
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © 2025 TŌKI Coffee. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-cream/60 text-sm">
              <span>Made with ❤️ in Tokyo</span>
              <span>•</span>
              <span>Sustainable coffee sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Coffee, Mail, Phone, MapPin } from "lucide-react";

export default function SimpleFooter() {
  return (
    <footer className="bg-coffee-dark text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="text-wood-light" size={24} />
              <span className="text-xl font-bold">TŌKI</span>
            </div>
            <p className="text-cream/80 text-sm">
              Minimalist coffee culture.<br />
              Maximalist flavor.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cream">Visit Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="text-wood-light" size={16} />
                <span className="text-cream/80 text-sm">1-1-1 Shibuya, Tokyo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-wood-light" size={16} />
                <span className="text-cream/80 text-sm">+81-3-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-wood-light" size={16} />
                <span className="text-cream/80 text-sm">hello@toki.coffee</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cream">Hours</h3>
            <div className="space-y-1 text-cream/80 text-sm">
              <p>Mon-Fri: 7:00 AM - 7:00 PM</p>
              <p>Sat-Sun: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © 2025 TŌKI Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
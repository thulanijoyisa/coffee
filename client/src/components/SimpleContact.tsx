import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SimpleContact() {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-wood-dark mb-6">
            <MapPin size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">Visit Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Find Your<br />
            <span className="text-wood-dark">TŌKI Moment</span>
          </h2>
          <p className="text-coffee-brown text-lg max-w-2xl mx-auto">
            Come experience our minimalist coffee culture in person.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="bg-warm-beige shadow-soft hover:shadow-warm transition-all duration-300 animate-fadeInUp">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-wood-light p-3 rounded-full animate-pulse-gentle">
                      <MapPin className="text-coffee-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-dark mb-2">TŌKI Shibuya</h3>
                      <p className="text-coffee-brown">1-1-1 Shibuya, Tokyo</p>
                      <p className="text-coffee-brown">Japan 150-0002</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-wood-light p-3 rounded-full">
                      <Phone className="text-coffee-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-dark mb-2">Call to Order</h3>
                      <p className="text-coffee-brown">+81-3-1234-5678</p>
                      <p className="text-coffee-brown text-sm">Pre-order for pickup</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-wood-light p-3 rounded-full">
                      <Clock className="text-coffee-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-dark mb-2">Hours</h3>
                      <p className="text-coffee-brown">Mon-Fri: 7:00 AM - 7:00 PM</p>
                      <p className="text-coffee-brown">Sat-Sun: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-wood-light p-3 rounded-full">
                      <Mail className="text-coffee-dark" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-coffee-dark mb-2">Email</h3>
                      <p className="text-coffee-brown">hello@toki.coffee</p>
                      <p className="text-coffee-brown text-sm">Questions & feedback</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-wood-light">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-coffee-dark mb-2">Coming Soon</h3>
                <p className="text-coffee-brown text-sm">
                  Additional micro-locations opening in Harajuku and Omotesando.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-warm-beige to-cream rounded-2xl shadow-2xl p-8 h-96 flex items-center justify-center">
              <svg viewBox="0 0 300 250" className="w-full h-full">
                {/* Japanese-style storefront */}
                <rect width="300" height="250" fill="#F5F1E8" />
                
                {/* Building structure */}
                <rect x="50" y="100" width="200" height="120" fill="#D4B895" />
                <rect x="60" y="110" width="180" height="100" fill="#F5F1E8" />
                
                {/* Roof */}
                <polygon points="40,100 150,50 260,100" fill="#8B4513" />
                <polygon points="45,95 150,55 255,95" fill="#A0522D" />
                
                {/* Window */}
                <rect x="80" y="130" width="60" height="40" fill="#87CEEB" rx="4" />
                <rect x="100" y="150" width="20" height="20" fill="#FFF" opacity="0.8" />
                
                {/* Door */}
                <rect x="170" y="160" width="40" height="60" fill="#654321" rx="4" />
                <circle cx="200" cy="190" r="2" fill="#FFD700" />
                
                {/* TŌKI sign */}
                <rect x="120" y="85" width="60" height="20" fill="#2F1B14" rx="4" />
                <text x="150" y="98" textAnchor="middle" fontSize="12" fill="#FFF" fontWeight="bold">TŌKI</text>
                
                {/* Coffee cup sign */}
                <circle cx="90" cy="95" r="8" fill="#8B4513" />
                <path d="M85 90 Q87 85 85 80" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.7" />
                <path d="M90 90 Q92 85 90 80" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.7" />
                <path d="M95 90 Q97 85 95 80" stroke="#E6E6FA" strokeWidth="1" fill="none" opacity="0.7" />
                
                {/* Plants */}
                <ellipse cx="40" cy="200" rx="8" ry="20" fill="#228B22" />
                <rect x="37" y="210" width="6" height="10" fill="#8B4513" />
                
                <ellipse cx="260" cy="190" rx="10" ry="25" fill="#228B22" />
                <rect x="256" y="205" width="8" height="15" fill="#8B4513" />
                
                {/* Sidewalk */}
                <rect x="0" y="220" width="300" height="30" fill="#D3D3D3" />
                
                {/* Street lamp */}
                <rect x="20" y="120" width="4" height="100" fill="#2F1B14" />
                <ellipse cx="22" cy="115" rx="8" ry="5" fill="#FFD700" />
                
                {/* Small details */}
                <circle cx="240" cy="40" r="8" fill="#FFF" opacity="0.8" />
                <circle cx="250" cy="35" r="6" fill="#FFF" opacity="0.6" />
                <circle cx="260" cy="45" r="4" fill="#FFF" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
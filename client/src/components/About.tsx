import { Leaf, Coffee } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-wood-dark">
              <Leaf size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark leading-tight">
              TŌKI is Time.<br />
              <span className="text-wood-dark">Make it Yours.</span>
            </h2>
            
            <p className="text-coffee-brown leading-relaxed">
              We started TŌKI with one goal: to turn your coffee break into something more. Not just caffeine — but connection, clarity, and a little competition too.
            </p>
            
            <p className="text-coffee-brown leading-relaxed">
              Inspired by Japanese minimalism and urban lifestyle culture, TŌKI offers compact, beautifully designed coffee spots that fit perfectly into modern living. Each location is built with purpose, energy, and play in mind.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-warm-beige p-6 rounded-lg">
                <h3 className="font-semibold text-coffee-dark mb-2">Our Beliefs:</h3>
                <ul className="space-y-1 text-coffee-brown">
                  <li>• Quality over compromise</li>
                  <li>• Design with purpose</li>
                  <li>• Moments that matter</li>
                  <li>• Coffee that hits different</li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-cream to-warm-beige rounded-lg shadow-lg p-6 w-full h-32 flex items-center justify-center">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    {/* Coffee cups with TŌKI branding */}
                    <circle cx="50" cy="50" r="25" fill="#FFF" stroke="#8B4513" strokeWidth="2" />
                    <circle cx="50" cy="50" r="20" fill="#D2691E" />
                    <text x="50" y="55" textAnchor="middle" fontSize="8" fill="#FFF" fontWeight="bold">TŌKI</text>
                    
                    <circle cx="100" cy="50" r="25" fill="#FFF" stroke="#8B4513" strokeWidth="2" />
                    <circle cx="100" cy="50" r="20" fill="#8B4513" />
                    <text x="100" y="55" textAnchor="middle" fontSize="8" fill="#FFF" fontWeight="bold">TŌKI</text>
                    
                    <circle cx="150" cy="50" r="25" fill="#FFF" stroke="#8B4513" strokeWidth="2" />
                    <circle cx="150" cy="50" r="20" fill="#A0522D" />
                    <text x="150" y="55" textAnchor="middle" fontSize="8" fill="#FFF" fontWeight="bold">TŌKI</text>
                    
                    {/* Steam effects */}
                    <path d="M45 25 Q47 20 45 15" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M50 25 Q52 20 50 15" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M55 25 Q57 20 55 15" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-wood-light to-coffee-brown rounded-2xl shadow-2xl p-8 h-96 flex items-center justify-center">
              <svg viewBox="0 0 350 280" className="w-full h-full">
                {/* Mobile coffee cart */}
                <rect width="350" height="280" fill="#F5F1E8" />
                
                {/* Cart base */}
                <rect x="75" y="180" width="200" height="80" fill="#8B4513" rx="8" />
                <rect x="85" y="190" width="180" height="60" fill="#A0522D" rx="4" />
                
                {/* Wheels */}
                <circle cx="100" cy="270" r="15" fill="#2F1B14" />
                <circle cx="250" cy="270" r="15" fill="#2F1B14" />
                <circle cx="100" cy="270" r="8" fill="#696969" />
                <circle cx="250" cy="270" r="8" fill="#696969" />
                
                {/* Handle */}
                <rect x="40" y="190" width="8" height="60" fill="#8B4513" rx="4" />
                <rect x="30" y="185" width="25" height="8" fill="#8B4513" rx="4" />
                
                {/* Coffee equipment */}
                <rect x="100" y="150" width="150" height="30" fill="#654321" rx="4" />
                <circle cx="130" cy="165" r="8" fill="#2F1B14" />
                <circle cx="160" cy="165" r="8" fill="#2F1B14" />
                <circle cx="220" cy="165" r="8" fill="#2F1B14" />
                
                {/* Umbrella */}
                <line x1="175" y1="50" x2="175" y2="140" stroke="#8B4513" strokeWidth="4" />
                <path d="M100 50 Q175 20 250 50 Q200 70 175 65 Q150 70 100 50" fill="#D4B895" />
                
                {/* Coffee cups on display */}
                <circle cx="120" cy="200" r="6" fill="#FFF" stroke="#8B4513" strokeWidth="1" />
                <circle cx="140" cy="200" r="6" fill="#FFF" stroke="#8B4513" strokeWidth="1" />
                <circle cx="160" cy="200" r="6" fill="#FFF" stroke="#8B4513" strokeWidth="1" />
                
                {/* Steam from coffee */}
                <path d="M115 190 Q117 185 115 180" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M135 190 Q137 185 135 180" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                <path d="M155 190 Q157 185 155 180" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                
                {/* Background elements */}
                <rect x="20" y="100" width="8" height="80" fill="#228B22" />
                <ellipse cx="24" cy="90" rx="12" ry="20" fill="#228B22" />
                
                <rect x="320" y="120" width="6" height="60" fill="#228B22" />
                <ellipse cx="323" cy="110" rx="10" ry="15" fill="#228B22" />
              </svg>
            </div>
            <div className="absolute -top-6 -left-6 bg-wood-light rounded-full p-4 shadow-lg">
              <Coffee className="text-coffee-dark" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

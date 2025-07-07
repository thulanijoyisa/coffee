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
                <img
                  src="/assets/9FB6BF10-5CAC-4DBE-AAA3-B98B2EE36490_1751549649417.PNG"
                  alt="TŌKI mobile coffee cart"
                  className="max-h-full object-contain rounded-xl shadow-lg"
                />
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

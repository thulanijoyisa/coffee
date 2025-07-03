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
            <Card className="bg-warm-beige shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-wood-light p-3 rounded-full">
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
            <img 
              src="@assets/9FB6BF10-5CAC-4DBE-AAA3-B98B2EE36490_1751549649417.PNG" 
              alt="TŌKI mobile coffee cart with minimalist design" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
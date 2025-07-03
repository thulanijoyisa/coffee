import { Coffee, Leaf, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Simple static menu data
const menuItems = [
  {
    id: 1,
    name: "Espresso",
    description: "Clean, pure coffee intensity",
    price: "$3.50",
    category: "coffee"
  },
  {
    id: 2,
    name: "Americano",
    description: "Espresso with hot water",
    price: "$4.00",
    category: "coffee"
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: "$4.50",
    category: "coffee"
  },
  {
    id: 4,
    name: "Latte",
    description: "Espresso with steamed milk",
    price: "$5.00",
    category: "coffee"
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: "Premium ceremonial grade matcha",
    price: "$5.50",
    category: "specialty"
  },
  {
    id: 6,
    name: "Cold Brew",
    description: "12-hour cold-extracted coffee",
    price: "$4.50",
    category: "cold"
  }
];

const featuredItem = {
  id: 5,
  name: "Matcha Latte",
  description: "Premium ceremonial grade matcha with your choice of milk",
  price: "$5.50"
};

export default function SimpleMenu() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'coffee':
        return <Coffee className="text-wood-dark" size={20} />;
      case 'specialty':
        return <Leaf className="text-wood-dark" size={20} />;
      case 'cold':
        return <Snowflake className="text-wood-dark" size={20} />;
      default:
        return <Coffee className="text-wood-dark" size={20} />;
    }
  };

  return (
    <section id="menu" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-wood-dark mb-6">
            <Coffee size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">Menu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Your Daily Ritual,<br />
            <span className="text-wood-dark">Perfected</span>
          </h2>
          <p className="text-coffee-brown text-lg max-w-2xl mx-auto">
            At TŌKI, we don't overload the menu — we perfect it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <Card key={item.id} className="bg-cream shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-coffee-dark">{item.name}</h3>
                    <div className="animate-pulse-gentle">{getIcon(item.category)}</div>
                  </div>
                  <p className="text-coffee-brown mb-2">{item.description}</p>
                  <p className="text-wood-dark font-semibold">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <Card className="bg-cream shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 mb-4 h-40 flex items-center justify-center">
                  <svg viewBox="0 0 200 150" className="w-full h-full">
                    {/* Matcha latte cup */}
                    <ellipse cx="100" cy="130" rx="40" ry="8" fill="#D2691E" opacity="0.3" />
                    <rect x="75" y="90" width="50" height="40" fill="#FFF" stroke="#8B4513" strokeWidth="2" rx="4" />
                    <rect x="78" y="93" width="44" height="25" fill="#98FB98" rx="2" />
                    <rect x="78" y="118" width="44" height="9" fill="#FFF" rx="2" />
                    
                    {/* Handle */}
                    <path d="M125 100 Q140 100 140 115 Q140 130 125 130" stroke="#8B4513" strokeWidth="2" fill="none" />
                    
                    {/* Foam art */}
                    <ellipse cx="100" cy="100" rx="15" ry="8" fill="#F0FFF0" />
                    <path d="M90 100 Q100 95 110 100" stroke="#98FB98" strokeWidth="2" fill="none" />
                    
                    {/* Steam */}
                    <path d="M85 75 Q87 70 85 65" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M100 75 Q102 70 100 65" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                    <path d="M115 75 Q117 70 115 65" stroke="#E6E6FA" strokeWidth="2" fill="none" opacity="0.7" />
                    
                    {/* Background elements */}
                    <circle cx="50" cy="40" r="3" fill="#90EE90" opacity="0.5" />
                    <circle cx="150" cy="35" r="4" fill="#90EE90" opacity="0.5" />
                    <circle cx="160" cy="60" r="2" fill="#90EE90" opacity="0.5" />
                    
                    {/* TŌKI logo on cup */}
                    <text x="100" y="110" textAnchor="middle" fontSize="8" fill="#228B22" fontWeight="bold">TŌKI</text>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  Featured: {featuredItem.name}
                </h3>
                <p className="text-coffee-brown">{featuredItem.description}</p>
                <p className="text-wood-dark font-semibold mt-2">{featuredItem.price}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-wood-light">
              <CardContent className="p-6 text-coffee-dark">
                <h3 className="font-semibold mb-2">Milk Options</h3>
                <p className="text-sm">Oat • Almond • Dairy</p>
                <p className="text-sm font-semibold mt-2">No extra charge</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-coffee-brown text-lg font-medium">
            Minimal sugar. Maximum flavor. Always made fresh.
          </p>
        </div>
      </div>
    </section>
  );
}
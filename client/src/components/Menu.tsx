import { useQuery } from "@tanstack/react-query";
import { Coffee, Leaf, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import type { MenuItem } from "@shared/schema";

export default function Menu() {
  const { data: menuItems, isLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  const { data: featuredItems } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu/featured'],
  });

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

  if (isLoading) {
    return (
      <section id="menu" className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-coffee-dark mx-auto"></div>
            <p className="mt-4 text-coffee-brown">Loading menu...</p>
          </div>
        </div>
      </section>
    );
  }

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
            <span className="text-wood-dark">Upgraded</span>
          </h2>
          <p className="text-coffee-brown text-lg max-w-2xl mx-auto">
            At TŌKI, we don't overload the menu — we perfect it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {menuItems?.map((item) => (
              <Card key={item.id} className="bg-cream shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-coffee-dark">{item.name}</h3>
                    {getIcon(item.category)}
                  </div>
                  <p className="text-coffee-brown mb-2">{item.description}</p>
                  {item.price && (
                    <p className="text-wood-dark font-semibold">{formatPrice(item.price)}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            {featuredItems?.map((item) => (
              <Card key={item.id} className="bg-cream shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src="/assets/9E4F7D9C-6C3D-4BB3-9030-415B104A8C0B_1751549649417.PNG" 
                    alt="TŌKI matcha latte in branded cup" 
                    className="rounded-lg w-full h-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                    Featured: {item.name}
                  </h3>
                  <p className="text-coffee-brown">{item.description}</p>
                  {item.price && (
                    <p className="text-wood-dark font-semibold mt-2">{formatPrice(item.price)}</p>
                  )}
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-wood-light">
              <CardContent className="p-6 text-coffee-dark">
                <h3 className="font-semibold mb-2">Milk Options</h3>
                <p className="text-sm">Oat / Almond / Dairy options</p>
                <p className="text-sm font-semibold mt-2">No extra charge</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-coffee-brown text-lg font-medium">
            Minimal sugar. Max flavor. Always made fresh.
          </p>
        </div>
      </div>
    </section>
  );
}

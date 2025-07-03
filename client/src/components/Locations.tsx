import { useQuery } from "@tanstack/react-query";
import { MapPin, ShoppingBag, Building, Train, MapIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LocationFinder from "@/components/LocationFinder";
import type { Location } from "@shared/schema";

export default function Locations() {
  const { data: locations, isLoading } = useQuery<Location[]>({
    queryKey: ['/api/locations'],
  });

  const { data: stats } = useQuery<{
    locations: number;
    cities: number;
    menuItems: number;
    triviaQuestions: number;
    openingSoon: number;
  }>({
    queryKey: ['/api/stats'],
  });

  const getLocationIcon = (type: string) => {
    switch (type) {
      case 'storefront':
        return <Building className="text-wood-dark" size={48} />;
      case 'cart':
        return <ShoppingBag className="text-wood-dark" size={48} />;
      case 'kiosk':
        return <Train className="text-wood-dark" size={48} />;
      default:
        return <MapPin className="text-wood-dark" size={48} />;
    }
  };

  if (isLoading) {
    return (
      <section id="locations" className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-coffee-dark mx-auto"></div>
            <p className="mt-4 text-coffee-brown">Loading locations...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="locations" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-wood-dark mb-6">
            <MapPin size={20} />
            <span className="text-sm font-semibold uppercase tracking-wide">Locations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-dark mb-6">
            Micro Stores,<br />
            <span className="text-wood-dark">Maximum Vibes</span>
          </h2>
          <p className="text-coffee-brown text-lg max-w-2xl mx-auto">
            We keep our footprint small and our presence sharp.
          </p>
          <p className="text-coffee-brown max-w-2xl mx-auto mt-4">
            Each TŌKI spot is under 4m² — intentionally placed in:
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-cream shadow-lg text-center">
            <CardContent className="p-6">
              <ShoppingBag className="text-wood-dark mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-coffee-dark mb-2">Shopping Malls</h3>
              <p className="text-coffee-brown text-sm">High-traffic retail locations</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cream shadow-lg text-center">
            <CardContent className="p-6">
              <Building className="text-wood-dark mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-coffee-dark mb-2">Office Parks</h3>
              <p className="text-coffee-brown text-sm">Perfect for work breaks</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cream shadow-lg text-center">
            <CardContent className="p-6">
              <Train className="text-wood-dark mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-coffee-dark mb-2">Transit Hubs</h3>
              <p className="text-coffee-brown text-sm">Grab-and-go convenience</p>
            </CardContent>
          </Card>
          
          <Card className="bg-cream shadow-lg text-center">
            <CardContent className="p-6">
              <MapPin className="text-wood-dark mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-coffee-dark mb-2">Urban Corners</h3>
              <p className="text-coffee-brown text-sm">High-footfall areas</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-coffee-brown text-lg">
              Designed for grab-and-go. Built for hang-and-sip.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-cream">
                <CardContent className="p-4">
                  <img 
                    src="@assets/02313890-A899-409C-9E1A-67E4F7DCABC7_1751549649421.PNG" 
                    alt="TŌKI compact storefront with warm wood design" 
                    className="rounded-lg w-full h-auto mb-3"
                  />
                  <p className="text-sm text-coffee-brown">Compact Storefront</p>
                </CardContent>
              </Card>
              
              <Card className="bg-cream">
                <CardContent className="p-4">
                  <img 
                    src="@assets/A181DD42-3A4D-47C8-A48C-2073790984FD_1751549649423.PNG" 
                    alt="TŌKI mobile coffee cart with canopy" 
                    className="rounded-lg w-full h-auto mb-3"
                  />
                  <p className="text-sm text-coffee-brown">Mobile Cart</p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-coffee-dark text-cream px-8 py-4 rounded-lg font-semibold hover:bg-coffee-brown transition-colors duration-200 flex items-center">
              <MapIcon className="mr-2" size={20} />
              Find Your TŌKI
            </Button>
          </div>
          
          <LocationFinder locations={locations || []} stats={stats} />
        </div>
      </div>
    </section>
  );
}

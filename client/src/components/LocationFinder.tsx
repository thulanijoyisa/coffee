import { useState, useMemo } from "react";
import { Search, ChevronRight, MapPin, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { formatDistance, calculateDistance } from "@/lib/utils";
import type { Location } from "@shared/schema";

interface LocationFinderProps {
  locations: Location[];
  stats?: {
    locations: number;
    cities: number;
    menuItems: number;
    triviaQuestions: number;
    openingSoon: number;
  };
}

export default function LocationFinder({ locations, stats }: LocationFinderProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  // Mock user location for demo (Tokyo center)
  const mockUserLocation = { lat: 35.6762, lng: 139.6503 };

  const filteredLocations = useMemo(() => {
    if (!searchTerm) return locations;
    
    return locations.filter(location => 
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [locations, searchTerm]);

  const locationsWithDistance = useMemo(() => {
    const baseLocation = userLocation || mockUserLocation;
    
    return filteredLocations.map(location => ({
      ...location,
      distance: calculateDistance(
        baseLocation.lat,
        baseLocation.lng,
        parseFloat(location.latitude || "0"),
        parseFloat(location.longitude || "0")
      )
    })).sort((a, b) => a.distance - b.distance);
  }, [filteredLocations, userLocation]);

  const handleLocationSearch = (value: string) => {
    setSearchTerm(value);
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Fallback to mock location
          setUserLocation(mockUserLocation);
        }
      );
    } else {
      setUserLocation(mockUserLocation);
    }
  };

  return (
    <Card className="bg-cream shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-coffee-dark mb-6">Location Finder</h3>
        
        <div className="bg-warm-beige p-6 rounded-lg mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Search className="text-wood-dark" size={20} />
            <Input
              type="text"
              placeholder="Enter your location or search..."
              value={searchTerm}
              onChange={(e) => handleLocationSearch(e.target.value)}
              className="flex-1 bg-cream border-0 focus:ring-2 focus:ring-wood-dark"
            />
          </div>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {locationsWithDistance.slice(0, 5).map((location) => (
              <div
                key={location.id}
                className="flex items-center justify-between bg-cream p-3 rounded-lg hover:bg-wood-light/20 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="text-wood-dark" size={16} />
                  <div>
                    <p className="font-semibold text-coffee-dark">{location.name}</p>
                    <p className="text-sm text-coffee-brown">{formatDistance(location.distance)} away</p>
                    <p className="text-xs text-coffee-brown/70">{location.address}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Clock className="text-wood-dark" size={14} />
                    <span className="text-sm text-wood-dark">
                      {location.isOpen ? "Open" : "Closed"}
                    </span>
                  </div>
                  <ChevronRight className="text-wood-dark" size={16} />
                </div>
              </div>
            ))}
            
            {locationsWithDistance.length === 0 && (
              <div className="text-center py-8">
                <MapPin className="text-wood-dark mx-auto mb-2" size={32} />
                <p className="text-coffee-brown">No locations found matching your search</p>
              </div>
            )}
          </div>
        </div>
        
        {stats && (
          <div className="grid grid-cols-3 gap-4 text-center">
            <Card className="bg-wood-light">
              <CardContent className="p-3">
                <p className="text-2xl font-bold text-coffee-dark">{stats.locations}</p>
                <p className="text-sm text-coffee-brown">Locations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-wood-light">
              <CardContent className="p-3">
                <p className="text-2xl font-bold text-coffee-dark">{stats.cities}</p>
                <p className="text-sm text-coffee-brown">Cities</p>
              </CardContent>
            </Card>
            
            <Card className="bg-wood-light">
              <CardContent className="p-3">
                <p className="text-2xl font-bold text-coffee-dark">{stats.openingSoon}</p>
                <p className="text-sm text-coffee-brown">Opening Soon</p>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <button
            onClick={requestLocation}
            className="text-wood-dark hover:text-coffee-dark transition-colors text-sm"
          >
            📍 Use my current location
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

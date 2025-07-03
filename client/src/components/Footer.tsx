import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Coffee, Instagram, Trophy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscriptionMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/subscribe", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscriptionMutation.mutate(email);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-coffee-dark text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Coffee className="text-wood-light mr-2" size={24} />
              <span className="text-3xl font-bold">TŌKI</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Join the Movement.</h3>
            <p className="text-cream/80 mb-6">
              Sign up for exclusive drops, early access, and limited edition blends.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex space-x-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-cream/10 border-0 focus:ring-2 focus:ring-wood-light text-cream placeholder-cream/60"
                required
              />
              <Button
                type="submit"
                disabled={subscriptionMutation.isPending}
                className="bg-wood-light text-coffee-dark px-6 py-3 rounded-lg font-semibold hover:bg-wood-dark transition-colors duration-200"
              >
                {subscriptionMutation.isPending ? "..." : "Subscribe"}
              </Button>
            </form>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/80">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-wood-light transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-wood-light transition-colors duration-200"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rewards')}
                  className="hover:text-wood-light transition-colors duration-200"
                >
                  Rewards
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('locations')}
                  className="hover:text-wood-light transition-colors duration-200"
                >
                  Locations
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-cream/10 p-3 rounded-lg hover:bg-wood-light hover:text-coffee-dark transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-cream/10 p-3 rounded-lg hover:bg-wood-light hover:text-coffee-dark transition-colors duration-200"
              >
                <Trophy size={20} />
              </a>
              <a
                href="#"
                className="bg-cream/10 p-3 rounded-lg hover:bg-wood-light hover:text-coffee-dark transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-cream/60 text-sm mt-4">
              📲 Instagram | 🏆 Trivia Leaderboard
            </p>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream/60 text-sm">
              © 2024 TŌKI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-cream/60 hover:text-wood-light text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-wood-light text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-wood-light text-sm transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

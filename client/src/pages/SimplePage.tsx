import SimpleNavigation from "@/components/SimpleNavigation";
import SimpleHero from "@/components/SimpleHero";
import About from "@/components/About";
import SimpleMenu from "@/components/SimpleMenu";
import SimpleContact from "@/components/SimpleContact";
import SimpleFooter from "@/components/SimpleFooter";

export default function SimplePage() {
  return (
    <div className="min-h-screen gradient-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--coffee-brown)) 1px, transparent 1px),
                         radial-gradient(circle at 80% 50%, hsl(var(--coffee-brown)) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }}></div>
      
      <div className="relative z-10">
        <SimpleNavigation />
        <SimpleHero />
        <About />
        <SimpleMenu />
        <SimpleContact />
        <SimpleFooter />
      </div>
    </div>
  );
}
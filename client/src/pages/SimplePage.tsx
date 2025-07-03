import SimpleNavigation from "@/components/SimpleNavigation";
import SimpleHero from "@/components/SimpleHero";
import About from "@/components/About";
import SimpleMenu from "@/components/SimpleMenu";
import SimpleContact from "@/components/SimpleContact";
import SimpleFooter from "@/components/SimpleFooter";

export default function SimplePage() {
  return (
    <div className="min-h-screen bg-cream">
      <SimpleNavigation />
      <SimpleHero />
      <About />
      <SimpleMenu />
      <SimpleContact />
      <SimpleFooter />
    </div>
  );
}
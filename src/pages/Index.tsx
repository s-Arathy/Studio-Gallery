import HeroSection from "@/components/HeroSection";
import GalleryWall from "@/components/GalleryWall";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen relative">
      {/* Hero / Museum entrance */}
      <HeroSection />

      {/* Gallery wall with horizontal scrolling */}
      <GalleryWall />

      {/* About section */}
      <AboutSection />

      {/* Experience timeline */}
      <ExperienceSection />

      {/* Contact / Footer */}
      <ContactSection />
    </div>
  );
};

export default Index;

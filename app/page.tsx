import { Hero } from "@/components/hero/hero";
import { Navigation } from "@/components/navigation/navigation";
import { SelectedWork } from "@/components/projects/selected-work";
import { BuildProcess } from "@/components/about/build-process";
import { AboutSection } from "@/components/about/about-section";
import { TechnologiesSection } from "@/components/technologies/technologies-section";
import { OtherWork } from "@/components/projects/other-work";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main id="top">
      <Navigation />
      <Hero />
      <SelectedWork />
      <BuildProcess />
      <AboutSection />
      <TechnologiesSection />
      <OtherWork />
      <ContactSection />
      <Footer />
    </main>
  );
}

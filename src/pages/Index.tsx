import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import PracticeAreas from "@/components/PracticeAreas";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ValueProps />
      <PracticeAreas />
      <AboutSection />
      <Testimonials />
      <ProcessSection />
      <ContactForm />
      <FaqSection />
      <FinalCta />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsBand } from "@/components/site/StatsBand";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { Partners } from "@/components/site/Partners";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBand />
      <About />
      <Services />
      <Gallery />
      <Process />
      <Partners />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;

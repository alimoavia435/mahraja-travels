import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Plane } from "lucide-react";
import sky from "@/assets/hero-sky.jpg";

const WHATSAPP = "447000000000";

export const CTABanner = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden shadow-elevated grain">
          <img
            src={sky}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-110"
            loading="lazy"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />

          {/* Decorative plane */}
          <Plane className="absolute top-10 right-10 h-32 w-32 text-white/10 -rotate-12" strokeWidth={1} />

          <div className="relative p-10 md:p-16 lg:p-20 text-primary-foreground max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-glow animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold">Limited Availability</span>
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-balance">
              Ready to take off? <span className="text-gradient italic font-light">Let's plan your trip.</span>
            </h2>
            <p className="mt-6 text-primary-foreground/85 text-lg leading-relaxed max-w-xl">
              Speak with one of our travel specialists today and discover offers tailored to your dream destination.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <a href="#contact">
                  Start Planning <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

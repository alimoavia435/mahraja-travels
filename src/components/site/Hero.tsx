import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Star, Globe2, ShieldCheck } from "lucide-react";
import heroSky from "@/assets/hero-sky.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      <img
        src={heroSky}
        alt="View from an airplane window over clouds at sunset"
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Floating decorative orbs */}
      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container-px mx-auto max-w-7xl pt-32 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass text-white/95 text-sm font-medium mb-8 animate-fade-in-down">
              <span className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </span>
              <span className="font-semibold">
                Trusted by 5,000+ travellers worldwide
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[0.98] text-balance animate-fade-in">
              Where Will Your
              <span className="block mt-2">
                <span className="text-gradient italic font-light">Journey</span>{" "}
                Take You?
              </span>
            </h1>

            <p
              className="mt-8 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-in font-light"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Maharaja Travels crafts seamless international
              experiences — premium flights, expert visa support and bespoke
              tours, designed around you.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s", opacity: 0 }}
            >
              <Button asChild variant="hero" size="xl" className="group">
                <a href="#contact">
                  Plan Your Journey
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <a href="#gallery">Explore Destinations</a>
              </Button>
            </div>

            {/* Trust badges */}
            <div
              className="mt-12 flex flex-wrap items-center gap-6 text-white/80 animate-fade-in"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              {[
                { icon: ShieldCheck, label: "ATOL Protected" },
                { icon: Globe2, label: "50+ Destinations" },
                { icon: Plane, label: "All Major Airlines" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm">
                  <b.icon className="h-4 w-4 text-accent" />
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating stat card */}
          <div
            className="lg:col-span-4 hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-3xl" />
              <div className="relative glass rounded-3xl p-7 text-white space-y-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest text-white/70">
                    Live now
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52,211,153)]" />
                </div>
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">
                    Popular Route
                  </div>
                  <div className="font-display text-2xl font-bold mt-1">
                    London → Dubai
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    Direct • 7h 15m
                  </div>
                </div>
                <div className="h-px bg-white/15" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-white/60">Starting from</div>
                    <div className="font-display text-3xl font-bold text-accent-glow">
                      £389
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Available</div>
                    <div className="font-display text-3xl font-bold">
                      24<span className="text-lg text-white/60">/day</span>
                    </div>
                  </div>
                </div>
                <Button asChild variant="hero" size="sm" className="w-full">
                  <a href="#contact">
                    Inquire Now <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          {[
            { n: "10+", l: "Years of Excellence" },
            { n: "5,000+", l: "Happy Travellers" },
            { n: "50+", l: "Global Destinations" },
            { n: "98%", l: "Satisfaction Rate" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5 text-white">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                {s.n}
              </div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

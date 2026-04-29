import { MessageSquare, Calendar, Plane, Smile } from "lucide-react";

const steps = [
  { icon: MessageSquare, n: "01", title: "Get in Touch", desc: "Reach out via WhatsApp, phone or our inquiry form. Tell us your dream destination." },
  { icon: Calendar, n: "02", title: "Plan Together", desc: "Our experts craft a personalised itinerary with flights, hotels and experiences." },
  { icon: Plane, n: "03", title: "Book & Prepare", desc: "We handle bookings, visas and documentation. You just pack your bags." },
  { icon: Smile, n: "04", title: "Travel & Enjoy", desc: "Set off with full 24/7 support. Make memories that last a lifetime." },
];

export const Process = () => {
  return (
    <section className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20">
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">How It Works</span>
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] text-balance">
            Your journey, in <span className="italic text-accent font-light">four simple steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/40 transition-colors duration-500" />
                    <div className="relative h-24 w-24 rounded-full bg-card border border-border/60 shadow-card grid place-items-center group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                      <s.icon className="h-9 w-9 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -top-1 -right-1 h-9 w-9 rounded-full bg-gradient-navy text-primary-foreground grid place-items-center font-display font-bold text-sm shadow-soft">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

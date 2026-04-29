import { Plane, FileCheck, MessageCircle, Map, ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    desc: "UK & international flights from leading airlines at competitive fares.",
    features: ["All major airlines", "Best price guarantee", "Flexible dates"],
    accent: "from-sky-500 to-blue-600",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    desc: "End-to-end visa guidance, documentation and application processing.",
    features: ["Document review", "Application support", "Fast-track service"],
    accent: "from-amber-400 to-orange-500",
  },
  {
    icon: MessageCircle,
    title: "Travel Consultation",
    desc: "Personalised expert advice for the right journey for your goals.",
    features: ["Free first consult", "Tailored itineraries", "Budget planning"],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    icon: Map,
    title: "Tour Planning",
    desc: "Bespoke itineraries, accommodation, transfers and curated experiences.",
    features: ["Hotel bookings", "Local experiences", "Transfers included"],
    accent: "from-violet-500 to-indigo-600",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 md:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-y-1/2" />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-semibold text-xs uppercase tracking-widest">What We Offer</span>
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] text-balance">
            Premium services, <span className="italic text-accent font-light">end-to-end</span>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Everything you need to plan, book and enjoy a seamless international journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-7 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="absolute top-5 right-5 h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </div>

              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${s.accent} text-white grid place-items-center shadow-card group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <s.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>

              <ul className="mt-5 space-y-2 pt-5 border-t border-border/60">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-foreground/70">
                    <Check className="h-3.5 w-3.5 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Award, Users, Globe2, Headphones } from "lucide-react";

const stats = [
  { icon: Users, n: "5K+", l: "Happy Travellers", desc: "and counting" },
  { icon: Globe2, n: "50+", l: "Destinations", desc: "across 6 continents" },
  { icon: Award, n: "10+", l: "Years Experience", desc: "of trusted service" },
  { icon: Headphones, n: "24/7", l: "Support", desc: "whenever you need" },
];

export const StatsBand = () => {
  return (
    <section className="relative -mt-16 z-20 container-px mx-auto max-w-7xl">
      <div className="bg-card rounded-3xl shadow-elevated border border-border/40 p-8 md:p-10 grain relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-radial" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {stats.map((s, i) => (
            <div key={s.l} className={`flex items-center gap-4 ${i > 0 ? "lg:border-l lg:border-border lg:pl-6" : ""}`}>
              <div className="shrink-0 h-14 w-14 rounded-2xl bg-gradient-ocean text-white grid place-items-center shadow-soft">
                <s.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary leading-none">{s.n}</div>
                <div className="text-sm font-semibold text-foreground/80 mt-1">{s.l}</div>
                <div className="text-xs text-muted-foreground">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

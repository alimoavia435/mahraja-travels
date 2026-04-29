import {
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Sparkles,
  Award,
} from "lucide-react";
import aboutImg from "@/assets/about.jpg";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    desc: "Over a decade of dependable, transparent travel expertise.",
  },
  {
    icon: Globe2,
    title: "Global Destinations",
    desc: "From the UK to every corner of the world — we cover it all.",
  },
  {
    icon: CheckCircle2,
    title: "Customer Satisfaction",
    desc: "Thousands of delighted travellers and counting.",
  },
  {
    icon: Sparkles,
    title: "Smooth Experience",
    desc: "Stress-free planning, booking and end-to-end support.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="py-28 md:py-36 bg-gradient-soft relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-gold/5 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            {/* Decorative grid */}
            <div className="absolute -top-8 -left-8 grid grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-accent" />
              ))}
            </div>

            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={aboutImg}
                  alt="Travel consultant at a modern airport terminal"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
                  width={1200}
                  height={1200}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Floating award card */}
              <div className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-elevated p-5 hidden md:flex items-center gap-3 max-w-[260px] border border-border/40">
                <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">
                    Award Winning
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Excellence in service 2024
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-card rounded-2xl shadow-elevated p-6 hidden md:block max-w-[240px] border border-border/40">
                <div className="flex items-baseline gap-1">
                  <div className="font-display text-5xl font-bold text-primary">
                    98
                  </div>
                  <div className="font-display text-2xl font-bold text-accent">
                    %
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Client satisfaction across all bookings
                </div>
                <div className="mt-3 flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full bg-gradient-ocean ring-2 ring-card"
                    />
                  ))}
                  <div className="h-7 w-7 rounded-full bg-accent-soft text-accent text-xs font-bold grid place-items-center ring-2 ring-card">
                    +5K
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] text-balance">
              Crafting{" "}
              <span className="italic text-accent font-light">
                unforgettable
              </span>{" "}
              journeys, one traveller at a time.
            </h2>
            <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
              At Mahraja Travelling Agency, we combine years of expertise with a
              deep love for travel. From the United Kingdom to destinations
              across Europe, Asia and beyond, we make international travel
              simple, safe and inspiring.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="group relative flex gap-4 p-5 rounded-2xl bg-card border border-border/40 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/30"
                >
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-accent-soft text-accent grid place-items-center group-hover:bg-gradient-ocean group-hover:text-white transition-all duration-500">
                    <h.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="font-bold text-primary">{h.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {h.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const reviews = [
  {
    name: "Rajesh Patel",
    role: "London, UK",
    avatar: a1,
    text: "Maharaj made our family trip to Switzerland absolutely seamless. From flights to visas to hotels — every detail was handled with care. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Manchester, UK",
    avatar: a2,
    text: "The team's knowledge of international destinations is unmatched. They planned a beautiful Greek island tour for us and the experience was truly premium.",
  },
  {
    name: "James Mitchell",
    role: "Birmingham, UK",
    avatar: a3,
    text: "Professional, responsive and trustworthy. Maharaj Travelling has become our go-to agency for every international trip. Five stars without hesitation.",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
            Loved by travellers worldwide
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-elevated p-8 md:p-14 border border-border/60 overflow-hidden">
            <Quote className="absolute top-8 right-8 h-20 w-20 text-accent/10" />
            <div className="relative">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl text-primary leading-snug text-balance">
                "{reviews[i].text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={reviews[i].avatar}
                  alt={reviews[i].name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-accent/30"
                  loading="lazy"
                  width={56}
                  height={56}
                />
                <div>
                  <div className="font-semibold text-primary">{reviews[i].name}</div>
                  <div className="text-sm text-muted-foreground">{reviews[i].role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
              className="h-11 w-11 rounded-full bg-card border border-border shadow-soft hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all grid place-items-center"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Review ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "bg-accent w-8" : "bg-border w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % reviews.length)}
              className="h-11 w-11 rounded-full bg-card border border-border shadow-soft hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all grid place-items-center"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

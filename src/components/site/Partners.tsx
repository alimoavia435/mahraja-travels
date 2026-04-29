const partners = [
  "British Airways", "Emirates", "Qatar Airways", "Lufthansa",
  "Singapore Airlines", "Air India", "Virgin Atlantic", "Etihad",
  "Turkish Airlines", "KLM", "Cathay Pacific", "Saudia",
];

export const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="text-center mb-10">
          <div className="text-accent-glow font-semibold text-xs uppercase tracking-widest">Our Airline Partners</div>
          <p className="mt-2 text-primary-foreground/80 font-display text-2xl md:text-3xl">
            Booking with the world's leading carriers
          </p>
        </div>

        <div className="relative overflow-hidden mask-fade">
          <div className="flex marquee gap-12 w-max">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="font-display text-2xl md:text-3xl font-semibold text-primary-foreground/60 hover:text-accent-glow transition-colors whitespace-nowrap tracking-wide"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

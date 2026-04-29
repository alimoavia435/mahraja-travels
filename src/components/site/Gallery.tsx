import { useState } from "react";
import london from "@/assets/gallery-london.jpg";
import paris from "@/assets/gallery-paris.jpg";
import swiss from "@/assets/gallery-swiss.jpg";
import santorini from "@/assets/gallery-santorini.jpg";
import dubai from "@/assets/gallery-dubai.jpg";
import airport from "@/assets/gallery-airport.jpg";
import singapore from "@/assets/gallery-singapore.jpg";
import maldives from "@/assets/gallery-maldives.jpg";
import newyork from "@/assets/gallery-newyork.jpg";
import { MapPin, Camera, Heart, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

const items = [
  { img: london, place: "London", country: "United Kingdom", trips: "120+ trips", span: "lg:col-span-2 lg:row-span-2" },
  { img: paris, place: "Paris", country: "France", trips: "85 trips" },
  { img: swiss, place: "Swiss Alps", country: "Switzerland", trips: "62 trips" },
  { img: santorini, place: "Santorini", country: "Greece", trips: "40 trips", span: "lg:col-span-2" },
  { img: maldives, place: "Maldives", country: "Indian Ocean", trips: "55 trips" },
  { img: dubai, place: "Dubai", country: "UAE", trips: "95 trips" },
  { img: airport, place: "Departures", country: "Heathrow, UK", trips: "Daily" },
  { img: newyork, place: "New York", country: "USA", trips: "70 trips" },
  { img: singapore, place: "Singapore", country: "Singapore", trips: "45 trips" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof items)[0] | null>(null);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-gradient-soft relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20">
              <Camera className="h-3.5 w-3.5 text-accent" />
              <span className="text-accent font-semibold text-xs uppercase tracking-widest">Tour History</span>
            </div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.05] text-balance">
              Our Travel <span className="italic text-accent font-light">Experiences</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A glimpse of the destinations we've shared with our clients — real journeys, real memories, across the globe.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          <Dialog>
            {items.map((it, i) => (
              <DialogTrigger asChild key={i}>
                <div
                  className={`group relative rounded-2xl overflow-hidden shadow-card cursor-pointer ${it.span ?? ""}`}
                  onClick={() => setSelectedImage(it)}
                >
                  <img
                    src={it.img}
                    alt={`${it.place}, ${it.country}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    width={900}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Heart icon top right */}
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <Heart className="h-4 w-4 text-white" />
                  </div>

                  {/* Trip count badge */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full glass text-white text-[10px] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {it.trips}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-1.5 text-accent-glow text-xs font-medium uppercase tracking-wider">
                      <MapPin className="h-3 w-3" />
                      {it.country}
                    </div>
                    <div className="font-display text-2xl md:text-3xl font-bold mt-1">{it.place}</div>
                    <div className="h-px w-0 group-hover:w-12 bg-accent-glow mt-3 transition-all duration-500" />
                  </div>
                </div>
              </DialogTrigger>
            ))}

            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none flex flex-col items-center justify-center">
              <DialogTitle className="sr-only">
                {selectedImage ? `${selectedImage.place}, ${selectedImage.country}` : "Gallery Image"}
              </DialogTitle>
              {selectedImage && (
                <div className="relative group w-fit h-fit animate-in fade-in zoom-in duration-300">
                  <img
                    src={selectedImage.img}
                    alt={`${selectedImage.place}, ${selectedImage.country}`}
                    className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/10"
                  />
                  
                  <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-between px-4 py-3 glass rounded-2xl border border-white/10 text-white animate-in slide-in-from-bottom-4 duration-500 delay-150">
                    <div>
                      <div className="font-display text-xl font-bold">{selectedImage.place}</div>
                      <div className="text-xs text-accent-glow flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {selectedImage.country}
                      </div>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-white/10 text-[10px] font-semibold uppercase tracking-wider border border-white/10">
                      {selectedImage.trips}
                    </div>
                  </div>

                  <DialogClose className="absolute -top-12 right-0 h-10 w-10 rounded-full glass border border-white/10 grid place-items-center text-white hover:bg-white/20 transition-colors focus:outline-none">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};


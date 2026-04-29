import {
  Plane,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-full bg-accent grid place-items-center">
                <Plane className="h-5 w-5 -rotate-45" />
              </span>
              <span className="font-display text-xl font-bold">
                Mahraja Travelling
              </span>
            </div>
            <p className="mt-5 text-primary-foreground/70 max-w-md leading-relaxed">
              Your trusted partner for international travel. Premium flight
              booking, visa assistance and bespoke tour planning across the UK
              and worldwide.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent grid place-items-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {[
                { l: "About", h: "#about" },
                { l: "Services", h: "#services" },
                { l: "Gallery", h: "#gallery" },
                { l: "Reviews", h: "#testimonials" },
                { l: "Contact", h: "#contact" },
              ].map((l) => (
                <li key={l.l}>
                  <a href={l.h} className="hover:text-accent transition-colors">
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>+44 7000 000000</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>info@Mahrajatravelling.co.uk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>London, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-primary-foreground/60">
          <div>
            © {new Date().getFullYear()} Mahraja Travelling Agency. All rights
            reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

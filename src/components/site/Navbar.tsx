import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-lg shadow-soft border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span
            className={cn(
              "h-10 w-10 rounded-full grid place-items-center transition-colors",
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white/15 backdrop-blur text-white",
            )}
          >
            <Plane className="h-5 w-5 -rotate-45" />
          </span>
          <span
            className={cn(
              "font-display text-lg font-bold tracking-tight transition-colors",
              scrolled ? "text-primary" : "text-white",
            )}
          >
            Mahraja <span className="font-normal opacity-80">Travelling</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/90 hover:text-white",
              )}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="sm">
            <a href="#contact">Plan Your Trip</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scrolled ? "text-primary" : "text-white",
          )}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-card animate-fade-in-down">
          <div className="container-px py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary text-base font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>
                Plan Your Trip
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

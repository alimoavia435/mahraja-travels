import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP = "447000000000"; // placeholder
const PHONE_DISPLAY = "+44 7000 000000";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please add your name and phone number.");
      return;
    }
    const text = encodeURIComponent(
      `Hello Mahraja Travelling,\n\nName: ${form.name}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    toast.success("Opening WhatsApp — we'll reply shortly!");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-primary leading-tight text-balance">
                Start Your Journey Today
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Tell us where you'd like to go. Our travel experts will get back
                to you within hours with the best options tailored to your trip.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Call us",
                  value: PHONE_DISPLAY,
                  href: `tel:${PHONE_DISPLAY.replace(/\s/g, "")}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@Mahrajatravelling.co.uk",
                  href: "mailto:info@Mahrajatravelling.co.uk",
                },
                {
                  icon: MapPin,
                  label: "Visit us",
                  value: "London, United Kingdom",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 p-5 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-lg bg-accent-soft text-accent grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="font-semibold text-primary">{c.value}</div>
                  </div>
                </a>
              ))}

              <Button
                asChild
                variant="whatsapp"
                size="xl"
                className="w-full mt-2"
              >
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Mahraja Travelling, I'd like to plan a trip.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-border/60"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6">
              Send us a message
            </h3>
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Full Name
                </label>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Phone Number
                </label>
                <Input
                  placeholder="+44 ..."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your travel plans..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                />
              </div>
              <Button type="submit" variant="navy" size="lg" className="w-full">
                <Send className="h-4 w-4" />
                Send Inquiry
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Submitting opens WhatsApp with your details pre-filled.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

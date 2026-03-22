import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactInfo } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Hubungi <span className="gradient-text">Kami</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-center mb-14 text-sm md:text-base">
            Kami siap membantu kebutuhan infrastruktur IT Anda
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="glass-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm">Alamat Kantor</h3>
                  {contactInfo.address.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm">Telepon</h3>
                  {contactInfo.phone.map((p) => (
                    <a key={p.label} href={p.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="glass-card p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm">Jam Operasional</h3>
                  <p className="text-sm text-muted-foreground">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="glass-card overflow-hidden h-full min-h-[400px]">
              <iframe
                src={contactInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Mentarisatria"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

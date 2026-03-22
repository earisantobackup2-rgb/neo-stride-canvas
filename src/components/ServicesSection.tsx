import { Server, Network, Monitor, Settings, Wifi } from "lucide-react";
import { services } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ElementType> = { Server, Network, Monitor, Settings, Wifi };

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Layanan Infrastruktur IT <span className="gradient-text">Profesional</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-sm md:text-base">
            Solusi lengkap jasa server dan network enterprise untuk mendukung transformasi digital bisnis Anda
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="glass-card p-7 group hover:scale-[1.02] transition-transform duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:animate-pulse-neon transition-shadow duration-300">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

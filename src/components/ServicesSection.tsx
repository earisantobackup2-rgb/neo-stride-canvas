import { Server, Network, Monitor, Settings, Wifi } from "lucide-react";
import { services } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

import serviceServer from "@/assets/service-server.jpg";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceDevices from "@/assets/service-devices.jpg";
import serviceManaged from "@/assets/service-managed.jpg";
import serviceIsp from "@/assets/service-isp.jpg";

const iconMap: Record<string, React.ElementType> = { Server, Network, Monitor, Settings, Wifi };
const imageMap: Record<string, string> = {
  Server: serviceServer,
  Network: serviceNetwork,
  Monitor: serviceDevices,
  Settings: serviceManaged,
  Wifi: serviceIsp,
};

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
            const img = imageMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <div className="glass-card group hover:scale-[1.02] transition-transform duration-300 h-full overflow-hidden rounded-xl">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <Icon className="text-primary" size={20} />
                    </div>
                  </div>
                  <div className="p-5 pt-3">
                    <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
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

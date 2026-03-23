import { Users, Shield, Award } from "lucide-react";
import { aboutFeatures } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ElementType> = { Users, Shield, Award };

const AboutSection = () => {
  return (
    <section id="about" className="section-padding gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Tentang <span className="gradient-text">Kami</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-6 text-sm md:text-base" style={{ textWrap: "pretty" }}>
            PT Sekawan Global Komunika adalah perusahaan IT Indonesia terkemuka yang bergerak di bidang Internet Service Provider, Project Infrastruktur IT dengan pengalaman lebih dari dua dekade melayani berbagai sektor industri.
          </p>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 text-sm md:text-base" style={{ textWrap: "pretty" }}>
            Kami mengkhususkan diri dalam penyediaan solusi jasa infrastruktur IT lengkap meliputi Server, Network, Router, Data Center, Pengadaan Perangkat IT, Managed Service, serta layanan Internet Service Provider (ISP) untuk perusahaan, instansi pemerintah, institusi pendidikan, dan korporasi lokal maupun nasional.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center group hover:scale-[1.02] transition-transform duration-300">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:neon-glow transition-shadow duration-300">
                    <Icon className="text-sky-400" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

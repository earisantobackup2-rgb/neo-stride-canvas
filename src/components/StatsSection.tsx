import { stats, contactInfo } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const StatsSection = () => {
  return (
    <section id="clients" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Dipercaya oleh <span className="gradient-text">Ratusan Perusahaan</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 text-sm md:text-base" style={{ textWrap: "pretty" }}>
            Kami telah melayani berbagai sektor industri termasuk korporasi swasta, instansi pemerintah, lembaga pendidikan, dan organisasi nasional dengan solusi jasa infrastruktur IT terbaik
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card p-10 md:p-14 text-center neon-glow">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Transformasi Infrastruktur IT Perusahaan Anda?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base">
              Konsultasikan kebutuhan jasa server dan network, data center, managed service, dan Internet Service Provider dengan tim ahli kami sekarang
            </p>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              Hubungi Kami Sekarang
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StatsSection;

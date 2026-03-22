import { partners } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const PartnersSection = () => {
  return (
    <section className="section-padding-sm gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Technology <span className="gradient-text">Partners</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="glass-card p-4 flex items-center justify-center h-20 hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PartnersSection;

import { Calculator, Wifi, Cable, Globe, Search, Monitor, Radar, ShieldCheck, HardDrive } from "lucide-react";
import { tools } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Calculator, Wifi, Cable, Globe, Search, Monitor, Radar, ShieldCheck, HardDrive,
};

const ToolsSection = () => {
  return (
    <section id="tools" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            <span className="gradient-text">Network</span> Tools
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-sm md:text-base">
            Professional IT utilities at your fingertips
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {tools.map((tool, i) => {
            const Icon = iconMap[tool.icon];
            return (
              <ScrollReveal key={tool.title} delay={i * 0.06}>
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 flex flex-col items-center text-center group hover:scale-[1.04] active:scale-[0.97] transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:shadow-[0_0_20px_hsla(233,90%,50%,0.3)] transition-all duration-300">
                    <Icon className="text-[#38b5e6]" size={26} />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{tool.description}</p>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Hover over any tool to learn more
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ToolsSection;

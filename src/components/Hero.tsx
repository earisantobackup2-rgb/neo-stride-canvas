import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleField from "./ParticleField";
import { contactInfo } from "@/data/content";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-[-15%] z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlay - #101fa3 blue to purple */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#101fa3]/80 via-[#101fa3]/60 to-background" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#101fa3]/40 via-transparent to-secondary/30 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />

      {/* Particle starfield */}
      <ParticleField />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }} />

      {/* Floating glow elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] z-[1]"
        animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/15 blur-[80px] z-[1]"
        animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Content */}
      <motion.div className="relative z-10 container mx-auto px-4 text-center max-w-4xl" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 neon-text"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ lineHeight: 1.1 }}
        >
          Solusi Infrastruktur IT, Server, Internet & Network Terpercaya
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ textWrap: "pretty" }}
        >
          PT Sekawan Global Komunika - Perusahaan IT Indonesia yang menghadirkan layanan jasa infrastruktur IT, Pengadaan Server/Part dan Networking, Data Center, dan Internet Service Provider untuk korporasi anda
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200 neon-glow"
          >
            Konsultasi Gratis
          </a>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg glass-card text-foreground font-medium text-sm hover:bg-glass/80 active:scale-[0.97] transition-all duration-200"
          >
            <MessageCircle size={18} />
            Hubungi Kami
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

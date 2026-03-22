import { events } from "@/data/content";
import ScrollReveal from "./ScrollReveal";

const EventsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Event & <span className="gradient-text">Kegiatan</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {events.map((event, i) => (
            <ScrollReveal key={event.title} delay={i * 0.1}>
              <div className="glass-card overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

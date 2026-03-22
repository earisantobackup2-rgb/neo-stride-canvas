import { contactInfo, navLinks } from "@/data/content";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="https://mentarisatria.net.id/img/logo.png" alt="Logo" className="h-8 w-auto" />
              <span className="font-display text-lg font-bold gradient-text">Mentarisatria</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PT Sekawan Global Komunika - Solusi infrastruktur IT terpercaya untuk korporasi Indonesia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Kontak</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{contactInfo.address[0]}</p>
              <p>{contactInfo.address[2]}</p>
              <a href={`mailto:${contactInfo.email}`} className="block hover:text-primary transition-colors">{contactInfo.email}</a>
              <a href={contactInfo.phone[0].href} className="block hover:text-primary transition-colors">{contactInfo.phone[0].label}</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PT Sekawan Global Komunika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

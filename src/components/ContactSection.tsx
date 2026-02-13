import resumePdf from "@/assets/resume.pdf";

const ContactSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-24 relative">
      <div className="text-center max-w-lg">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em] mb-4">
          — Get in Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let's Create Together
        </h2>
        <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-10">
          Whether you have a project in mind or just want to say hello, 
          my inbox is always open.
          <br />
          Phone No: 9567283578
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {[
            { label: "Email", href: "mailto:arathysppy.2004@gmail.com" },
            { label: "GitHub", href: "https://github.com/s-Arathy" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/arathy-s-a81796261/" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Download resume — exhibition catalogue style */}
        <div className="mb-12">
          <a
            href={resumePdf}
            download="resume_arathy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground border border-foreground/40 px-4 py-2.5 hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            <span aria-hidden>↓</span>
            Exhibition catalogue [RESUME]
            <span className="text-muted-foreground text-xs font-normal">(PDF)</span>
          </a>
        </div>

        {/* Museum closing note */}
        <div className="border-t border-foreground/20 pt-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Designed & built with love
          </p>
          <p className="font-mono text-[10px] text-muted-foreground/50 mt-2 uppercase tracking-widest">
            Thank you for visiting the gallery
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

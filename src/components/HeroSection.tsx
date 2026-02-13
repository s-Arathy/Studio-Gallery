import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Ticket / Museum entry */}
        <div className="inline-block border-2 border-foreground p-8 md:p-16 relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-foreground -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-foreground translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-foreground -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-foreground translate-x-2 translate-y-2" />

          <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.5em] mb-6">
            Welcome to the gallery of
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-tight">
            Arathy S
          </h1>

          <div className="w-16 h-px bg-foreground mx-auto my-6" />

          <p className="font-mono text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Artist & Developer — crafting digital experiences at the intersection of code and creativity
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 font-mono text-xs text-muted-foreground">
            <span className="uppercase tracking-widest">Est. 2020</span>
            <span>·</span>
            <span className="uppercase tracking-widest">Open Daily</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <p className="font-mono text-xs text-muted-foreground">scroll to enter</p>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            className="text-foreground"
          >
            <path
              d="M8 0 L8 20 M2 14 L8 20 L14 14"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

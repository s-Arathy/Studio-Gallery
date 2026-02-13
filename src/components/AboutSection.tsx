import profileImg from "@/assets/Profile.png";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-px h-1/2 bg-foreground/10" />

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Text */}
        <div>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em] mb-4">
            — About the Artist
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
            The Person Behind the Pixels
          </h2>
          <div className="space-y-4 text-muted-foreground font-mono text-sm leading-relaxed">
            
            <p>
            Hi,I’m Arathy S and to tell you about myself— well, I’d like to use the common buzzwords and say that I’m a ‘passionate’, ‘aspiring’ software developer, but that just seems unlike me. 
            I’m more of a ‘do things that feel right and figure the rest out later’ kind of person.
            </p>
            <p>
            I enjoy exploring tech not because I have to, but because I genuinely find it fun and satisfying when something finally works after hours of errors. 
            I code like I craft— curiously, imperfectly, and always with a bit of music in the background.  
            </p>
            <p>
            Outside of all the digital noise, I’m someone who finds joy in little things— drawing doodles that probably only make sense to me, hoarding craft supplies I may or may not use.
            I like to think I’m learning, evolving, and making my own weird little path—and maybe that’s enough for now.
            </p>
          </div>
        </div>

        {/* Right - Skills / Info card */}
        <div className="space-y-6 max-h-[70vh] flex flex-col">
          {/* Portrait placeholder */}
          <div className="border-2 border-foreground p-2">
            <div className="border border-foreground/50 p-1">
              <div className="aspect-[3/4] max-h-80 w-full bg-secondary/50 relative overflow-hidden">
                <img
                  src={profileImg}
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Skills — each tag has its own colourful hover */}
          <div className="border-2 border-foreground p-4 flex-1">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "React", hoverClass: "skill-tag-react" },
                { name: "Python", hoverClass: "skill-tag-typescript" },
                { name: "Java", hoverClass: "skill-tag-illustration" },
                { name: "C", hoverClass: "skill-tag-figma" },
                { name: "PostgreSQL", hoverClass: "skill-tag-creative-coding" },
                { name: "Flutter", hoverClass: "skill-tag-animation" },
                { name: "Pytorch", hoverClass: "skill-tag-ui-ux" },
                { name: "MongoDB", hoverClass: "skill-tag-illustration" },
                { name: "Git & GitHub", hoverClass: "skill-tag-p5js" },
                { name: "MySQL", hoverClass: "skill-tag-react" },
                { name: "Team-player", hoverClass: "skill-tag-typescript" },
                { name: "Program Coordination", hoverClass: "skill-tag-illustration" },
                { name: "Documentation", hoverClass: "skill-tag-figma" },
                { name: "Problem Solving", hoverClass: "skill-tag-creative-coding" },
              ].map(({ name, hoverClass }) => (
                <span
                  key={name}
                  className={`border border-foreground px-3 py-1 font-mono text-xs text-foreground transition-colors cursor-default ${hoverClass}`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

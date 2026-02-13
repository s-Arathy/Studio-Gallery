import { useMemo } from "react";

const experiences = [
  {
    year: "2026",
    title: "SDE Intern",
    place: "InnovinLabs",
    notes: "Jan 2026 - Present: Working on a project to develop an AI SEO for an client",
  },
  {
    year: "2025",
    title: "SDE Intern",
    place: "IITM Pravartak Technologies",
    notes: "Jul 2025 - Dec 2025: Contributed to the development and optimization of proprietary database engineering tools through feature development and technical refinement."
  },
  {
    year: "2025",
    title: "Documentation Head",
    place: "ACM TKMCE Students Chapter",
    notes: "Sep 2024 - Jul 2025: Lead the documentation team, responsible for creating and maintaining documentation and effective communication for the events of the chapter.",
  },
  {
    year: "2025",
    title: "Women In Tech Head",
    place: "TinkerHub TKMCE",
    notes: "Aug 2024 - Jul 2025: I worked on increasing the participation of women in tech events and activities, and also worked on helping them to get started with tech by conducting workshops and mentoring sessions.",
  },
  {
    year: "2024",
    title: "Creative Head",
    place: "ACM TKMCE Students Chapter",
    notes: "Sep 2023 - Sep 2024: Organized, Ideated and coordinated creative events, collaborated with other heads to ensure smooth execution of projects and activities.",
  },
] as const;

const ExperienceSection = () => {
  const timeline = useMemo(
    () =>
      experiences.map((exp, i) => ({
        ...exp,
        offset: i % 2 === 0 ? "-translate-y-2" : "translate-y-2",
      })),
    [],
  );

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Soft background band */}
      <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-secondary/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em] mb-3">
              — Experience
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              A Little Career Timeline
            </h2>
            <p className="mt-3 text-sm font-mono text-muted-foreground max-w-md">
            A gallery of milestones, each frame capturing the lessons that sharpened my skills and pushed me to grow.
            </p>
          </div>
        </div>

        {/* Timeline cards */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2" />

          <div className="space-y-10">
            {timeline.map((exp, index) => (
              <div
                key={exp.year + exp.title}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Year marker */}
                <div className="flex md:block items-center justify-center md:w-1/2">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full border border-foreground bg-background flex items-center justify-center font-mono text-xs">
                      {exp.year}
                    </div>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-px bg-foreground/20" />
                  </div>
                </div>

                {/* Card */}
                <div className="md:w-1/2">
                  <div
                    className={`relative border-2 border-foreground bg-background px-5 py-4 md:px-6 md:py-5 shadow-sm transition-transform duration-500 hover:-translate-y-1 ${exp.offset}`}
                  >
                    <div className="absolute -top-2 -left-2 w-3 h-3 border-l-2 border-t-2 border-foreground" />
                    <div className="absolute -top-2 -right-2 w-3 h-3 border-r-2 border-t-2 border-foreground" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 border-l-2 border-b-2 border-foreground" />
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 border-r-2 border-b-2 border-foreground" />

                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {exp.place}
                    </p>
                    <p className="mt-3 text-sm font-mono text-muted-foreground leading-relaxed">
                      {exp.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


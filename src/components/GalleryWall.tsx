import { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import WalkingCharacter from "@/components/WalkingCharacter";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
  year: string;
  /** GitHub repo or project URL — opens in new tab */
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "WOW",
    category: "Flutter App",
    description: "Developed a Flutter-based life organizer app for working women to monitor emotions, predict stress, and analyse personal vs. work time spent.",
    color: "hsl(340 75% 55%)",
    year: "2025",
    githubUrl: "https://github.com/sonashukoor/WoW-app",
  },
  {
    id: 2,
    title: "Enhancing pgAdmin",
    category: "Mini Project: IITM Pravartak Technologies",
    description: "Integrated SMS-based two-factor authentication (2FA) into pgAdmin, Implemented dark mode toggle to improve user experience and accessibility. Enhanced the SSL configuration wizard, simplifying secure setup.",
    color: "hsl(220 70% 50%)",
    year: "2025",
    githubUrl: "https://github.com/gautham1419/pgadmin-enhancements",
  },
  {
    id: 3,
    title: "Edit AI",
    category: "AI Video Editing Tool",
    description: "Built an AI tool that suggests intelligent cut points and transitions by analyzing video scenes, dialogue, and emotional shifts.",
    color: "hsl(160 60% 45%)",
    year: "2025",
    githubUrl: "https://github.com/s-Arathy/AI_Editing_Assistant",
  },
  {
    id: 4,
    title: "Medicare",
    category: "Web App",
    description: "A secure healthcare appointment system with JWT authentication, role-based dashboards, and real-time doctor slot booking that prevents double bookings and tracks appointment status.",
    color: "hsl(30 80% 55%)",
    year: "2026",
    githubUrl: "https://github.com/s-Arathy/healthcare-appointment-system",
  },
  {
    id: 5,
    title: "Human Pose Estimation",
    category: "Machine Learning",
    description: "Human pose detection identifies body joint positions using computer vision and tools like OpenPose, MediaPipe, or PyTorch.",
    color: "hsl(280 65% 60%)",
    year: "2024",
    githubUrl: "https://github.com/s-Arathy/Human-pose-estimation",
  },
  {
    id: 6,
    title: "Hidden Gems",
    category: "DBMS Project",
    description: "Built an online platform using HTML, CSS, JavaScript, Java Spring Boot, and PostgreSQL to catalogue Indian handcrafted arts by state and craft type, added features including artisan profiles, post sharing/saving etc.",
    color: "hsl(12 76% 61%)",
    year: "2023",
    githubUrl: "https://github.com/s-Arathy/HiddenGemsFinal",
  },
];

const colorSplashes = [
  { color: "hsl(340 75% 55%)", size: "w-3 h-3", top: "-8px", left: "20%" },
  { color: "hsl(220 70% 50%)", size: "w-2 h-2", top: "10%", right: "-6px" },
  { color: "hsl(160 60% 45%)", size: "w-4 h-4", bottom: "15%", left: "-10px" },
  { color: "hsl(30 80% 55%)", size: "w-2.5 h-2.5", top: "30%", right: "-8px" },
  { color: "hsl(280 65% 60%)", size: "w-3 h-3", bottom: "-6px", left: "40%" },
];

const GalleryFrame = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const frameHeight = index % 2 === 0 ? "h-72" : "h-80";
  const yOffset = index % 2 === 0 ? "mt-8" : "mt-3";

  return (
    <div
      className={`flex-shrink-0 w-80 ${yOffset} transition-transform duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group cursor-pointer">
        {/* Color splash dots that pop on hover */}
        {colorSplashes.map((splash, i) => (
          <div
            key={i}
            className={`absolute rounded-full z-20 transition-all duration-500 ${splash.size} ${
              isHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0"
            }`}
            style={{
              backgroundColor: splash.color,
              top: splash.top,
              left: splash.left,
              right: splash.right,
              bottom: splash.bottom,
              transitionDelay: `${i * 60}ms`,
              boxShadow: `0 0 12px ${splash.color}`,
            }}
          />
        ))}

        {/* Outer frame */}
        <div
          className={`border-4 border-foreground p-2 bg-secondary/30 transition-all duration-500 ${
            isHovered ? "shadow-lg -translate-y-2" : "shadow-sm"
          }`}
        >
          {/* Inner frame */}
          <div className="border-2 border-foreground/30 p-1">
            <div
              className={`${frameHeight} relative overflow-hidden transition-all duration-700`}
              style={{ backgroundColor: project.color }}
            >
              {/* Animated gradient overlay on hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isHovered ? "opacity-40" : "opacity-20"
                }`}
                style={{
                  background: `radial-gradient(circle at ${isHovered ? "30% 30%" : "50% 50%"}, white 0%, transparent 60%)`,
                  transition: "all 0.7s ease",
                }}
              />
              {/* Floating shapes */}
              <div
                className={`absolute w-16 h-16 border-2 rounded-full transition-all duration-700 ${
                  isHovered ? "opacity-40 scale-150 rotate-45" : "opacity-10 scale-100 rotate-0"
                }`}
                style={{
                  borderColor: "white",
                  top: "15%",
                  left: "15%",
                }}
              />
              <div
                className={`absolute w-10 h-10 transition-all duration-700 ${
                  isHovered ? "opacity-40 scale-125 rotate-90" : "opacity-10 scale-100 rotate-0"
                }`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  bottom: "20%",
                  right: "15%",
                }}
              />
              {/* Project number */}
              <div className={`absolute bottom-4 right-4 font-mono text-6xl font-bold transition-all duration-500 ${
                isHovered ? "opacity-40 scale-110" : "opacity-20 scale-100"
              }`}
                style={{ color: "white" }}
              >
                {String(project.id).padStart(2, "0")}
              </div>
              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-background/90 flex flex-col items-center justify-center p-6 transition-all duration-500 ${
                  isHovered ? "opacity-100 backdrop-blur-sm" : "opacity-0"
                }`}
              >
                <div className="text-center flex-1 flex flex-col justify-center">
                  <div
                    className={`w-8 h-1 mx-auto mb-3 transition-all duration-500 ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ backgroundColor: project.color }}
                  />
                  <p className="text-sm text-foreground font-mono leading-relaxed">
                    {project.description}
                  </p>
                  <div
                    className={`w-8 h-1 mx-auto mt-3 transition-all duration-500 delay-100 ${
                      isHovered ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ backgroundColor: project.color }}
                  />
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block mt-4 font-mono text-xs border-2 border-foreground px-3 py-2 hover:bg-foreground hover:text-background transition-colors"
                      style={{ borderColor: project.color }}
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Museum label with color accent */}
        <div className="mt-6 text-center">
          <h3 className="font-serif text-lg font-semibold text-foreground tracking-wide">
            {project.title}
          </h3>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isHovered ? "scale-100" : "scale-0"
              }`}
              style={{ backgroundColor: project.color }}
            />
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              {project.category} · {project.year}
            </p>
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isHovered ? "scale-100" : "scale-0"
              }`}
              style={{ backgroundColor: project.color }}
            />
          </div>
          {/* Auction / museum placard: "LOT 01 · View on GitHub" */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest border border-dashed border-foreground/50 px-3 py-1.5 hover:border-foreground hover:bg-foreground hover:text-background transition-all"
              title="View project on GitHub"
            >
              <span className="opacity-70">Lot {String(project.id).padStart(2, "0")}</span>
              <span className="mx-1.5">·</span>
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

interface GalleryWallProps {
  onScroll?: (progress: number) => void;
}

const GalleryWall = ({ onScroll }: GalleryWallProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [verticalScrollHeight, setVerticalScrollHeight] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  // Report initial progress (0) so character appears at start
  useEffect(() => {
    onScroll?.(0);
  }, [onScroll]);

  const measure = useCallback(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const horizontalDistance = Math.max(0, el.scrollWidth - el.clientWidth);
    // Map vertical scroll through this section to horizontalDistance
    // total section height = viewport height + horizontalDistance
    setVerticalScrollHeight(window.innerHeight + horizontalDistance);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    const onWindowScroll = () => {
      if (!sectionRef.current || !scrollRef.current) return;
      if (verticalScrollHeight == null) return;

      const section = sectionRef.current;
      const el = scrollRef.current;

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionScrollable = Math.max(1, verticalScrollHeight - window.innerHeight);

      const raw = (window.scrollY - sectionTop) / sectionScrollable;
      const progress = Math.min(1, Math.max(0, raw));

      const horizontalDistance = Math.max(0, el.scrollWidth - el.clientWidth);
      el.scrollLeft = progress * horizontalDistance;
      onScroll?.(progress);
      setProgress(progress);
    };

    // Run once to sync on load/refresh
    onWindowScroll();

    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, [onScroll, verticalScrollHeight]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={verticalScrollHeight != null ? { height: `${verticalScrollHeight}px` } : undefined}
    >
      {/* Museum wall texture */}
      <div className="absolute inset-0 bg-secondary/20" />

      {/* Sticky viewport: vertical scroll drives horizontal movement */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Section header */}
        <div className="relative z-10 px-8 pt-12 pb-4">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em] mb-2">
            — Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            The Exhibition
          </h2>
          <p className="text-muted-foreground mt-2 font-mono text-sm max-w-md">
            Keep scrolling to walk through the gallery →
          </p>
        </div>

        {/* Horizontal scroll gallery (scrollLeft is driven by window scroll) */}
        <div className="relative z-10 px-8 py-12">
          <div
            ref={scrollRef}
            className="relative flex gap-12 overflow-hidden"
            aria-label="Exhibition gallery"
          >
            {projects.map((project, index) => (
              <GalleryFrame key={project.id} project={project} index={index} />
            ))}

            {/* End of gallery marker */}
            <div className="flex-shrink-0 w-48 flex items-center justify-center">
              <div className="text-center">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  End of
                </p>
                <p className="font-serif text-xl text-foreground mt-1">Exhibition</p>
                <div className="w-8 h-px bg-foreground mx-auto mt-4" />
              </div>
            </div>
          </div>

          {/* Walking character ONLY within the exhibition section */}
          <WalkingCharacter scrollProgress={progress} />
        </div>

        {/* Floor line */}
        <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default GalleryWall;

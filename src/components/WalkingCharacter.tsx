import { useState } from "react";

type WalkingCharacterProps = {
  /** 0..1 */
  scrollProgress: number;
};

// Prefer bundling from `src/assets` (as requested). This lookup is resilient:
// if the file is missing, it won't crash the dev server; we fall back to a placeholder.
const walkingGirlModules = import.meta.glob<{ default: string }>(
  "../assets/late-for-class.png",
  { eager: true }
);
const WALKING_GIRL_SRC = Object.values(walkingGirlModules)[0]?.default;

const WalkingCharacter = ({ scrollProgress }: WalkingCharacterProps) => {
  const [imgError, setImgError] = useState(false);

  // Starts at far left (5%) and walks right as user scrolls
  const xPos = 5 + scrollProgress * 80;

  return (
    <div
      className="absolute bottom-2 z-20 transition-all duration-300 ease-out pointer-events-none"
      style={{ left: `${xPos}%`, transform: "translateX(-50%)" }}
    >
      {!WALKING_GIRL_SRC || imgError ? (
        <svg
          width="120"
          height="160"
          viewBox="0 0 120 160"
          className="h-48 md:h-56 lg:h-64 w-auto text-foreground/50"
          aria-label="Walking character placeholder"
          role="img"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
        >
          <circle cx="60" cy="38" r="14" fill="currentColor" opacity="0.35" />
          <path
            d="M60 52 C46 70 46 92 60 110 C74 92 74 70 60 52 Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M46 86 L28 104"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M74 86 L92 104"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M56 110 L42 146"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.35"
          />
          <path
            d="M64 110 L78 146"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      ) : (
        <img
          src={WALKING_GIRL_SRC}
          alt="Girl walking through gallery"
          className="h-48 md:h-56 lg:h-64 w-auto"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};

export default WalkingCharacter;

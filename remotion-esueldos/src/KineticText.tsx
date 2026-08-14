import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

/**
 * Revela un texto letra por letra con spring + blur-out, y opcionalmente le
 * pasa un brillo diagonal (light sweep) por encima una vez que terminó de
 * entrar — el remate que le da acabado "cinema" a la tipografía cinética.
 */
export const KineticText: React.FC<{
  text: string;
  startFrame: number;
  style?: React.CSSProperties;
  staggerFrames?: number;
  sweep?: boolean;
}> = ({ text, startFrame, style, staggerFrames = 2, sweep = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const letters = [...text];

  const sweepStart = startFrame + letters.length * staggerFrames + 6;
  const sweepProgress = interpolate(frame, [sweepStart, sweepStart + 26], [-40, 140], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <span style={{ position: "relative", display: "inline-block", whiteSpace: "pre", ...style }}>
      <span style={{ display: "inline-block", whiteSpace: "pre" }}>
        {letters.map((letter, i) => {
          const localFrame = frame - startFrame - i * staggerFrames;
          const progress = spring({
            frame: localFrame,
            fps,
            config: { damping: 200, stiffness: 200, mass: 0.7 },
          });
          const translateY = interpolate(progress, [0, 1], [28, 0]);
          const translateZ = interpolate(progress, [0, 1], [-120, 0]);
          const blur = interpolate(progress, [0, 1], [10, 0], { extrapolateRight: "clamp" });
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                opacity: progress,
                transform: `translateY(${translateY}px) translateZ(${translateZ}px)`,
                filter: `blur(${blur}px)`,
              }}
            >
              {letter}
            </span>
          );
        })}
      </span>
      {sweep ? (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            whiteSpace: "pre",
            backgroundImage: `linear-gradient(100deg, transparent 40%, rgba(255,255,255,0.9) 50%, transparent 60%)`,
            backgroundSize: "220% 100%",
            backgroundPositionX: `${sweepProgress}%`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        >
          {text}
        </span>
      ) : null}
    </span>
  );
};

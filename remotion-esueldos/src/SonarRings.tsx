import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "./theme";

/** Anillos expansivos tipo "sonar/impacto" detrás de un elemento — el remate
 * de energía que le falta a un CTA o a un logo final para sentirse "vivo". */
export const SonarRings: React.FC<{ startFrame: number; count?: number; every?: number }> = ({
  startFrame,
  count = 3,
  every = 26,
}) => {
  const frame = useCurrentFrame();

  return (
    <>
      {new Array(count).fill(0).map((_, i) => {
        const local = frame - startFrame - i * every;
        if (local < 0) return null;
        const progress = Math.min(1, local / 50);
        const scale = interpolate(progress, [0, 1], [0.3, 2.2]);
        const opacity = interpolate(progress, [0, 0.15, 1], [0, 0.5, 0]);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: `2px solid ${theme.blue3}`,
              transform: `scale(${scale})`,
              opacity,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </>
  );
};

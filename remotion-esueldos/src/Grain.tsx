import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

/**
 * Grano cinematográfico sutil vía SVG feTurbulence, con la semilla cambiando
 * cada pocos frames para que no se sienta un patrón estático — el detalle que
 * separa un fondo "CSS plano" de algo con textura fílmica real.
 */
export const Grain: React.FC<{ opacity?: number }> = ({ opacity = 0.05 }) => {
  const frame = useCurrentFrame();
  const seed = (frame % 6) + 1;

  return (
    <AbsoluteFill style={{ mixBlendMode: "overlay", opacity, pointerEvents: "none" }}>
      <svg style={{ width: "100%", height: "100%" }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed={seed} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </AbsoluteFill>
  );
};

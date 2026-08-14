import React, { useMemo } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

type Particle = {
  x: number;
  y: number;
  size: number;
  depth: number; // 0 = fondo (lento, borroso) · 1 = cerca (rápido, nítido)
  driftSeed: number;
};

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9973) * 43758.5453;
  return x - Math.floor(x);
};

/** Campo de partículas de luz flotando en distintas profundidades (parallax real). */
export const ParticleField: React.FC<{ count?: number }> = ({ count = 34 }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const particles: Particle[] = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      x: seededRandom(i * 1.7) * width,
      y: seededRandom(i * 3.1 + 5) * height,
      size: 2 + seededRandom(i * 5.3) * 7,
      depth: seededRandom(i * 2.2 + 9),
      driftSeed: i,
    }));
  }, [count, width, height]);

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {particles.map((p, i) => {
        const speed = 0.15 + p.depth * 0.6;
        const y = ((p.y - frame * speed) % (height + 60) + (height + 60)) % (height + 60);
        const sway = Math.sin((frame + p.driftSeed * 40) / 50) * 18 * p.depth;
        const opacity = 0.15 + p.depth * 0.35;
        const blur = interpolate(p.depth, [0, 1], [4, 0]);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: p.x + sway,
              top: y,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: theme.blue3,
              opacity,
              filter: `blur(${blur}px)`,
              boxShadow: `0 0 ${p.size * 3}px ${theme.blue2}`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

import React, { useMemo } from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "./theme";

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/**
 * Apertura de impacto: esquirlas de luz dispersas por toda la pantalla que
 * convergen a toda velocidad hacia el centro y se funden en el logo —
 * mucho más "sorprendente" que un simple fade/scale-in.
 */
export const ParticleAssembly: React.FC<{ startFrame: number; shardCount?: number }> = ({
  startFrame,
  shardCount = 26,
}) => {
  const frame = useCurrentFrame();
  const local = frame - startFrame;

  const shards = useMemo(
    () =>
      new Array(shardCount).fill(0).map((_, i) => ({
        angle: seededRandom(i * 3.3) * Math.PI * 2,
        distance: 420 + seededRandom(i * 5.1) * 480,
        size: 5 + seededRandom(i * 7.9) * 10,
        delay: seededRandom(i * 11.3) * 8,
        spin: seededRandom(i * 13.7) * 360,
      })),
    [shardCount]
  );

  if (local < -10 || local > 46) return null;

  return (
    <>
      {shards.map((s, i) => {
        const t = Math.max(0, local - s.delay);
        const progress = interpolate(t, [0, 30], [0, 1], { extrapolateRight: "clamp" });
        // easeOutCubic manual para que la llegada sea rápida y frene con gusto
        const eased = 1 - Math.pow(1 - progress, 3);
        const dist = interpolate(eased, [0, 1], [s.distance, 0]);
        const opacity = interpolate(progress, [0, 0.15, 0.82, 1], [0, 1, 1, 0]);
        const x = Math.cos(s.angle) * dist;
        const y = Math.sin(s.angle) * dist;
        const rotate = interpolate(progress, [0, 1], [s.spin, 0]);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: s.size,
              height: s.size,
              marginLeft: -s.size / 2,
              marginTop: -s.size / 2,
              background: theme.blue2,
              boxShadow: `0 0 14px 3px ${theme.blue2}`,
              opacity,
              transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
              borderRadius: 3,
            }}
          />
        );
      })}
    </>
  );
};

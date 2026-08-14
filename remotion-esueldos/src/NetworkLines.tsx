import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

/**
 * Red de nodos tipo "datos vivos" (fintech/tech), muy sutil, que conecta
 * puntos cercanos con líneas cuya opacidad respira. Reemplaza a los cubos
 * de vidrio del asset generado por algo 100% de código, controlable y sin
 * artefactos raros.
 */
export const NetworkLines: React.FC<{ count?: number; opacity?: number }> = ({
  count = 22,
  opacity = 0.18,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const nodes = useMemo(
    () =>
      new Array(count).fill(0).map((_, i) => ({
        x: seededRandom(i * 4.1) * width,
        y: seededRandom(i * 7.7 + 3) * height,
        speed: 0.05 + seededRandom(i * 2.3) * 0.12,
        phase: seededRandom(i * 9.9) * 1000,
      })),
    [count, width, height]
  );

  const positions = nodes.map((n) => ({
    x: n.x + Math.sin((frame + n.phase) / 130) * 40,
    y: n.y + Math.cos((frame + n.phase) / 160) * 30,
  }));

  const maxDist = width * 0.16;
  const lines: { x1: number; y1: number; x2: number; y2: number; o: number }[] = [];
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      const dx = positions[i].x - positions[j].x;
      const dy = positions[i].y - positions[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        lines.push({
          x1: positions[i].x,
          y1: positions[i].y,
          x2: positions[j].x,
          y2: positions[j].y,
          o: 1 - dist / maxDist,
        });
      }
    }
  }

  return (
    <AbsoluteFill style={{ opacity }}>
      <svg width={width} height={height}>
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke={theme.blue3}
            strokeWidth={1}
            opacity={l.o * 0.7}
          />
        ))}
        {positions.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={2} fill={theme.blue2} opacity={0.8} />
        ))}
      </svg>
    </AbsoluteFill>
  );
};

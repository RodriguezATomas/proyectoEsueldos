import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

type Direction = "left" | "right" | "bottom";

/**
 * Tarjeta glassmorphism que entra con parallax (cada una desde un lado distinto,
 * con leve rotación 3D) — el mismo lenguaje de "floating UI cards" que usan
 * los dos videos de referencia para mostrar producto sin filmar una pantalla real.
 */
export const FloatingCard: React.FC<{
  startFrame: number;
  direction: Direction;
  x: number;
  y: number;
  width: number;
  rotate?: number;
  children: React.ReactNode;
}> = ({ startFrame, direction, x, y, width, rotate = 0, children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;

  const entrance = spring({ frame: local, fps, config: { damping: 18, mass: 1 } });

  const offset = { left: -140, right: 140, bottom: 90 }[direction];
  const isHorizontal = direction !== "bottom";

  const translateX = isHorizontal ? interpolate(entrance, [0, 1], [offset, 0]) : 0;
  const translateY = !isHorizontal
    ? interpolate(entrance, [0, 1], [offset, 0])
    : interpolate(entrance, [0, 1], [18, 0]);

  // Flotación continua sutil, como si la tarjeta respirara en el aire.
  const floatY = Math.sin((Math.max(local, 0) + x) / 26) * 6;
  const tiltIn = interpolate(entrance, [0, 1], [rotate * 3, rotate]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        opacity: entrance,
        transform: `translate(${translateX}px, ${translateY + floatY}px) rotate(${tiltIn}deg)`,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(18px)",
        borderRadius: 24,
        border: "1px solid rgba(255,255,255,0.6)",
        boxShadow: "0 30px 60px rgba(8,26,77,0.35)",
        padding: 22,
        fontFamily: theme.font,
      }}
    >
      {children}
    </div>
  );
};

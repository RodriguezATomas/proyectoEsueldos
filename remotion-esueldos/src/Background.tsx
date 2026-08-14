import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { theme } from "./theme";
import { Grain } from "./Grain";
import { ParticleField } from "./ParticleField";
import { NetworkLines } from "./NetworkLines";

const AI_TEXTURE_FILE = "bg-texture.png";

/**
 * Fondo "vivo": textura generada con Higgsfield en Ken Burns lento + mesh de
 * gradientes que se DESPLAZAN de verdad (no están fijos) + partículas + grano.
 * Esto es lo que separa un fondo de "wallpaper estático" de un motion graphic.
 */
export const Background: React.FC<{ hasTexture: boolean }> = ({ hasTexture }) => {
  const frame = useCurrentFrame();

  const kenBurns = interpolate(frame, [0, 360], [1.08, 1.22], { extrapolateRight: "clamp" });
  const panX = interpolate(frame, [0, 360], [-3, -5]);
  const panY = interpolate(frame, [0, 360], [0, -3]);

  // Los centros de los blobs se mueven en órbitas lentas (Lissajous-like).
  const t = frame / 90;
  const blob1x = 20 + Math.sin(t) * 10;
  const blob1y = 22 + Math.cos(t * 0.8) * 8;
  const blob2x = 82 + Math.cos(t * 0.6) * 8;
  const blob2y = 18 + Math.sin(t * 0.9) * 10;
  const blob3x = 50 + Math.sin(t * 0.5) * 14;
  const blob3y = 100;

  return (
    <AbsoluteFill style={{ background: theme.ink, overflow: "hidden" }}>
      {hasTexture ? (
        <Img
          src={staticFile(AI_TEXTURE_FILE)}
          style={{
            position: "absolute",
            inset: 0,
            width: "120%",
            height: "120%",
            objectFit: "cover",
            transform: `translate(${panX}%, ${panY}%) scale(${kenBurns})`,
            opacity: 0.8,
          }}
        />
      ) : null}

      <AbsoluteFill
        style={{
          background: `
            radial-gradient(48% 42% at ${blob1x}% ${blob1y}%, rgba(35,85,232,0.6) 0%, rgba(35,85,232,0) 70%),
            radial-gradient(44% 38% at ${blob2x}% ${blob2y}%, rgba(92,130,245,0.45) 0%, rgba(92,130,245,0) 70%),
            radial-gradient(60% 55% at ${blob3x}% ${blob3y}%, rgba(8,26,77,0.95) 0%, rgba(8,26,77,0.5) 60%)
          `,
          mixBlendMode: "normal",
        }}
      />

      <NetworkLines />
      <ParticleField />

      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(8,26,77,0.4) 0%, rgba(8,26,77,0.02) 26%, rgba(8,26,77,0.02) 68%, rgba(8,26,77,0.6) 100%)",
        }}
      />

      {/* Viñeta radial para dirigir el ojo al centro, como en fotografía cinematográfica */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(120% 100% at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <Grain opacity={0.045} />
    </AbsoluteFill>
  );
};

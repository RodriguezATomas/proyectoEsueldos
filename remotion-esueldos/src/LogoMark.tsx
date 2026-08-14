import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

// Recrea el "app-logo-mark" de la landing (cuadrado redondeado con gradiente azul)
// como pieza animable: entra con spring y respira con un pulso continuo.
export const LogoMark: React.FC<{ startFrame: number; size?: number }> = ({
  startFrame,
  size = 120,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;

  const entrance = spring({ frame: local, fps, config: { damping: 14, mass: 0.9 } });
  const scale = interpolate(entrance, [0, 1], [0.4, 1]);
  const rotate = interpolate(entrance, [0, 1], [-16, 0]);

  const pulse = 1 + Math.sin(Math.max(local, 0) / 14) * 0.03 * Math.min(1, Math.max(local, 0) / 20);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.28,
        background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue2})`,
        boxShadow: `0 ${size * 0.18}px ${size * 0.4}px rgba(35,85,232,0.45)`,
        opacity: entrance,
        transform: `scale(${scale * pulse}) rotate(${rotate}deg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: theme.white,
          fontFamily: theme.font,
          fontWeight: 900,
          fontSize: size * 0.46,
        }}
      >
        e
      </span>
    </div>
  );
};

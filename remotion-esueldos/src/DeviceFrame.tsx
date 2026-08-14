import React from "react";
import { Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

/**
 * Mockup de pantalla "premium": el screenshot generado por IA metido en un
 * bisel de vidrio, con inclinación 3D real (rotateX/Y), reflejo espejado
 * abajo y un halo de luz — el lenguaje visual de los reels de producto que
 * sirvieron de referencia, en vez de una tarjeta HTML plana.
 */
export const DeviceFrame: React.FC<{
  startFrame: number;
  x: number;
  y: number;
  width: number;
  tiltY?: number;
  tiltX?: number;
}> = ({ startFrame, x, y, width, tiltY = -14, tiltX = 6 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;

  const entrance = spring({ frame: local, fps, config: { damping: 16, mass: 1.1 } });
  const translateZ = interpolate(entrance, [0, 1], [-260, 0]);
  const scale = interpolate(entrance, [0, 1], [0.82, 1]);
  const floatY = Math.sin(Math.max(local, 0) / 34) * 8;
  const liveTiltY = tiltY + Math.sin(Math.max(local, 0) / 90) * 3;

  const height = width * 0.62;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        opacity: entrance,
        transformStyle: "preserve-3d",
        transform: `translateZ(${translateZ}px) translateY(${floatY}px) scale(${scale}) rotateX(${tiltX}deg) rotateY(${liveTiltY}deg)`,
      }}
    >
      {/* Halo de luz azul detrás de la pantalla */}
      <div
        style={{
          position: "absolute",
          inset: -40,
          borderRadius: 40,
          background: `radial-gradient(60% 60% at 50% 40%, rgba(92,130,245,0.55), rgba(92,130,245,0) 70%)`,
          filter: "blur(10px)",
        }}
      />

      <div
        style={{
          position: "relative",
          borderRadius: 22,
          padding: 10,
          background: "linear-gradient(160deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",
          boxShadow: "0 50px 90px rgba(2,8,30,0.55)",
          border: "1px solid rgba(255,255,255,0.35)",
        }}
      >
        <div style={{ borderRadius: 14, overflow: "hidden", position: "relative", width, height }}>
          <Img
            src={staticFile("dashboard-screenshot.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Sheen de vidrio por encima del screenshot */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.08) 100%)",
            }}
          />
        </div>
      </div>

      {/* Reflejo espejado, atenuado */}
      <div
        style={{
          position: "relative",
          marginTop: 6,
          borderRadius: 14,
          overflow: "hidden",
          width,
          height: height * 0.5,
          transform: "scaleY(-1)",
          opacity: 0.22,
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.5), transparent)",
          WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0.5), transparent)",
        }}
      >
        <Img
          src={staticFile("dashboard-screenshot.png")}
          style={{ width: "100%", height: height, objectFit: "cover", display: "block" }}
        />
      </div>
    </div>
  );
};

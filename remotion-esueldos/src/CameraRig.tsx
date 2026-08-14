import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

/**
 * Envuelve el contenido de una escena en una cámara 3D que respira: rotación
 * sutil en X/Y y una traslación Z casi imperceptible, para que nada en el
 * video se sienta "plano". Los hijos deben tener su propio `transform-style`.
 */
export const CameraRig: React.FC<{ children: React.ReactNode; intensity?: number }> = ({
  children,
  intensity = 1,
}) => {
  const frame = useCurrentFrame();
  const rotateY = Math.sin(frame / 140) * 2.2 * intensity;
  const rotateX = Math.cos(frame / 170) * 1.4 * intensity;
  const translateZ = Math.sin(frame / 200) * 12 * intensity;

  return (
    <AbsoluteFill style={{ perspective: 1600 }}>
      <AbsoluteFill
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

export const FeaturePill: React.FC<{
  startFrame: number;
  icon: string;
  label: string;
  x: number;
}> = ({ startFrame, icon, label, x }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const local = frame - startFrame;
  const entrance = spring({ frame: local, fps, config: { damping: 16, mass: 0.8 } });
  const translateY = interpolate(entrance, [0, 1], [46, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        display: "flex",
        alignItems: "center",
        gap: 14,
        opacity: entrance,
        transform: `translateY(${translateY}px)`,
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.28)",
        backdropFilter: "blur(10px)",
        borderRadius: 999,
        padding: "16px 30px",
        fontFamily: theme.font,
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue2})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        {icon}
      </span>
      <span style={{ color: theme.white, fontWeight: 800, fontSize: 26 }}>{label}</span>
    </div>
  );
};

export const CountUp: React.FC<{
  startFrame: number;
  to: number;
  suffix?: string;
  style?: React.CSSProperties;
}> = ({ startFrame, to, suffix = "", style }) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - startFrame);
  const value = Math.round(interpolate(local, [0, 45], [0, to], { extrapolateRight: "clamp" }));
  return (
    <span style={style}>
      {value}
      {suffix}
    </span>
  );
};

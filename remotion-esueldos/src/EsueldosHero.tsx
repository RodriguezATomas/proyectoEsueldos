import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { Background } from "./Background";
import { KineticText } from "./KineticText";
import { LogoMark } from "./LogoMark";
import { FloatingCard } from "./FloatingCard";
import { FeaturePill, CountUp } from "./FeaturePill";
import { DeviceFrame } from "./DeviceFrame";
import { CameraRig } from "./CameraRig";
import { SonarRings } from "./SonarRings";
import { ParticleAssembly } from "./ParticleAssembly";
import { theme } from "./theme";

const HAS_AI_TEXTURE = true;

/**
 * Transición tipo "cámara atravesando la escena": en vez de un fade plano,
 * la escena entra desde más lejos y desenfocada, y sale acercándose y
 * desenfocándose de nuevo — así los cortes se sienten como un travelling
 * de cámara y no como un corte de PowerPoint.
 */
const useSceneTransition = (durationInFrames: number, fadeFrames = 16) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [0, fadeFrames, durationInFrames - fadeFrames, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const scale = interpolate(
    frame,
    [0, fadeFrames, durationInFrames - fadeFrames, durationInFrames],
    [1.16, 1, 1, 0.9],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const blur = interpolate(
    frame,
    [0, fadeFrames, durationInFrames - fadeFrames, durationInFrames],
    [14, 0, 0, 14],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  // Rotación mínima al entrar/salir: sensación de "whip pan" de cámara.
  const rotate = interpolate(
    frame,
    [0, fadeFrames, durationInFrames - fadeFrames, durationInFrames],
    [-2.4, 0, 0, 2.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  // Intensidad de aberración cromática: pico justo en el corte, se apaga rápido.
  const chroma = interpolate(
    frame,
    [0, fadeFrames * 0.6, fadeFrames, durationInFrames - fadeFrames, durationInFrames - fadeFrames * 0.6, durationInFrames],
    [10, 1, 0, 0, 1, 10],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const filter = `blur(${blur}px) drop-shadow(-${chroma}px 0 0 rgba(255,60,90,0.55)) drop-shadow(${chroma}px 0 0 rgba(50,210,255,0.55))`;
  return { opacity, scale, blur, rotate, transform: `scale(${scale}) rotate(${rotate}deg)`, filter };
};

const SceneWordmark: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const { opacity, transform, filter } = useSceneTransition(durationInFrames);
  return (
    <AbsoluteFill
      style={{
        opacity,
        alignItems: "center",
        justifyContent: "center",
        transform,
        filter,
      }}
    >
      <CameraRig intensity={1.2}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <ParticleAssembly startFrame={0} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
            <LogoMark startFrame={4} size={130} />
            <KineticText
              text="e-Sueldos"
              startFrame={20}
              staggerFrames={3}
              sweep
              style={{
                fontFamily: theme.font,
                fontWeight: 900,
                fontSize: 116,
                color: theme.white,
                letterSpacing: -2,
              }}
            />
            <KineticText
              text="Sueldos y RR.HH., sin fricción."
              startFrame={50}
              staggerFrames={1}
              style={{
                fontFamily: theme.font,
                fontWeight: 700,
                fontSize: 34,
                color: theme.blue3,
              }}
            />
          </div>
        </AbsoluteFill>
      </CameraRig>
    </AbsoluteFill>
  );
};

const SceneProduct: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const { opacity, transform, filter } = useSceneTransition(durationInFrames);
  return (
    <AbsoluteFill style={{ opacity, transform, filter }}>
      <CameraRig intensity={1}>
        <AbsoluteFill style={{ alignItems: "flex-start", justifyContent: "flex-start", paddingTop: 90 }}>
          <AbsoluteFill style={{ alignItems: "center", top: 0, height: 200 }}>
            <KineticText
              text="Todo tu equipo, en un solo lugar"
              startFrame={2}
              staggerFrames={1}
              style={{ fontFamily: theme.font, fontWeight: 900, fontSize: 54, color: theme.white }}
            />
          </AbsoluteFill>

          <DeviceFrame startFrame={16} x={560} y={300} width={800} tiltX={7} tiltY={-10} />

          <FloatingCard startFrame={42} direction="left" x={140} y={640} width={330} rotate={-5}>
            <div style={{ fontSize: 13, fontWeight: 800, color: theme.blue, marginBottom: 8 }}>
              ⏱ CONTROL HORARIO
            </div>
            <div style={{ fontSize: 14, color: theme.text, fontWeight: 700 }}>Fichaje activo</div>
            <div style={{ marginTop: 10, height: 7, borderRadius: 999, background: "#EEF3FF", overflow: "hidden" }}>
              <div
                style={{
                  width: "72%",
                  height: "100%",
                  borderRadius: 999,
                  background: `linear-gradient(90deg, ${theme.blue}, ${theme.blue2})`,
                }}
              />
            </div>
          </FloatingCard>

          <FloatingCard startFrame={54} direction="right" x={1420} y={600} width={340} rotate={5}>
            <div style={{ fontSize: 13, fontWeight: 800, color: theme.blue, marginBottom: 8 }}>
              🧾 RECIBOS DE SUELDO
            </div>
            <div style={{ fontSize: 14, color: theme.text, fontWeight: 700 }}>Agosto 2026 — listo</div>
            <div style={{ fontSize: 12, color: theme.muted, marginTop: 4 }}>
              Generado y enviado automáticamente
            </div>
          </FloatingCard>
        </AbsoluteFill>
      </CameraRig>
    </AbsoluteFill>
  );
};

const SceneStats: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const { opacity, transform, filter } = useSceneTransition(durationInFrames);
  return (
    <AbsoluteFill
      style={{
        opacity,
        alignItems: "center",
        justifyContent: "center",
        transform,
        filter,
      }}
    >
      <CameraRig intensity={0.8}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <CountUp
                startFrame={0}
                to={40}
                suffix="%"
                style={{
                  fontFamily: theme.font,
                  fontWeight: 900,
                  fontSize: 160,
                  color: theme.white,
                  lineHeight: 1,
                  textShadow: `0 0 60px ${theme.blue2}`,
                }}
              />
            </div>
            <div
              style={{
                fontFamily: theme.font,
                fontWeight: 700,
                fontSize: 30,
                color: theme.blue3,
                textAlign: "center",
              }}
            >
              menos tiempo administrativo por mes
            </div>

            <div style={{ position: "relative", width: 1400, height: 90, marginTop: 26 }}>
              <FeaturePill startFrame={20} icon="⏱" label="Control horario" x={0} />
              <FeaturePill startFrame={30} icon="🧾" label="Recibos digitales" x={520} />
              <FeaturePill startFrame={40} icon="👥" label="Portal RR.HH." x={1050} />
            </div>
          </div>
        </AbsoluteFill>
      </CameraRig>
    </AbsoluteFill>
  );
};

const AssembledLogo: React.FC<{ startFrame: number }> = ({ startFrame }) => {
  const frame = useCurrentFrame();
  const local = frame - startFrame;
  // Ghost-trail: 3 copias desfasadas y cada vez más transparentes/borrosas
  // simulan motion blur real durante el "ensamblado" de las letras.
  const ghosts = [0, 4, 8];
  return (
    <div style={{ position: "relative" }}>
      {ghosts.map((lag, i) => (
        <div
          key={i}
          style={{
            position: i === 0 ? "relative" : "absolute",
            inset: 0,
            opacity: i === 0 ? 1 : 0.16 / (i + 1),
            filter: i === 0 ? "none" : `blur(${i * 3}px)`,
          }}
        >
          <KineticText
            text="e-Sueldos"
            startFrame={startFrame - lag}
            staggerFrames={2}
            sweep={i === 0}
            style={{ fontFamily: theme.font, fontWeight: 900, fontSize: 70, color: theme.white }}
          />
        </div>
      ))}
    </div>
  );
};

const SceneCTA: React.FC<{ durationInFrames: number }> = ({ durationInFrames }) => {
  const { opacity, transform, filter } = useSceneTransition(durationInFrames, 16);
  const frame = useCurrentFrame();
  const buttonPulse = 1 + Math.sin(frame / 8) * 0.02;

  return (
    <AbsoluteFill
      style={{
        opacity,
        alignItems: "center",
        justifyContent: "center",
        transform,
        filter,
      }}
    >
      <CameraRig intensity={1.4}>
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
            <div style={{ position: "relative", width: 90, height: 90 }}>
              <SonarRings startFrame={2} />
              <LogoMark startFrame={0} size={90} />
            </div>
            <AssembledLogo startFrame={8} />
            <div style={{ position: "relative" }}>
              <SonarRings startFrame={30} every={22} />
              <div
                style={{
                  position: "relative",
                  marginTop: 18,
                  padding: "20px 54px",
                  borderRadius: 999,
                  background: `linear-gradient(135deg, ${theme.blue}, ${theme.blue2})`,
                  color: theme.white,
                  fontFamily: theme.font,
                  fontWeight: 900,
                  fontSize: 26,
                  boxShadow: `0 24px 60px rgba(35,85,232,0.55)`,
                  transform: `scale(${buttonPulse})`,
                }}
              >
                e-sueldos.com
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </CameraRig>
    </AbsoluteFill>
  );
};

export const EsueldosHero: React.FC = () => {
  return (
    <AbsoluteFill>
      <Background hasTexture={HAS_AI_TEXTURE} />

      <Sequence from={0} durationInFrames={110}>
        <SceneWordmark durationInFrames={110} />
      </Sequence>

      <Sequence from={90} durationInFrames={150}>
        <SceneProduct durationInFrames={150} />
      </Sequence>

      <Sequence from={228} durationInFrames={92}>
        <SceneStats durationInFrames={92} />
      </Sequence>

      <Sequence from={308} durationInFrames={92}>
        <SceneCTA durationInFrames={92} />
      </Sequence>
    </AbsoluteFill>
  );
};

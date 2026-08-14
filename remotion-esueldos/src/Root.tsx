import { Composition } from "remotion";
import { EsueldosHero } from "./EsueldosHero";
import { FPS, WIDTH, HEIGHT } from "./theme";

const DURATION_IN_FRAMES = 400; // ~13.3s a 30fps

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="EsueldosHero"
        component={EsueldosHero}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};

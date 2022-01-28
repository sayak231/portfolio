import { useCallback, useRef } from "react";
import { saveAs } from "file-saver";
import ReactCanvasConfetti from "react-canvas-confetti";
import GooeyButton from "./GooeyButton";

const canvasStyles: React.CSSProperties = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

function getAnimationSettings(particleRatio, opts) {
  return {
    ...opts,
    origin: { y: 0.7 },
    particleCount: Math.floor(200 * particleRatio),
  };
}

const Realistic: React.FC = () => {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/file/d/1sgt5Crte2MtO7H4avXrDZwhHaqmYzw45/view?usp=sharing",
    );
  };
  const refAnimationInstance = useRef<HTMLCanvasElement | null>(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current! &&
      // @ts-ignore
      refAnimationInstance.current(getAnimationSettings(particleRatio, opts));
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    setTimeout(() => {
      saveFile();
    }, 2100);
  }, [makeShot]);

  return (
    <>
      <GooeyButton fire={fire} />
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
};

export default Realistic;

import React, { useCallback, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

function useConfetti() {
  const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  };

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: .7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(1, {
      ticks: 500000,
      spread: 90,
      decay: .95,
      scalar: 2
    });
  }, [makeShot]);

  return [
    fire,
    <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />,
  ];
}

export default useConfetti
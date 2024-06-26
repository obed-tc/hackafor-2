import { useEffect, useState } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

export const Background = () => {
  const [vanta, setVanta] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!vanta) return;

    const vantaEffect: object = HALO({
      el: vanta,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 300,
      minWidth: 300,
      speed: 0.1,
      backgroundColor: 0x60606,
      amplitudeFactor: 1.3,
      baseColor: '#390a8b',
      color2: '#e7e7e7'
    });

    return () => {
      if (!(vantaEffect instanceof Object)) return;
      if (!('destroy' in vantaEffect)) return;
      if (typeof vantaEffect.destroy !== 'function') return;
      vantaEffect.destroy();
    };
  }, [vanta]);

  return (
    <div
      className="h-[900px]"
      style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden'
      }}
      ref={setVanta}
    >
      {/* bottom gradient */}
      <div
        className="absolute left-0 bottom-0 w-full h-90"
        style={{
          background: 'linear-gradient(to top, rgba(6, 6, 6, 1), rgba(6, 6, 6, 0.716), rgba(6, 6, 6, 0))'
        }}
      ></div>
    </div>
  );
};

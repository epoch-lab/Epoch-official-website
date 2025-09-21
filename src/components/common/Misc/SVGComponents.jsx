import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BlurText from '@/content/TextAnimations/BlurText/BlurText';
import logoUrl from '@/assets/svg/logo.svg';

export const Logo = () => {
  const svgRef = useRef(null);
  const atomRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const atomEl = atomRef.current;
    if (!svgEl || !atomEl) return;

    gsap.set(atomEl, { transformOrigin: 'center center' });

    const handleEnter = () => gsap.to(atomEl, { rotation: 20, scale: 0.95, duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleLeave = () => gsap.to(atomEl, { rotation: 0, scale: 1, duration: 1, ease: 'elastic.out(2, 1)' });

    svgEl.addEventListener('mouseenter', handleEnter);
    svgEl.addEventListener('mouseleave', handleLeave);

    return () => {
      svgEl.removeEventListener('mouseenter', handleEnter);
      svgEl.removeEventListener('mouseleave', handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex items-center justify-center gap-2' ref={svgRef}>
       <img
          src={logoUrl}
          className="logo-mask w-8 z-50"
          style={{
            opacity: 0.1,
            }}
        />
      <h2 className='text-2xl font-bold text-white'>Epoch</h2>
    </div>
  );
};

'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    document.documentElement.classList.add('tevexxo-custom-cursor');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let rafId = 0;
    let visible = false;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!visible) { visible = true; dot.style.opacity = '1'; }
    };

    const onLeave = () => { visible = false; dot.style.opacity = '0'; };
    const onEnter = () => { visible = true; dot.style.opacity = '1'; };

    const render = () => {
      dotX += (mouseX - dotX) * 0.22;
      dotY += (mouseY - dotY) * 0.22;
      dot.style.transform = `translate3d(${dotX - 7}px, ${dotY - 7}px, 0)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove('tevexxo-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '14px',
        height: '14px',
        borderRadius: '9999px',
        background: '#ff5a00',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 0.2s ease',
        willChange: 'transform',
        mixBlendMode: 'normal',
      }}
    />
  );
}

import React, { useEffect, useRef } from 'react';

export default function Welcome() {
  const spinAnim = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame: number;
    let angle = 0;
    function animate() {
      angle = (angle + 0.45) % 360;
      if (imgRef.current) {
        imgRef.current.style.transform = `rotate(${angle}deg)`;
      }
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#101828', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <img
        ref={imgRef}
        src="/assets/hero.png"
        alt="Hero"
        style={{ width: 260, height: 260, marginBottom: 32, transition: 'transform 0.1s linear' }}
      />
      <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 700, marginBottom: 12, textAlign: 'center' }}>
        Welcome to Rewards Sync
      </h1>
      <p style={{ color: '#A3A3A3', fontSize: 16, marginBottom: 32, textAlign: 'center' }}>
        Securely link your card to unlock rewards
      </p>
      <button
        style={{
          width: '100%',
          maxWidth: 320,
          padding: '16px 0',
          borderRadius: 16,
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: 0.5,
          color: 'white',
          background: '#b28cff',
          border: 'none',
          marginBottom: 16,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          cursor: 'pointer',
        }}
        onClick={() => alert('Plaid flow would start here!')}
      >
        Connect your card
      </button>
    </div>
  );
} 
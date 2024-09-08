import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state for tracking loading

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Hide loader when the Spline model has loaded
  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`origin-center scale-80 ${isMobile ? 'h-[80vh]' : 'h-[90vh]'}`}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="canvas-load"></span>
          <p
            style={{
              fontSize: 14,
              color: '#F1F1F1',
              fontWeight: 800,
              marginTop: 40,
            }}
          >
            Loading...
          </p>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/Xt-n1O3hwTShro5H/scene.splinecode"
        onLoad={handleLoad} // Trigger when the Spline model is fully loaded
      />
    </div>
  );
}

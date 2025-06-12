import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function RobotModel() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 500px)');
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (e) => setIsMobile(e.matches);
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);
  
    const handleLoad = () => setIsLoading(false);
  
    return (
      <div className="relative w-full max-w-[600px] aspect-square md:aspect-[8/9] overflow-visible">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="canvas-load"></span>
            <p className="mt-10 text-white text-sm font-bold">Loading...</p>
          </div>
        )}
        <Spline
          scene="https://prod.spline.design/vF2J3QykUsXdYoJt/scene.splinecode"
          onLoad={handleLoad}
          className="w-full h-full"
        />
      </div>
    );
  }
  
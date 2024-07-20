import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineModel() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => 
  {
    const mediaQuery = window.matchMedia
    ('(max-width: 500px)')

      setIsMobile(mediaQuery.matches)
      
      const handleMediaQueryChange = (e) => 
      {
        setIsMobile(e.matches)
      }

      mediaQuery.addEventListener
      ('change', handleMediaQueryChange)

      return () => {
        mediaQuery.removeEventListener
        ('change', handleMediaQueryChange)
      }
  }, [])


  return (
    <div className={` origin-center scale-80 ${isMobile ? 'h-[80vh]' : 'h-[90vh]'}`}>
    <Spline scene="https://prod.spline.design/Xt-n1O3hwTShro5H/scene.splinecode" />
    </div>  
  );
}

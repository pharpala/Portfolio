import { styles } from "../styles"
import React, { useEffect, useState } from "react"

const Hero = () => {

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
    <section className={`relative w-full h-[100px] mx-auto ${isMobile ? ' pb-[220px]' :' pb-[125px]'}`}>
      <div className={`${styles.paddingX} absolute inset-0 ${isMobile ? 'top-[80px]' : 'top-[90px]'} max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white ${isMobile ? 'text-[60px]' : 'text-[40px]'}`}> Hi, I'm <span className="text-[#915eff]">Pranay</span></h1>
          <p className={`${styles.heroSubText} text-white-100 ${isMobile ? 'text-[20px]' : 'text-[16px]'}`}>
            I turn applications <br className="block xs:hidden"/> 
            into <span className="shine"> pieces of art</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
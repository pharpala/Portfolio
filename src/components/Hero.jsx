import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
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
    <section className="relative w-full h-[100vh]
    mx-auto pb-10"> 

      <div className={`${styles.paddingX} absolute
      inset-0 top-[90px] max-w-7xl mx-auto flex
      flex-row items-start gap-5 ]`}>
        <div className="flex flex-col
        justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full 
          bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className="text-[#915eff]">Pranay</span></h1>
          <p className={`${styles.heroSubText}
          text-white-100`}>
            I make front-end interfaces <br className="block sm:hidden"/> 
            into <span className="shine"> pieces of art</span>.
          </p>
        </div>
      </div>

        <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-32
      w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.div
              animate= {{
                y: [0, 24, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
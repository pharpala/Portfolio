import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { useEffect, useState } from 'react'


const ProjectCard = ({ index, name, description,
  tags, image, source_code_link, live_demo_link }) => {

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

  const returnStatement = () => (
    <>
      <div
        onClick={() => {
          if (live_demo_link === "#") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            window.open(live_demo_link, "_blank");
          }
        }}
        className='relative w-full sm:h-[295px] h-[225px] cursor-pointer
      '>
        <img 
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end
        m-3 card-img_hover'>
          <div 
            onClick={() => window.open
            (source_code_link, "_blank")}
              className='black-gradient rounded-full 
              w-10 h-10 flex justify-center 
              items-center cursor-pointer'
          >
            <img 
              src={github} 
              alt="github"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'> {name} </h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px]
            ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
      </div>
    </>
  )

  return (
    !isMobile ? (
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-black-100 p-5 rounded-2xl
          sm:w-[530px] w-[345px] '
        >
          {returnStatement()}
        </Tilt>
      </motion.div>
    ) : (
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      >
        <Tilt
          tiltEnable = {false}
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl
          sm:w-[530px] w-[315px] '
        >
          {returnStatement()}
        </Tilt>
      </motion.div>
    )
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> My work </p>
        <h2 className={styles.sectionHeadText}> Projects. </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 0.5)}
          className='mt-3 text-secondary text-[17px]
            max-w-3xl leading-[30px]'  
        >
          "You are the average of the five projects you 
          spend the most time on." - Elon Musk (Okay, I 
          may have made that up). Nevertheless, here are 
          some of the projects I have worked on recently. 
          Each project is briefly described with links to
          code repositories and live demos, so click on
          the picture and enjoy the show!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-16 pb-[80px]'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
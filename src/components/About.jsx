import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'



const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 
          index, 0.75)}
        
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5
          px-12 min-h-[280px] flex justify-evenly
          items-center flex-col'
        >
          <img src={icon} alt={title} 
          className='w-16 h-16 object-contain'/>
          <h3
            className='text-white text-[20px]
            font-bold text-center'
          >
          
            {title}
          </h3>

        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <> 
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview. </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)} 
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
        >
          I'm glad you found my site! I'm a <span className="text-[#FFD700]">Full 
          Stack Developer </span> & Student based from 
          
          <span className="text-[#ff0000]"> To</span>
          <span className="text-[#ffffffdf]">ron</span>
          <span className="text-[#FF0000]">to </span>
          
          studying Computer Science. I love creating 
          beautiful apps and solving problems with my 
          code. When I'm not coding, you can catch me 
          at the soccer field, and if you even checked under 
          the corner flag and can't find me, I'm probably
          watching Porsche 911 reviews on YouTube (I 
          literally can't wait to get one).
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 pb-[100px]'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index=
            {index} {...service} />
          ))}
      </div>
    </>

  )
}

export default SectionWrapper(About, "about")
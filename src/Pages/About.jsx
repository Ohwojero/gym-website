import React from 'react'
import '../Styles/About.css'
import { motion } from 'framer-motion'
import AboutList from '../Components/AboutList'


export const About = () => {


  return (
    <section className='about-section mt-5 py-5 ' id='#about'>
      <div className="container">
        <div className='row flex-column flex-lg-row '>
          <motion.div className="col-lg-8 d-flex flex-column
           align-items-start align-items-sm-start"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            <h2 className=''>WHO WE ARE</h2>
            <h1>i-FITNESS <span className='text-success'>GYM & WELLNESS</span> CENTRE</h1>

            <p>i-Fitness is a health and wellness company. With 21 branches across Nigeria, our highly equipped gym facilities complemented by the expertise of over 250 professionally certified personal trainers provide our members with a holistic and all-inclusive fitness and wellness experience. Our offerings include multi-location access and over 50 varied monthly fitness programs to suit and support the fitness lifestyles of our vast membership base.
              i-Fitness is committed to providing a youthful, entertaining yet rewarding fitness experience to many thousands of people, thereby promoting access to happier and healthier lives.

              i-Fitness is managed by a Board of Directors comprising seasoned professionals with extensive years of experience and a range of diverse specialities that complement the growth and development of the company.</p>
          </motion.div>
        </div>

        <div className="container">
            <AboutList />
        </div>
      </div>

    </section >
  )
}
export default About
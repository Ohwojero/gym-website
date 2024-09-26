import React from 'react'
import { motion } from 'framer-motion';
import '../Styles/Hero.css';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <header className='h-100 min-vh-100 d-flex align-items-center '>
        <div className='container'>
                <section className='row justify-content-center'>
                    <motion.div className='col-md-6 d-flex flex-column justify-content-start align-items-center align-item-sm-start' initial={{opacity:0, x:-300}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
                        <h2 className='text-white text-center text-sm-start text-uppercase fw-lighter'>Build Your Body</h2>
                        <h1 className='text-white text-center text-sm-start fw-bold text-uppercase lh-1'>Be <span>Fit</span><span>Healthy</span></h1>

                        <p className='text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium earum eos delectus. Magnam quibusdam provident id facere tempora maxime, atque in odit iste quas nihil mollitia repudiandae aperiam! Ipsum est a dignissimos, neque at ipsa tempora. Consequuntur, temporibus dolore. Provident!</p>

                        <p className='text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates corporis reprehenderit totam beatae quod optio. Amet nihil unde eligendi beatae magni eum quibusdam corporis asperiores error repellendus, nobis blanditiis, quam enim. Veritatis, aut alias enim at quae beatae unde?</p>
                    
                    <div className='d-flex justify-content-start gap-3'>
                       <Link to="join"> <button className='btn btn-success btn-lg'>Get Started</button></Link>

                        <button className='btn btn-light'>Learn More</button>
                    </div>
                    </motion.div>
                </section>
        </div>
        
    </header>
  )
}

export default Hero
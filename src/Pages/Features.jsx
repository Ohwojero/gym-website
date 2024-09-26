import React from 'react'
import {motion} from 'framer-motion';
import Container from 'react-bootstrap/Container';
import '../Styles/Feature.css'
import fea1 from '../Assets/fea1.jpeg'
const Features = () => {
  return (
    <div className=' feature-section py-4 py-sm-5 position-relative'>
          <motion.div className='second-feature position-absolute'
          initial={{opacity:0, x:300}} 
          whileInView={{opacity:1,x:0}} 
          transition={{duration:1}}>

          </motion.div>
            <div className="container">
                <motion.h2 initial={{opacity:1, x:300}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className='text-white'>
                    Our <span className='text-success '>Features</span>
                </motion.h2>
            </div>

          <Container>
            <div className='row'>
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-capitalize fw-bold text-white'>Let's train together</h2>
                    <p className='text-start text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio rem iure neque sunt molestiae quis saepe nesciunt, voluptatum ex.</p>


                  <div className='d-flex flex-column align-items-start justify-content-centent'>
                        <h4 className='text-white'>Tel:09020266783</h4>
                  </div>
                  <div>
                      <img src={fea1} alt="" className='img-fluid d-block' />
                  </div>
                </div>
            </div>
          </Container>

    </div>
  )
}

export default Features
import React from 'react'
import Container from 'react-bootstrap/Container'
import Btn from '../Components/Btn'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'



const JoinSection = () => {
  return (
    <div className='join-section py-5 text-dark '>
            <div className="container-fluid">
                <Container className='h-100'>
                    <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
                        <motion.h2 className='fw-bold text-uppercase text-white'initial={{opacity:0, x:-300}} transition={{duration:1}} whileInView={{opacity:1, x:0}}>
                                <span className='text-success'>Shape </span> Your Body
                        </motion.h2>

                        <motion.p className='text-center w-75 text-white' initial={{opacity:0, x:300}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptas sapiente laudantium provident illo illum mollitia officiis? Nam ipsam, placeat quae molestias eveniet tempore perspiciatis sapiente esse veniam quod voluptatum aperiam minima omnis eligendi modi inventore expedita consequatur magnam blanditiis temporibus tempora sunt minus. Aperiam earum necessitatibus consectetur dolorem unde.


                        </motion.p>

                                <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
                                   <Link to="/join"> <Btn title='Join Now'/></Link>
                                </motion.div>
                    </div>
                </Container>
            </div>
    </div>
  )
}

export default JoinSection
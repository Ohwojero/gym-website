import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Btn from './Btn';
const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top">
        <Container>
        <motion.a className='navbar-brand text-success fw-semibold'
        href='./' 
        initial={{opacity:0}} 
        whileInView={{opacity:1}} 
        transition={{duration:1}}>GYM WEBSITE</motion.a>
        
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='gt' />
          <Navbar.Collapse id="basic-navbar-nav " className='gt-1'>
            <Nav className="ms-auto justify-content-end d-flex gap-3">
              <Link to="/" className='bold text-success'>Home</Link>
              <Link to="/about" className='bold text-success'>About</Link>
              <Link to="/Features" className='bold text-success'>Features</Link>
              <Link to="/plans" className='bold text-success'>Plans</Link>
            </Nav>

                     <Link to="/join"> <motion.div className='p-4 '>
                      <Btn title="Join Now"/>
                    </motion.div>
                    </Link>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
    </div>
  )
}

export default Navigation
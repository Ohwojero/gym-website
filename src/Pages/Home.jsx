import React from 'react'
import { motion } from 'framer-motion'
import homeimage from '../Assets/homeimage.jpg'
import homeimage2 from '../Assets/homeimage2.jpg'
import { BiSolidCoinStack } from "react-icons/bi";
import { RiUninstallFill } from "react-icons/ri";
import { SiInstructure } from "react-icons/si";
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/Home.css'
const homeList = [
      {
            icon: <BiSolidCoinStack />,
            title: "Wide Range of Fitness Programs",
            desc: "Our timetable offers a wide range of low to high-intensity fitness programmes to suit your fitness lifestyle. There something everyone"
      },

      {
            icon: <RiUninstallFill />,
            title: "Supportive Community",
            desc: "Enjoy a sense of belonging in a community that supports your fitness goals and reminds you that you are not alone!",
      },

      {
            icon: <SiInstructure />,
            title: "Ultra-Modern Facilities",
            desc: "We have over 200 professionally certified personal trainers and ultra-modern facilities across all our branches in Lagos, Port Harcourt, Abuja and Ibadan."
      }
]


const Home = () => {
      return (
            <div className='py-5 py-sm-5' id='#home'>

                  <div className='container-fluid'>
                        <div className='d-flex justify-content-center ' style={{ marginTop: "2rem" }}>
                              <div className='bg-success w-75 bg-sm-none h-25 position-absolute box1 align-items-center justify-content-center d-flex d-sm-block'>
                                          <h3 className='text-white py-3 px-4 text-start'>Find a Centre close to you</h3>
                                    <div className='position-absolute bg-success w-100 h-50 align-items-center d-flex top-50 box2 '>

                                          <div className='homelink d-sm-flex align-items-center justify-content-center gap-4 px-5 w-100'>
                                                <NavDropdown title="Lagos" id="basic-nav-dropdown" className='drop-content'>
                                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.2">
                                                            Another action
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                      <NavDropdown.Divider />
                                                      <NavDropdown.Item href="#action/3.4">
                                                            Separated link
                                                      </NavDropdown.Item>
                                                </NavDropdown>
                                                <hr className=''/>

                                                <NavDropdown title="ABUJA" id="basic-nav-dropdown" className='drop-content'>
                                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.2">
                                                            Another action
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                      <NavDropdown.Divider />
                                                      <NavDropdown.Item href="#action/3.4">
                                                            Separated link
                                                      </NavDropdown.Item>
                                                </NavDropdown>

                                                <hr />

                                                <NavDropdown title="PORT HARCOURT" id="basic-nav-dropdown" className='drop-content'>
                                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.2">
                                                            Another action
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                      <NavDropdown.Divider />
                                                      <NavDropdown.Item href="#action/3.4">
                                                            Separated link
                                                      </NavDropdown.Item>
                                                </NavDropdown>

                                                <hr />

                                                <NavDropdown title="IBADAN" id="basic-nav-dropdown" className='drop-content'>
                                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.2">
                                                            Another action
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                      <NavDropdown.Divider />
                                                      <NavDropdown.Item href="#action/3.4">
                                                            Separated link
                                                      </NavDropdown.Item>
                                                </NavDropdown>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>


                  <div className='container' style={{ marginTop: "15rem" }}>

                        <div className='flex-column flex-lg-row row'>
                              <motion.div className='col-lg-6 d-flex justify-content-center'
                                    initial={{ opacity: 0, x: -300 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}>
                                    <img src={homeimage} alt="" className='img-fluid w-75 mt-lg-0 rounded' />
                              </motion.div>


                              <motion.div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' initial={{ opacity: 0, x: 350 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                                    <h2>Check <span className='text-success'>Our</span> Home</h2>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nostrum ab quidem velit expedita numquam, officiis fuga et exercitationem neque hic ex perferendis atque, possimus fugiat commodi ipsa asperiores quo alias? Aperiam doloribus dignissimos architecto atque, inventore similique cum hic deserunt iure veritatis labore debitis repudiandae fugiat vel voluptatibus natus.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae deleniti praesentium illo autem sapiente repudiandae ex. Fugit repudiandae aut aliquam ipsum quam nostrum alias perferendis, eius officia laborum officiis necessitatibus blanditiis porro dolorum cumque molestiae nisi, eveniet dicta quasi iusto facere amet doloremque commodi! Consequatur architecto a earum sapiente?</p>
                              </motion.div>
                        </div>

                  </div>

                  <div className=' container flex-column flex-lg-row row mx-auto' style={{ marginTop: "8rem" }}>
                        <motion.div className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
                              initial={{ opacity: 0, x: 350 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1 }}>
                              <h2>Why <span className='text-success'>i-</span> FITNESS</h2>
                              <h1 className='bolder fw-bold fs-3'>Unique experiences tailored to your lifestyle</h1>

                              {
                                    homeList.map(({ icon, title, desc }) => {
                                          return (
                                                <div className='d-flex gap-4 mt-5 '>
                                                      <div className='fs-1 mt-4 mt-lg-0'>
                                                            {icon}
                                                      </div>
                                                      <div>
                                                            <h2 className='fs-5 fw-semibold'>{title}</h2>
                                                            <p>{desc}</p>
                                                      </div>
                                                </div>
                                          )
                                    })
                              }


                        </motion.div>

                        <motion.div className='col-lg-6 d-flex justify-content-center'
                              initial={{ opacity: 0, x: -300 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 1 }}>
                              <img src={homeimage2} alt="" className='img-fluid w-100 mt-lg-0 rounded' />
                        </motion.div>
                  </div>

            </div>
      )
}

export default Home
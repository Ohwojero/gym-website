import React from 'react'
import {motion} from 'framer-motion'
import '../Styles/Plans.css'
import PlanList from '../Components/PlanList'

const Plans = () => {
  return (
    <div className='py-4 py-sm-5'>
        <div className='container'>
            <motion.h2 className='fw-bold text-capitalize mb-4 mb-sm-5' 
            initial={{opacity:0}} 
            whileInview={{opacity:1}} 
            transition={{duration:1}}>
                Our<span className='text-success'>Plans</span>
            </motion.h2>

            <PlanList />
        </div>
    </div>
  )
}

export default Plans
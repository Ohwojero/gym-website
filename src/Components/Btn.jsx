import React from 'react'
import '../Styles/Btn.css'
const Btn = ({title}) => {
  return (
    <div>
        <a href="/" className='purple-btn border-0 text-capitalize text-light text-decoration-none text-nowrap bg-success rounded'>{title}</a>
    </div>
  )
}

export default Btn
import React from 'react'
import '../Styles/Join.css'
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion'
export const Join = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0feaef09-a46c-4e38-b7f0-934c9850c8c1");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='join'>
          
            <div className='join-section row py-5 gap-4 px-4 mb-5 mb-lg-0 '>
                <div className='join-left col-md'>
                    <div className='send'>
                        <h3 className='text-white'>Send us a <span className='text-success'>message</span> </h3>
                        {/* <img className='messageicon' src={messageicon} alt="" /> */}
                    </div>
                    <p className='text-white'>feel free to reach out through contact form or find our contact
                        information below. Your feedback, question and suggestions are important
                        are import to us as we strive to prvide exceptional service to our
                        university community.
                    </p>

                    <div className='join-icon'>
                        <div className='icon-details text-white'>
                            <CiMail className='icon text-light'/>
                            <p>Ohwojerogodstime@gmail.com</p>
                        </div>
                        <div className='icon-details text-white'>
                            <FaPhone className='icon text-light'/> 
                            <p>0902026683</p>
                        </div>
                        <div className='icon-details text-white '>
                            <FaLocationDot className='icon text-light' />
                            <p>No:4 Agbor,Delta state</p>
                        </div>
                    </div>
                </div>
                <div className='join-right col-md'>
                    <motion.form onSubmit={onSubmit} initial={{opacity:0, y:100}} whileInView={{ opacity:1, y:0}} transition={{duration:1}}>
                        <label htmlFor="" className='text-white'>Your name</label>
                        <input type="text" name="" id="" placeholder='Enter your name' required />

                        <label htmlFor="" className='text-white'>Phone Number</label>
                        <input type="number" placeholder='Enter your mobile number' required />

                        <label htmlFor="" className='text-white'>Write Your Message Here</label>
                        <textarea name="" id=""></textarea>

                        <div className=''>
                            <button type='submit' className='btn three'>submit Now <FaArrowRight /></button>
                        </div>
                    </motion.form>
                    <span className='text-white'>{result}</span>
                </div>
            </div>

        </div>
    )

}
export default Join

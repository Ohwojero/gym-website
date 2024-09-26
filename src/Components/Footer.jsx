import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Footer = () => {

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
    <div className='container-fluid py-5 bg-success pb-5'>
      <div class="row align-items-center text-align-center text-center justify-content-center gap-4">
        <div class="col-md text-start text-black">
          <h1>I-Fitness</h1>
          <p className='lead'>We are a 360-health and wellness company and the leading and fastest-growing fitness chain. With over 200 professionally certified personal trainers, ultra-modern gym facilities and over 40 free fitness classes weekly, we give our members a holistic experience to suit
            and support their fitness lifestyle.</p>

          <div className='media-links d-flex gap-4 mt-5'>
            <Link><CiFacebook className='icon bg-white fs-3 rounded py-1 px-1 ' /></Link>
            <Link> <BsTwitterX className='icon bg-white fs-3 rounded py-1 px-1' /></Link>
            <Link> <CiYoutube className='icon bg-white fs-3 rounded py-1 px-1' /></Link>
            <Link><CiInstagram className='icon bg-white fs-3 rounded py-1 px-1' /></Link>
          </div>
        </div>



        <div className="col-md text-sm-start d-flex flex-column other-footer-links">
          <h3 className='text-black'>QUICK LINKS</h3>
          <Link>LOCATION</Link>
          <Link>CONTACT US</Link>
          <Link>ANNUAL DUS FAQ</Link>
          <Link>NEWS $ EVENTS</Link>
          <Link>CORPORATE PLANS</Link>
          <Link>MEMBERSHIP PLANS </Link>
        </div>


        <div className="col-md text-sm-start text-start text-black">
          <h3>WORKING HOURS</h3>
          <p>MONDAY-FRiDAY </p>
          <p>SATURDAY</p>
          <p>PUBLIC HOLIDAYS</p>
          <p>DEEP CLEANING</p>
          <p>CLOSED</p>
        </div>

        <div class="col-md text-sm-center">
          <h4 className='text-black'>FOR LATEST NEWS & UPDATES</h4>
          <h5 className='text-black'>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <form action=""onSubmit={onSubmit}>
          <div className='inputone'>
            
              <input type="text" placeholder='Your Name' className='border-0' />
              <input type="email" placeholder='example@email.com' className='border-0' />

          </div >

          <button type='submit ' className='footer-btn border-0 py-2 px-3 rounded'>SUBSCRIBE</button>

        </form>
        <span className='text-white'>{result}</span>
      </div>



    </div>

    </div >
  )
}

export default Footer
import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
const Footer = () => {
    const [checked, setChecked] = useState(false);
    const [email,setEmail] = useState("");

    const timerId = useRef(null);

    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
          /* you can also use 'auto' behaviour 
             in place of 'smooth' */
        }); 
      }; 
      
 
    useEffect(() => {
        if (checked) {
 
            //Creating a timeout
            timerId.current = setTimeout(() => {
                setChecked(false);
            }, 5000);
        }
 
        return () => {
            //Clearing a timeout
            clearTimeout(timerId.current);
        };
    }, [checked]);
 
    function SubmitHandler(e) {
        e.preventDefault();
        setEmail("");
        setChecked(true);
    }

  return (
    <div className='bg-gray-200 mt-11 p-0'>
        <div className='w-11/12 mx-auto '>
            <div className='flex justify-center'> 
                <div onClick={scrollToTop} className='flex items-center gap-2 hover:cursor-pointer'>
                    <IoIosArrowUp />
                    <p>Back to top</p>
                </div>
            </div>

            {/* upper footer */}
            <div className='md:flex justify-between'>
                <div className="sm:flex lg:gap-20 md:w-8/12 justify-between lg:justify-normal">
                    <div>
                        <h1 className='font-bold text-2xl'>Company</h1>
                        <div className="flex flex-col gap-2">
                        <a href="/AboutUs" className='hover:underline'>About Us</a>
                        <Link to="/sellOnEcoyaan" className='hover:underline'>Sell on Ecoyaan</Link>
                        <Link to="/careers" className='hover:underline'>Careers</Link>
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-2xl'>Links</h1>
                        <div className="flex flex-col gap-2">
                        <Link to="privacyPolicy" className='hover:underline'>Privacy policy</Link>
                        <Link to="termsOfUse" className='hover:underline'>Terms of use</Link> 
                        </div>
                        
                    </div>

                    <div>
                        <h1 className='font-bold text-2xl'>Follow Us</h1>
                        <div className="flex gap-2 text-2xl">
                        <Link to="https://www.instagram.com/ecoyaan" target="_blank" className='text-pink-600 transition ease-in-out duration-200 hover:scale-110'><AiOutlineInstagram /></Link>
                        <Link to="https://www.linkedin.com/company/ecoyaan/" target="_blank" className='text-blue-600 transition ease-in-out duration-200 hover:scale-110'><FaLinkedin /></Link>
                        <Link to="https://www.facebook.com/Ecoyaan/" target="_blank" className='text-blue-800 transition ease-in-out duration-200 hover:scale-110'><FaFacebook /></Link>
                        </div>
                    </div>
                </div>

                <div className='md:w-4/12 mt-9 sm:mt-0'>
                    <div>
                        <h1 className='text-xl'>Subscribe to receive updates on blogs, future launches and more !</h1>
                    </div>
                    <form className='py-4' onSubmit={SubmitHandler}>
                        <input type="email" placeholder='Enter your email' className='w-full p-2 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <div className='text-xs my-4 w-10/12'>By subscribing, you agree to receive notifications<br/>
                        <a href='/' className='text-blue-600'> Privacy Policy</a></div>
                        <button type="submit" className='bg-green-600 text-white p-2 rounded w-full hover:bg-green-800'>Subscribe</button>
                    </form>


                    {
                        checked && <div className='flex text-xl mt-4 w-full h-11 px-auto transition duration-500'>
                            <div className='flex gap-2 items-center w-full mx-20'>
                                <div className='text-green-600'><FaRegCheckCircle /></div>
                                <div >Subscribed successfully!</div>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>

            {/* add baseline */}
            <div className='min-h-0.5 w-full bg-gray-300 my-16'></div>

            {/* lower footer */}
            <div className='sm:flex justify-between w-7/12 '>
                <div>
                    <h1 className='text-xl font-bold'>
                    Registered Address:
                    </h1>

                    <div className='text-lg'>
                        1-N-12T-781/1<br/>
                        Sri Krishna Vilasa,<br/>
                        Urvastores,<br/>
                        Ashoknagar(MR),<br/>
                        Mangalore,<br/>
                        Dakshina Kannada- 575006,<br/>
                        Karnataka, India<br/>
                    </div>
                </div>

                <div>
                    <h1 className='text-xl font-bold'>
                    Legal Business Name:
                    </h1>

                    <div className='text-lg'>
                        <div>
                        Kindkarma E-Retail Private Limited
                        <br/>
                        <br/>
                        CIN: U47912KA2023PTC182592<br/>
                        Telephone: +91 9980490777
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full bg-gray-900 mt-16 text-white flex mx-auto text-center h-16 items-center'>
                <div className='mx-auto'> © 2023 - 2024, Ecoyaan <sup>TM</sup></div>
        </div>   
    </div>
  )
}

export default Footer

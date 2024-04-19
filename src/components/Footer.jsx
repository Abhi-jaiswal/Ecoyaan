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
        <div className='mx-auto '>
            <div className='flex justify-center'> 
                <div onClick={scrollToTop} className='flex items-center gap-2 hover:cursor-pointer'>
                    <IoIosArrowUp />
                    <p>Back to top</p>
                </div>
            </div>

            {/* upper footer */}
            <div className='flex justify-start align-top md:items-start md:space-x-8 items-start flex-col md:flex-row md:justify-center text-start p-6 md:p-8 xl:p-12 xl:pl-4 lg:justify-around text-gray-500 gap-8'>
                <div>
                    <h1 className='font-semibold text-[20px] mb-[8px] text-black'>Company</h1>
                    <div className="flex flex-col">
                    <a href="/AboutUs" className='hover:underline'>About Us</a>
                    <Link to="/sellOnEcoyaan" className='hover:underline mt-[8px]'>Sell on Ecoyaan</Link>
                    <Link to="/careers" className='hover:underline mt-[8px]'>Careers</Link>
                    </div>
                </div>

                <div>
                    <h1 className='font-semibold text-[20px] mb-[8px] text-black'>Links</h1>
                    <div className="flex flex-col">
                    <Link to="/privacyPolicy" className='hover:underline '>Privacy policy</Link>
                    <Link to="/termsOfUse" className='hover:underline mt-[8px]'>Terms of use</Link> 
                    </div>
                    
                </div>

                <div>
                    <h1 className='font-semibold text-[20px] mb-[8px] text-black'>Follow Us</h1>
                    <div className="flex gap-2 text-2xl">
                    <Link to="https://www.instagram.com/ecoyaan" target="_blank" className='text-pink-600 transition ease-in-out duration-200 hover:scale-110'><AiOutlineInstagram /></Link>
                    <Link to="https://www.linkedin.com/company/ecoyaan/" target="_blank" className='text-blue-600 transition ease-in-out duration-200 hover:scale-110'><FaLinkedin /></Link>
                    <Link to="https://www.facebook.com/Ecoyaan/" target="_blank" className='text-blue-800 transition ease-in-out duration-200 hover:scale-110'><FaFacebook /></Link>
                    </div>
                </div>

                <div className='md:w-4/12 mt-9 sm:mt-0'>
                    <div>
                        <h1 className='text-md mb-4 text-left'>Subscribe to receive updates on blogs, future launches and more !</h1>
                    </div>
                    <form className='' onSubmit={SubmitHandler}>
                        <input type="email" placeholder='Enter your email' className='w-full p-[8px] rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <div className='text-[12px] mt-[12px]'>By subscribing, you agree to receive notifications<br/>
                        <a href='/privacyPolicy' className='text-blue-600'> Privacy Policy</a></div>
                        <button type="submit" className='bg-green-600 text-white py-[8px] px-[16px] rounded w-full hover:bg-green-800 mt-4'>Subscribe</button>
                    </form>


                    {
                        checked && <div className='flex text-[16px] md:text-[20px] m-4 w-100% justify-center mx-auto transition duration-500 px-auto'>
                            <div className='flex gap-2 items-center justify-center w-full mx-auto'>
                                <div className='text-green-600'><FaRegCheckCircle /></div>
                                <div >Subscribed successfully!</div>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>

            {/* add baseline */}
            <div className='min-h-0.5 w-11/12 bg-gray-300 mx-auto'></div>

            {/* lower footer */}
            <div className=' text-gray-500 flex justify-start md:space-x-8 md:items-start flex-col md:flex-row md:p-[48px] p-[24px] xl:p-12 align-top items-start md:justify-center text-start lg:justify-around xl:justify-normal gap-[24px]'>
                <div>
                    <h1 className='md:text-xl font-semibold mb-2 text-[20px] text-black'>
                        Registered Address:
                    </h1>

                    <div className='md:text-[19.2px] text-[16px]'>
                        1-N-12T-781/1<br/>
                        Sri Krishna Vilasa,<br/>
                        Urvastores,<br/>
                        Ashoknagar(MR),<br/>
                        Mangalore,<br/>
                        Dakshina Kannada- 575006,<br/>
                        Karnataka, India<br/>
                    </div>
                </div>

                <div className='md:ml-[32px]'>
                    <h1 className='md:text-xl font-semibold mb-2 text-[20px] text-black'>
                        Legal Business Name:
                    </h1>

                    <div className='md:text-[19.2px] text-[16px]'>
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

        <div className='w-full bg-black text-white flex mx-auto text-center py-2 items-center'>
                <div className='mx-auto'> © 2023 - 2024, Ecoyaan <sup>TM</sup></div>
        </div>   
    </div>
  )
}

export default Footer

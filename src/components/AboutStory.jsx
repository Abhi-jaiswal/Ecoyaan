import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const AboutStory = () => {
  return (
    <div className='md:bg-[#F1FDFD] md:py-4 md:p-[1rem] w-0 h-0 invisible md:visible md:w-full md:h-full xs:visible'>
      <div className='mx-auto xl:p-12'>
        <h1 className='text-3xl font-bold'>
        Our Story
        </h1>

        <div className='flex'>
            <div className=" w-[200px] m-[10px]">
                <img src="https://ecoyaan.com/images/about-us-founding-team-01.png" className='h-[200px] object-contain transition ease-in-out delay-150 duration-300 hover:scale-110'/>
                <img src="https://ecoyaan.com/images/about-us-founding-team-02.png" className='h-[200px] object-contain transition ease-in-out delay-150 duration-300 hover:scale-110'/>
            </div>

            <div className='mt-[24.4px] ml-[24.4px] w-full'>
                <div className='text-[19.2px]'>
                  We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
                  <br/>
                  <br/>
                  Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
                  <br/>
                  <br/>
                  We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
                  <br/>
                  <br/>
                  As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.
                  <br/>
                  <br/>

                  <div className='flex gap-4'>
                    Connect with the founders on LinkedIn here: <a className='text-blue-600 flex items-center hover:underline' href='https://www.linkedin.com/company/ecoyaan'>Abhishek Rao <FaLinkedin /> </a> <a className='text-blue-600 flex items-center hover:underline' href='https://www.linkedin.com/in/sarwanjeet-singh'>  Sarwanjeet Singh <FaLinkedin /></a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutStory

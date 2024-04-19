import React from 'react'

const AboutIntro = () => {
  return (
    <div className='bg-[#F1FDFD]'>
      <div className='md:flex justify-between xl:p-[12px]'>
      
        <div className='md:w-5/12 ml-5 w-11/12'>
            <h1 className='text-[20px] md:text-[30px] font-semibold'>About Ecoyaan</h1>

            <div className='mt-5'>
            At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
            <br/><br/>
            We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
            </div>

            <div className='mt-5'>
                <ul>
                    <li className='flex m-2'>
                        <img src="https://ecoyaan.com/images/favicon.png" className='w-5 h-5'/> Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                    <li className='flex m-2'>
                        <img src="https://ecoyaan.com/images/favicon.png" className='w-5 h-5'/> Videos, posts, and quizzes on climate change and sustainability</li>
                    <li className='flex m-2'>
                        <img src="https://ecoyaan.com/images/favicon.png" className='w-5 h-5'/> Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                </ul>

            </div>
        </div>

        <div className='md:w-5/12 m-10 w-11/12 mx-auto'>
            <img src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png" className='h-[320px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110'></img>
        </div>

      </div>

      <div className='w-11/12 mx-auto pb-10 md:w-0 md:h-0 md:my-0 md:invisible'>
          <div>
          Our mission does not end there. Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits
          </div>

          <video src='https://ecoyaan.com/images/ProductCuration.mp4' autoPlay loop className=" object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110 m-[24px] mx-auto"></video>
          <div>
          We invite you to join us and discover the amazing products and stories that we have to offer. Together, we can make the journey towards sustainability easier.
          </div>
        </div>
    </div>
  )
}

export default AboutIntro

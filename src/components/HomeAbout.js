import React from 'react'
import ContactUsBtn from './ContactUsBtn';

const HomeAbout = () => {
  return (
    <div>
      <div className='mx-auto w-11/12'>
        <div className='sm:flex justify-between py-10'>
            <div className='sm:w-6/12 gap-4'>
                <h1 className='text-3xl pb-3 font-bold'>Join our community in creating a more sustainable future for everyone</h1>

                <p>
                At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
                <br/>
                <br/>
                Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
                </p>
            </div>

            <div className=''>
                <img src='https://ecoyaan.com/images/Impact.png' className="h-[320px] w-full object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110"/>
            </div>
        </div>
        

        <div className='sm:flex justify-between py-10'>
            <div className='sm:w-6/12 gap-4'>
                <h1 className='text-3xl pb-3 font-bold'>Carefully curated Eco-friendly products</h1>

                <p>
                We believe that every purchase you make can have a positive impact on the planet and the future.
                <br/>
                <br/>
                Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
                </p>
            </div>

            <div className=''>
                <video src='https://ecoyaan.com/images/ProductCuration.mp4' autoPlay loop className="h-[320px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110"/>
            </div>
        </div>

        <div className='sm:flex justify-between py-10'>
            <div className='sm:w-6/12 gap-4'>
                <h1 className='text-3xl pb-3 font-bold'>For businesses that care deeply about sustainability</h1>

                <p>
                Do you run a business that is committed to sustainability in every aspect of your work?
                <br/>
                <br/>
                Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
                </p>
            </div>

            <div className=''>
                <img src='https://ecoyaan.com/images/OurStory4.png' className="h-[320px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110"/>
            </div>
        </div>

        <div className='sm:flex justify-between pb-10 sm:w-1/2'>
            If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:
        </div>
        <ContactUsBtn/>
      </div>
    </div>
  )
}

export default HomeAbout;

import React from 'react'
import HomeAbout from '../components/HomeAbout'
import Carousel from '../components/carousel'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mx-auto w-full'>
      <Carousel/>
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home

import React from 'react'
import AboutIntro from '../components/AboutIntro'
import AboutValues from '../components/AboutValues'
import AboutStory from '../components/AboutStory'
import AboutTeam from '../components/AboutTeam'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <AboutIntro />
      <AboutValues/>
      <AboutStory/>
      <AboutTeam/>
      <Footer/>
    </div>
  )
}

export default AboutUs

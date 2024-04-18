import React from 'react'
import { Link } from 'react-router-dom'

const ContactUsBtn = () => {
  return (
    <div className='w-10/12'>
      <Link to="/contactus">
        <div className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 w-32 rounded'>
            Contact Us 
        </div>
      </Link>
    </div>
  )
}

export default ContactUsBtn

import React from 'react'
import './Carousel.css'
import { Data } from './Data'
import { useState, useEffect } from 'react'
function Carousel({images}) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = autoPlay &&
    setTimeout(() => {
      slideRight();
    },5000);
  })
  const slideLeft = () => {
    setCurrent(current === 0 ? Data.length - 1 : current - 1)
  }
  const slideRight = () => {
    setCurrent(current === Data.length - 1 ? 0 : current + 1)
  }
  return (
    <div>
        <div className='h-[600px] w-full overflow-x-hidden relative'>  
            {
              Data.map((image,indx) => {
                return (
                  <div key={indx} className={
                    indx == current 
                    ? "carousel_card carousel_card-active" : "carousel_card"
                  }>

                    <img src={image.src} alt="" className='card_img object-cover'/>

                    <div className='card_overlay flex flex-col '>
                      <div className=''>
                        <h1 className='text-[20px] md:text-[20px] text-black font-bold'>{image.title}</h1>
                        <p className='text-black text-[12px] md:text-[20px]'>{image.desc}</p>
                      </div>
                      <button className='bg-green-600 hover:bg-green-800 text-white py-2 px-3 rounded-3xl mt-10 w-36 sm:text-[19.2px] text-[10px]' onClick={() => window.open(image.link)}>{image.btn}</button>
                    </div>
                  </div>
                )
              })
            }
            {/* <div className='carousel_arrow_left' onClick={slideLeft}>&lsaquo;</div>
            <div className='carousel_arrow_right' onClick={slideRight}>&rsaquo;</div> */}

            <div className='carousel_pagination'>
            {Data.map((_,indx)=>{
              return (
                <div
                key={indx}
                className={
                  indx == current
                  ? "pagination_dot pagination_dot-active"
                  : "pagination_dot"
                }
                onClick={() => setCurrent(indx)}
                ></div>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Carousel

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { TeamData } from './TeamData';

const AboutTeam = () => {
  return (
    <div>
      <div className='w-11/12 mx-auto pt-14'>
        <h1 className='text-3xl font-bold'>
        Meet the Team
        </h1>

        <div className='mt-5 grid grid-flow-row sm:grid-cols-3 gap-10 text-xl w-full grid-cols-1'>
            {
              TeamData.map((item,indx) => {
                return (
                <div className={`items-center mx-auto p-[8px] rounded-lg shadow-xl shadow-slate-300 ${indx == 0 || indx == 2 || indx == 4 ? "bg-white" : "bg-[#F1FDFD]"}`}>
                      <div className='flex flex-col items-center'>
                        <img src={item.src} className='h-[200px] object-scale-down rounded-full mb-5 transition ease-in-out duration-300 hover:scale-110'/>
                        <h1 className='text-xl font-bold'>{item.name}</h1>
                        <h1 className='text-xl text-red-500'>{item.role}</h1>
                      </div>

                      <div className='mt-5'>
                        {item.about} <div>
                        {
                          item.link && <a className='text-blue-600 items-center gap-1 inline-flex' href={item.link}> {item.linkName} 
                          {
                            item.icons && <FaInstagram  className='text-pink-600'/> 
                          } </a>
                        }
                        </div>
                      </div>
                  </div>
              )})
            }
        </div>
      </div>
    </div>
  )
}

export default AboutTeam

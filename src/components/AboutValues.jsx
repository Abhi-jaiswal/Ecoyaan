import React from 'react'

const AboutValues = () => {
  return (
    <div>
      <div className='p-10'>
        <h1 className='text-[20px] md:text-[30px] font-bold pb-5'>
            Our Values
        </h1>

        <div className=''>
            <div className='grid sm:grid-flow-row sm:grid-cols-2 gap-5 grid-cols-1'>
                <div className='flex justify-between flex-col-reverse md:flex-row'>
                    <img src="https://ecoyaan.com/images/Trust.png" className='h-[100px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110'/>

                    <div>
                        <h1 className='text-[19.2px] font-semibold'>
                            Trust
                        </h1>

                        <div>
                        We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.
                        </div>
                    </div>
                </div>


                <div className='flex justify-between flex-col-reverse md:flex-row'>
                    <img src="https://ecoyaan.com/images/Authenticity.png" className='h-[100px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110'/>

                    <div>
                        <h1 className='text-[19.2px] font-semibold'>
                        Authenticity
                        </h1>

                        <div>
                        We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.
                        </div>
                    </div>
                </div>


                <div className='flex justify-between flex-col-reverse md:flex-row'>
                    <img src="https://ecoyaan.com/images/Impact.png" className='h-[100px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110'/>

                    <div>
                        <h1 className='text-[19.2px] font-semibold'>
                        Impact
                        </h1>

                        <div>
                            We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.
                        </div>
                    </div>
                </div>


                <div className='flex justify-between flex-col-reverse md:flex-row'>
                    <img src="https://ecoyaan.com/images/FunAndEngaging.png" className='h-[100px] object-scale-down transition ease-in-out delay-150 duration-300 hover:scale-110'/>

                    <div>
                        <h1 className='text-[19.2px] font-semibold'>
                        Fun & Engaging
                        </h1>

                        <div>
                        Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutValues

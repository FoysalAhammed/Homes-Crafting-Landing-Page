import React from 'react'
import HouseImg from "../assets/i1.jpg"
const CallToAction = () => {
  return (
    <div className='bg-secondary'>
        <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
            <img src={HouseImg} className='w-full md:w-1/2 md:h-full object-contain' alt="house" />
            <div className="p-10">
                <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">FInd Out Wha It Costs</h5>
                <p className="text-sm text-darkBlue leading-6 text-justify mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam pariatur deserunt a necessitatibus praesentium eum mollitia odio voluptates ipsam, dignissimos ex perspiciatis incidunt nemo, maxime iusto ullam adipisci quam!</p>
                <button className='primary-btn'>GET ESTIMATED</button>
            </div>
        </div>
    </div>
  )
}

export default CallToAction
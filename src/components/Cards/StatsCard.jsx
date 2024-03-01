import React from 'react'

const StatsCard = ({label,count,iconUrl}) => {
  return (
    <div className='min-w-48 flex flex-col items-center justify-center py-6 sm:py-14'>
        <div className="w-14 h-14 flex justify-center bg-lightBlue rounded-full"><img className='w-6' src={iconUrl} alt="" /></div>
        <p className=" text-xl md:text-2xl text-darkBlue font-medium mt-4">{count}</p>
        <span className="text-sm md:text-md text-darkBlue mt-1">{label}</span>
    </div>
  )
}

export default StatsCard
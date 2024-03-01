import React from 'react'
import logo from "../assets/logos.png"
const Footer = () => {
  return (
<>
<div className='max-w-[1200px] bg-dimBlue mx-auto'>
        <div className=" flex flex-col items-center justify-center p-8">
            <img src={logo} alt="" className="w-20 mb-6"/>
            <ul className='flex justify-center gap-6 flex-wrap'>
                <li><a className="text-xs text-darkBlue hover:font-medium" href="">About Us</a></li>
                <li><a className="text-xs text-darkBlue hover:font-medium" href="">Contact Us</a></li>
                <li><a className="text-xs text-darkBlue hover:font-medium" href="">Services Us</a></li>
                <li><a className="text-xs text-darkBlue hover:font-medium" href="">Terms and Conditions</a></li>
                <li><a className="text-xs text-darkBlue hover:font-medium" href="">Get Quotes</a></li>
            </ul>
        </div>
    </div>
    <div className="bg-darkBlue text-md text-white text-center p-5">All RIghts Reserved Foysal Ahammed</div>
    </>
  )
}

export default Footer
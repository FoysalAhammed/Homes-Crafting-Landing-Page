import React from 'react'
import GalleryImg1 from "../assets/i1.jpg"
import GalleryImg2 from "../assets/i3.jpg"
import GalleryImg3 from "../assets/i2.jpg"
import GallerImg4 from "../assets/i4.jpg"

const OurWork = () => {
  return (
    <section id='our-work' className='max-w-[1200px] pt-8 mx-auto'>
        <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">Our Work</h5>
        <div className=" grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
            <div className="md:col-span-2"><img src={GalleryImg1} alt="" className='gallery-img' /></div>
            <div className=""><img src={GalleryImg2} alt="" className='gallery-img' /></div>
            <div className=""><img src={GalleryImg3} alt="" className='gallery-img' /></div>
            <div className=""><img src={GallerImg4} alt="" className='gallery-img' /></div>
            <div className=""><img src={GalleryImg2} alt="" className='gallery-img' /></div>
            <div className="md:col-span-2"><img src={GalleryImg1} alt="" className='gallery-img' /></div>
        </div>
    </section>
  )
}

export default OurWork
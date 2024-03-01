import React from 'react'
import HeroImg1 from "../assets/img1.jpg"
import HeroImg2 from "../assets/img2.jpg"
import HeroImg3 from "../assets/img3.jpg"
const Hero = () => {
  return (
    <section id='hero' className='max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row'>
        <div className="flex-1 text-center md:text-left">
            <h2 className='text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>Building Dreams, Crafting Homes</h2>
            <p className=" text-sm leading-6 text-darkBlue mb-6 md:w-4/5 ">Turn dreams into homes. Explore our exceptionsal ccraftsmanship and envision your perfect space</p>
            <button className="primary-btn">Explore Our Projects</button>
        </div>
        <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
            <img src={HeroImg1} className='hero-img'  alt="img one" />
            <img src={HeroImg2} className='hero-img mt-[5%]'  alt="img two" />
            <img src={HeroImg3} className='hero-img'  alt="img three" />
        </div>
    </section>
  )
}

export default Hero
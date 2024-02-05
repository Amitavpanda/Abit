import Image from 'next/image'
import React from 'react'
import CoverImage from "../public/coverImage.svg";
import Profile from './Profile';
function Hero() {
  return (
    <div className='relative  flex-col'>
        {/* Image */}
        <Image src={CoverImage} alt='image of hero section' className='w-full h-[31rem] object-cover object-center'/>
        <div className='bg-black-30 w-full h-[5rem] flexCenter'>
            <p className='font-gloria-hallelujah text-white-100 whitespace-nowrap '>John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill / Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator / Moved to NYC / 27.11.22 / Live now</p>
        </div>
        <div className='absolute -bottom-20 left-20'>
          <Profile />
        </div>
    </div>
  )
}

export default Hero
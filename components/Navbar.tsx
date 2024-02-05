import Image from 'next/image'
import React from 'react'
import Logo from "../public/Logo.png";
import Notification from "../public/notification.png";
import { NavbarItems } from '@utils/constants';


function Navbar() {
  return (
    <div className=' max-container padding-container px-10 flexBetween'>
        {/* Left */}
        <div className='bold-24 text-black-100'>a<span className='uppercase'>B</span>it</div>

        {/* RIght */}
        <div className='flex-row flex items-center justify-end gap-4 '>
            <button className='rounded-3xl px-6 py-2 border border-violet-100 text-violet-100 font-bold'>Share new video</button>
            {NavbarItems.map((menuItem) => (
                <>
                <Image src={menuItem.src} alt={menuItem.alt}/>
                </>
            ))}
        </div>
    </div>
  )
}

export default Navbar
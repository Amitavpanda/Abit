import React from 'react'
import Pic1 from "../public/Pic1.svg"
import Image from 'next/image'

function Profile() {
  return (
    <div className='flex flex-row rounded-3xl border-black-100  shadow-2xl w-[40rem]'>
      {/* Image */}
      <div className=''>
        <Image src={Pic1} alt="image of a boy" />
      </div>
      {/* right column */}
      <div className='flex flex-col padding-container bg-cover rounded-r-3xl' style={{ backgroundImage: `url("backgroundDiv.jpg")`, backgroundSize: 'cover', width: '405px' }}>
        {/* header */}
        <div className='flex items-center gap-10'>
          <h2 className='bold-28 uppercase'>DAN MACE</h2>
          <p className='regular-24 text-black-20'>/Johny_Films/</p>
        </div>

        {/* bio */}
        <div className='flex-col flexStart'>
          <p className='text-black-20 bold-20'>Bio</p>
          <p className='text-black-20 regular-20'>Simply a film fan creating original </p>
          <p className='text-black-20 regular-20'>content for YouTube. Let’s Collaborate.</p>
        </div>

        {/* button */}

        <div className='flex flex-row mt-5 rounded-md border w-80'>
          <div className='rounded-md text-center bg-transparent border w-40 border-black-100 z-20'>Creator</div>
          <div className='bg-black-30 z-20 rounded-r-md w-40 h-full'></div>
        </div>
      </div>

    </div>
  )
}

export default Profile






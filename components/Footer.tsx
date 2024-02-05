import React from 'react'
import Logo from "../public/Logo.png";
import Image from 'next/image';
import BigLine from "../public/BigLine.png"
import { FooterItems } from '@utils/constants';
function Footer() {
    return (
        <div className=' flex flex-row justify-between max-container mt-10 mb-20'>
            <div className='flex flex-col'>

                <div className='bold-40 text-black-100'>a<span className='uppercase'>B</span>it</div>

                <div className='mt-5'>
                    <p className='text-black-100 regular-20'>Changing the way in which </p>
                    <p className='text-black-100 regular-20'>creators and fans interact</p>
                </div>


            </div>

            <div className='flex flex-row gap-5'>
                <Image src={BigLine} alt='image of a big line'/>

                <div className='flex flex-col gap-y-5'>
                    {FooterItems.map((footerItem) => (
                        <>
                            <p className='text-black-100 bold-16'>{footerItem.name}</p>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
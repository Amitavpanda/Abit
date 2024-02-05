import React from 'react'
import Line from "../public/Line.png"
import Image from 'next/image'
import { InfoItems } from '@utils/constants'

function Items() {
    return (
        <div className='flex-row flexCenter'>

        </div>
    )
}

function Info() {
    return (
        <div className=' max-container mt-[10rem] flex-row flexBetween padding-container'>
            {/* left */}
            <div className='flex flex-col'>
                <p className='regular-24 text-black-100'>Releases</p>
                <p className='regular-16 font-reckless-neue text-black-20'>Videos that you upload in collaboration with aBit appear here.</p>
            </div>

            {/* right */}
            <div className='flex-row flexBetween p-3 gap-5'>
                {InfoItems.map((item) => (

                    <>
                        <div className='flex-1'>
                            <Image src={Line} alt="image of a line" />
                        </div>

                        <div className='flex flex-col'>
                            <div className='text-black-100 bold-16'>{item.num}</div>

                            <div className='flex flex-col mt-2'>
                                <p className='text-black-20 regular-14'>{item.firstLine}</p>
                                <p className='text-black-20 regular-14'>{item.lastLine}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Info
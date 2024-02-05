import Image from 'next/image'
import React from 'react'
import Plus from "../public/Plus.png";
import { CardItems } from '@utils/constants';
function Cards() {
    return (
        <div className='flex flex-row max-container gap-10'>
            {/* Card 1 */}
            <div className=' relative bg-black-10 flex-col flexCenter w-[17rem] h-[20rem] p-6 rounded-3xl shadow-xl'>
                <div className=' flex-col flexCenter flex-1 '>
                    <Image src={Plus} alt='image of a line' />
                </div>
                <div className='mx-auto'>
                    <p className='text-black-5 text-wrap text-center '>You haven’t uploaded any videos with aBit yet. Add now!</p>
                </div>
            </div>
            {/* card 2 */}

            <div className='flex flex-col justify-between items-start w-[17rem] h-[20rem] rounded-3xl shadow-3xl py-4 px-3 ' style={{ backgroundImage: `url("cardPic.png")`, backgroundSize: 'cover', objectFit: "contain", backgroundPosition: "center"}}>
                <div className='flex-1'>
                    <p className='bold-20 text-white-100'>The Sound of Silence</p>
                </div>


                <div className=' flex flex-row items-center justify-center w-[15rem] gap-10 p-3 rounded-2xl bg-black-20 bg-opacity-60 backdrop-filter backdrop-blur-lg'>
                    {CardItems.map((cardItem) => (

                        <>
                            <div className='flexCenter flex-col '>
                                <p className='bold-12 text-white-100'>{cardItem.name}</p>
                                <p className='bold-12 text-white-100'>{cardItem.number}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards
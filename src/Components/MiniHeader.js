import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const MiniHeader = () => {
    return (
        <div className='flex justify-center p-4 sm:pt-7'>
            <ul className='flex gap-11 items-center border shadow-lg h-16 text-[15px] rounded-full w-[900px] justify-center max-[740px]:w-[950px]   '>
                <div className='sm:text-center'>
                    <li className='mr-14 font-medium text-[13px] text-black leading-4 sm:text-[12px]'>Where</li>
                    <button className=" flex-wrap-reverse text-gray-500 ml-5 font-normal text-[14px] leading-4 ">Search Destination</button>
                </div>
                <div className='border h-10 ml-16 sm:ml-1  '></div>
                <div>
                    <li className='font-medium text-[13px] text-black leading-4 mr-2 sm:text-[12px]'>Check in</li>
                    <button className="text-gray-500 ml-1  font-normal text-[14px] leading-4">Add dates</button>
                </div>
                <div className='border h-10 '></div>
                <div>
                    <li className='font-medium text-[13px] text-black leading-4 sm:text-[12px]'>Check Out</li>
                    <button className="text-gray-500  font-normal text-[14px] leading-4">Add dates</button>
                </div>
                <div className='border h-10 '></div>

                <div>
                    <li className='font-medium text-[13px] text-black leading-4 mr-11 sm:text-[12px]'>Who</li>
                    <button className="text-gray-500  font-normal text-[14px] leading-4  ">Add guests</button>
                </div>
                <div className='border h-10 mr-32  max-[740px]:hidden'></div>

                <li className="border rounded-full bg-rose-500 w-12 pl-3 "><IoSearchOutline className="h-12 w-6    " /></li>
            </ul>
        </div>
    )
}

export default MiniHeader

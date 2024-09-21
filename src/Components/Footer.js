import React from 'react'
import Button from './Button'
import { popular, helpCenter } from '../Constant'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";



const Footer = () => {
  return (
    <div className='bg-gray-100 mt-10 max-[740px]:w-full '>
      <h1 className='font-medium text-[22px] text-black leading-7 p-8'>Inspiration for future getaways</h1>
      <Button className="h-40 " />
      <div className='border-b-[1.3px] border-b-gray-400 pb-12 p-8 '>
        <ul className='grid grid-cols-6 gap-2  '>
          {
            popular.map((pop, p) => {
              return (
                <button>
                  <li className=' grid justify-items-start'>
                    <h2 className='font-medium text-[14px] leading-4 text-black'>{pop.title}</h2>
                    <p className='text-gray-500 font-medium text-[14px] leading-6 flex hover:text-black'>{pop.minTitle}</p>
                  </li>
                </button>
              )
            })
          }
        </ul>
      </div>
      <div>
        <ul className='grid grid-cols-3 p-8 pt-2  mt-10 pb-20 gap-3'>
          {
            helpCenter.map((help, h) => {
              return (
                <li key={h}>
                  <h1 className='font-medium text-[14px] leading-5 text-black '>{help.center}</h1>
                  <button><p className='font-normal text-[14px] leading-5 text-black hover:scale-95 transition-all '>{help.list}</p></button>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='border-t-[1.3px] font-normal text-[14px] leading-5 border-t-gray-400 flex gap-4 p-8 pt-5 pb-6  text-black justify-between'>
        <ul className='flex gap-2 items-center cursor-pointer'>
        <p>© 2024 Airbnb, Inc.</p>
          <li className='border rounded-full h-1 w-1 bg-gray-700'></li>
          <li className='hover:scale-95 transition-all cursor-pointer'>Privacy</li>
          <li className='border rounded-full h-1 w-1 bg-gray-700'></li>
          <li className='hover:scale-95 transition-all cursor-pointer'>Terms</li>
          <li className='border rounded-full h-1 w-1 bg-gray-700'></li>
          <li className='hover:scale-95 transition-all cursor-pointer'>Privacy</li>
          <li className='border rounded-full h-1 w-1 bg-gray-700'></li>
          <li className='hover:scale-95 transition-all '>Company details</li>
        </ul>
        <div>
          <ul className='flex gap-4 items-center cursor-pointer '>
            <li className='pt-1'>
              <TbWorld/>
            </li>
            <li className='hover:scale-95 transition-all '>
              <p>English (IN)</p>
            </li>
            <li className='flex items-center gap-1 '>
              <FaRupeeSign />
              <p >INR</p>
            </li>
            <li className='flex gap-4 pt-1'>
              <FaFacebookSquare className='' />
              <FaSquareXTwitter />
              <FaInstagram />
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
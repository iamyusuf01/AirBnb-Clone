import React from 'react'
import {secCardList} from '../Constant'

const MainCard = () => {
  return (
    <div className='max-[740]:w-full '>
        <h1 className=' pl-10 font-medium text-[32px] text-black leading-9 sm:pl-16'>Past experience</h1>
        <div className="flex justify-evenly flex-wrap sm:pt-5">
        {
            secCardList.map((card, j) => {
                    return (
                        <div className=' sm:pb-3'>
                            <div className="flex p-2 pt-3 rounded-3xl h-[280px] w-[280px] relative hover:scale-95 transition-all">
                                <img className="object-cover border shadow-lg rounded-2xl" src={card.imgUrl} alt=''/>
                              
                              
                            </div>
                            <h3 className=' font-medium text-[14px] text-black leading-5 pl-3'>{card.title}</h3>
                            <p className="font-normal text-gray-500 text-[14px] pl-3">{card.host}</p>
                            <p className='font-normal text-[15px] pl-3 text-black leading-5'>{card.date}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MainCard
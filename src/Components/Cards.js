import React from 'react'
import CardList from '../Constant'


const Cards = () => {
    return (
        <div className="py-16 flex justify-evenly flex-wrap ">
            {
                CardList.map((card, j) => {
                    return (
                        <div>
                            <div className="flex p-2 pt-3 font-medium text-black leading-5 rounded-3xl h-[280px] w-[280px] relative hover:scale-95 transition-all">
                                <img className="object-cover border shadow-lg rounded-2xl" src={card.imgUrl} alt=''/>
                              
                             
                            </div>
                            <h3 className=' font-medium text-[14px]  text-black leading-5 pl-3'>{card.title}</h3>
                            <p className="font-normal text-gray-500 text-[14px] pl-3">{card.host}</p>
                            <p className='font-normal text-[15px] pl-3  text-black leading-5'>{card.date}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Cards
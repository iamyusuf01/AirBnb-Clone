import React from 'react'
import { ButtonsList } from '../Constant'

const Button = () => {
  return (
    <div className='border-b-[1.3px] border-b-gray-400 w-full pl-5 '>
     <ul>
        {
            ButtonsList.map((button, b)=> {
                return (
                    <button key={b} className='hover:scale-95 transition-all' >
                        <li className='px-4 pb-4 font-medium text-[14px] leading-4 text-gray-500 hover:text-black'>{button.name}</li>
                    </button>
                )
            })
        }
     </ul>
    </div>
  )
}

export default Button
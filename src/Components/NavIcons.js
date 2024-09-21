  import React from 'react'
  import { navDetails } from '../Constant'
 
 const NavIcons = () => {

    const handleClick = () => {
      console.log("click In")
    }

   return (
     <div  className='p-6 h-18 w-full  flex flex-grow justify-center gap-12 item-center max-[744px]:w-[270px] '>
      {
        navDetails.map((nav , i) => {
            return(
                <div key={i} className='item-center justify-center cursor-pointer font-medium text-[12px] text-black leading-8 
                hover:scale-95 transition-all '>
                   <button onClick={handleClick} className='text-gray-400 hover:text-black font-medium ' >
                   <img className='h-6 m-auto' src={nav.imgNewUrl} alt='logo'/>
                   <p className='text-[12px] '>{nav.icons}</p>
                   <div className='h-[1.5px]'></div>
                   </button>
                    
 
                </div>
            )
        })
      }

     </div>
   )
 }
 
 export default NavIcons
"use client";
import { useState } from 'react'
import { BiHeart } from 'react-icons/bi'

export const Likes = () => {

  const [isFilled, setIsFilled] = useState(false)

  return (
    <div className="absolute right-5 top-6 bg-blanco text-negro rounded-2xl p-2 flex flex-row gap-1 justify-center items-center font-bold px-3 likes-container
                    after:border-t-8 after:border-t-blanco after:top-10 after:absolute after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-l-transparent after:border-r-transparent
                   " 
         onClick={()=>{setIsFilled(!isFilled)}}>
        <BiHeart color={isFilled ? 'red' : 'gray'} fill='true'/>
      35

    </div>
  )
}

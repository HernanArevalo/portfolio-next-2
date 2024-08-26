"use client";
import { useLikesStore } from '@/store';
import MotionNumber from 'motion-number';
import { useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const Likes = () => {

  const { likes, loadLikes, addLike, removeLike, loading, loaded, liked } = useLikesStore()

  const onClick = ()=>{
    if (!loading) {
      if (!liked) {
        addLike();
      }else{
        removeLike();
      }
    }
  }

  useEffect(() => {
    loadLikes();
  }, [loadLikes])
  


  return (
    <>
      {loaded && 
      <div className="absolute right-5 top-6 bg-blanco text-negro rounded-2xl p-2 flex flex-row gap-1 justify-center items-center font-bold px-3 likes-container cursor-pointer
                      animate__animated animate__flipInY
                      after:border-t-8 after:border-t-blanco after:top-9 after:absolute after:w-0 after:h-0 after:border-l-8 after:border-r-8 after:border-l-transparent after:border-r-transparent
                    " 
          onClick={onClick}>
          { liked?
            <FaHeart />
            :
            <FaRegHeart />
          }
          <MotionNumber
              value={likes}
              format={{ notation: 'compact'}}
              locales="es-MX"
          />

      </div>}
    </>
  )
}

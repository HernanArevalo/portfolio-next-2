"use client"
import { Info } from "@/interfaces"


interface Params {
  info: Info
}

export const MeSection = ( { info }: Params ) => {

  return (
    <>
    <div id="me" 
         className="py-12 sm:py-0 px-3 sm:px-0 min-h-screen flex flex-col justify-between items-center

                   ">
        <div className="text-6xl sm:text-9xl pb-10 lg:pb-0 lg:text-10xl font-bold h-fit grid-col w-full text-left mt-10">
            {info.me.title}
        </div>
        <div className="flex flex-col lg:flex-row justify-stretch items-center h-full flex-1 gap-20 text-sm sm:text-2xl px-4 sm:px-10 2xl:px-36">

            <div className="bg-gris shadow-[6px_6px_0px] shadow-blanco
                              w-full p-4
                           " 
                dangerouslySetInnerHTML={{ __html: info.me.description0 }}>
            </div>

            <div className="grid grid-cols-2 gap-10 w-full justify-between items-center text-md sm:text-xl">
                <div className="flex justify-center items-center">
                  <article className='bg-blanco text-gris p-4 shadow-[6px_6px_0px] shadow-gris
                                      flex justify-center items-center text-center w-full min-h-40 font-semibold
                                    '
                  >{ info.me.description1 }</article>
                </div>

                <div className="flex justify-center items-center">
                  <article className='bg-gris text-blanco p-4 shadow-[6px_6px_0px] shadow-blanco
                                      flex justify-center items-center text-center w-full min-h-40 font-semibold
                                    '
                  >{ info.me.description2 }</article>
                </div>

                <div className="flex justify-center items-center">
                  <article className='bg-blanco text-gris p-4 shadow-[6px_6px_0px] shadow-gris
                                      flex justify-center items-center text-center w-full min-h-40 font-semibold
                                    '
                  >{ info.me.description3 }</article>
                </div>

                <div className="flex justify-center items-center">
                  <article className='bg-gris text-blanco p-4 shadow-[6px_6px_0px] shadow-blanco
                                      flex justify-center items-center text-center w-full min-h-40 font-semibold
                                    '
                  >{ info.me.description4 }</article>
                </div>

                <div className="flex justify-center items-center">
                  <article className='bg-blanco text-gris p-4 shadow-[6px_6px_0px] shadow-gris
                                      flex justify-center items-center text-center w-full min-h-40 font-semibold
                                    '
                  >{ info.me.description5 }</article>
                </div>

                <div className="flex justify-center items-center">
                  <article className='bg-gris text-blanco p-4 shadow-[6px_6px_0px] shadow-blanco
                                      flex justify-center items-center text-center w-full min-h-40 font-semibold
                                    '
                                    dangerouslySetInnerHTML={{ __html: info.me.description6 }}></article>
                </div>

            </div>

        </div>
            
    </div>
    </>
  )
}

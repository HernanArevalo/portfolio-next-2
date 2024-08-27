"use client";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const Language = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [lang, setLang] = useState(pathname)

  const onChangeLanguage = (newLang: string) => {
    setLang(newLang)
    router.push(newLang)
  }


  return (
    <div className="text-negro font-bold absolute rounded-lg bg-gris text-xs border-gris border-2 overflow-hidden
                      top-14 left-2
                      md:top-2 md:left-1
                      ">

      <div
        className={clsx('absolute bg-blanco w-3/6 h-full transition-all duration-300',
                  lang === '/en'? 'translate-x-0' : 'translate-x-full'
                  )
          }
        style={{zIndex: 1 }}
      />

      <div className="relative flex flex-row justify-center items-center">
        <div className='relative z-10 px-2 py-1 cursor-pointer' onClick={()=>{onChangeLanguage('/en')}}>
          EN
        </div>
        <div className='relative z-10 px-2 py-1 cursor-pointer' onClick={()=>{onChangeLanguage('/es')}}>
          ES
        </div>

      </div>
    </div>
  )
}

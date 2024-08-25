"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  params: {
      lang: string
  }
}


export const Language = ({ params }: Props) => {
  const router = useRouter();

  const { lang } = params

  useEffect(() => {
    if (!['en','es'].includes(lang)) {
      router.push('en')
    }
  }, [ router, lang ])
  

  const onChangeLanguage = (newLang: string) => {
    router.push(`/${newLang}`)
  }


  return (
    <div className="text-negro font-bold absolute top-2 left-1 rounded-lg bg-gris text-xs border-gris border-2 overflow-hidden">

      <div
        className={`absolute bg-blanco w-3/6 h-full transition-all duration-300 ${lang === 'en' ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{zIndex: 1 }}
      />

      <div className="relative flex flex-row justify-center items-center">
        <div className='relative z-10 px-2 py-1 cursor-pointer' onClick={()=>{onChangeLanguage('en')}}>
          EN
        </div>
        <div className='relative z-10 px-2 py-1 cursor-pointer' onClick={()=>{onChangeLanguage('es')}}>
          ES
        </div>

      </div>
    </div>
  )
}

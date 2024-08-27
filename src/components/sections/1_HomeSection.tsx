import React from 'react'
import { RoundedButton } from '../ui/rounded-button/RoundedButton';
import { IoCodeSlash, IoLogoGithub } from 'react-icons/io5';
import { LiaLinkedinIn } from 'react-icons/lia';
import Image from 'next/image';
import { Info } from '@/interfaces';

interface Params {
  info: Info
}

export const HomeSection = ({ info }: Params) => {

  return (
    <div className="px-5 sm:px-0 pt-24  md:py-0 w-full min-h-screen flex flex-col sm:flex-row justify-center sm:items-center gap-12 " id="home">

    <div className="flex flex-col justify-end items-end gap-0">
      <span className="animate__animated animate__fadeInLeft font-semibold
                       text-9xl lg:text-10xl 
                      ">
        {info.home.title}
      </span>
      <h1 className="text-gris text-right w-fit
                       text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl
                       ">
        Hernán Arévalo
      </h1>
      <h2 className="font-medium mb-5
                     text-2xl lg:text-3xl 
                    ">
        {info.home.charge}
        </h2>
      <div className="flex flex-row gap-5 mr-2">
        <a href="https://www.linkedin.com/in/hernanarevalo" target="_blank">
          <RoundedButton>
            <LiaLinkedinIn size={32} />
          </RoundedButton>
        </a>
        <a href="https://www.github.com/HernanArevalo" target="_blank">
          <RoundedButton>
            <IoLogoGithub size={32} />
          </RoundedButton>
        </a>
      </div>
    </div>

    <div className="flex flex-col gap-0 mt-10">
      <div className="rounded-full overflow-hidden border-gris border-4 sm:border-8 flex justify-center items-center relative
                      xl:w-80 xl:h-80 
                      sm:w-64 sm:h-64
                      w-48 h-48
                      ">
        <Image
          src="/profile.webp"
          alt="profile-picture"
          height={500}
          width={500}
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative mb-5 hidden sm:visible">
        <IoCodeSlash className="absolute text-blanco 
                                xl:-top-36
                                -top-28
                                " 
                      size={128} />
      </div>
      <div className="relative mb-5 sm:hidden">
        <IoCodeSlash className="absolute text-blanco 
                                xl:-top-36
                                -top-20
                                " 
                      size={80} />
      </div>

      <div className="flex flex-col text-md xl:text-2xl gap-1 mb-4">
        <span>• {info.home.studies1}</span>
        <span>• {info.home.studies2}</span>
        <span>• {info.home.studies3}</span>
      </div>
      <p className="text-gris text-xl">
        {info.home.location}
      </p>
    </div>


  </div>
  )
}

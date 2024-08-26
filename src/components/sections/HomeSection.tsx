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
    <div className="md:pt-0 md:pl-24 min-h-screen w-screen flex flex-row justify-center items-center gap-12" id="home">

    <div className="flex flex-col justify-end items-end gap-0">
      <span className="text-8xl md:text-10xl animate__animated animate__fadeInLeft font-semibold ">
        {info.home.title}
      </span>
      <h1 className="text-gris text-6xl xl:text-8xl text-right w-fit">Hernán Arévalo</h1>
      <h2 className="text-3xl font-medium mb-5">{info.home.charge}</h2>
      <div className="flex flex-row gap-5">
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
      <div className="rounded-full overflow-hidden w-fit border-gris border-8 box-border bg-transparent flex justify-center items-center mb-6">
        <Image
          className=""
          src="/profile.webp"
          alt="profile-picture"
          width={280}
          height={280}
          style={{width: 'auto'}}
          priority
        />
      </div>
      <div className="relative mb-0">
        <IoCodeSlash className="absolute text-blanco -top-36" size={128} />
      </div>

      <div className="flex flex-col text-md xl:text-2xl gap-1">
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

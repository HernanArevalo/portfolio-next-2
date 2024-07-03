import { IoCodeSlash, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import data from '@/data/info.json'
import Image from "next/image";
import { LiaLinkedin } from "react-icons/lia";

interface props {
  params: {
    lang: string
  }
}

export default function HomePage({params}: props) {

  const { lang } = params 
  const info = (lang == 'en') ? data.en : data.es


  return (
    <div className="pt-12 md:pt-0 md:pl-24 min-h-screen w-screen grid grid-cols-2 items-center gap-12" id="home">
        <div className="flex flex-col justify-end items-end gap-0">
            
            <span className="text-10xl animate__animated animate__fadeInLeft">
                {info.home.title}
            </span>
            <h1 className="text-gris text-6xl">Hernán Arévalo</h1>
            <h2 className="text-3xl font-medium">{ info.home.charge }</h2>
            <div className="flex flex-row gap-5">
                <a href="https://www.linkedin.com/in/hernanarevalo" target="_blank">
                    <div className="bg-gris p-2 rounded shadow-2xl shadow-blanco">
                        <LiaLinkedin size={32}/>
                    </div>
                </a>
                <a href="https://www.github.com/HernanArevalo" target="_blank">
                    <div className="bg-gris p-2 rounded shadow-2xl shadow-blanco">
                        <IoLogoGithub size={32}/>
                    </div>
                </a>

            </div>

        </div>

        <div className="">

            <div className="rounded-full overflow-hidden w-fit border-gris border-4 box-border bg-transparent flex justify-center items-center">
                <Image
                    className=""
                    src="/profile.webp"
                    alt="profile-picture"
                    width={280}
                    height={280}
                />
            </div>
            <div className="relative">
                <IoCodeSlash className="absolute text-blanco -top-28" size={128}/>
            </div>

            <div className="flex flex-col text-2xl">
                <span>• { info.home.studies1 }</span>
                <span>• { info.home.studies2 }</span>
                <span>• { info.home.studies3 }</span>
            </div>
            <p className="text-gris text-xl">
                { info.home.location }
            </p>
        </div>


    </div>
  );
}
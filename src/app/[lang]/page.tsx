import data from '@/data/info.json'
import { HomeSection, MeSection, } from "@/components";

interface Props {
  params: {
    lang: string
  }
}

export default function HomePage({ params }: Props) {
  const { lang } = params
  // const router = useRouter()
  // if (['en','es'].includes(lang)) { router.push('/en')}

  const info = (lang == 'en') ? data.en : data.es

  return (
    <>
      {/* 
      <div className="md:pl-24 min-w-screen">
        <HomeSection info={info}/>
        <MeSection info={info}/> 
      </div>
      */}

      <div className="flex flex-col w-full h-screen justify-center items-center">
        <span className="text-6xl">En mantenimiento!</span>
        <span className="text-4xl text-gris">Volvemos pronto</span>
      </div>
    </>
  );
}
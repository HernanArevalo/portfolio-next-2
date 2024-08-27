import data from '@/data/info.json'
import { HomeSection, MeSection } from "@/components";

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
      <div className="min-h-screen md:pl-24">
        <HomeSection info={info}/>
        <MeSection info={info}/>
      </div>
    </>
  );
}
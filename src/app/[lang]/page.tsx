import data from '@/data/info.json'
import { HomeSection, } from "@/components";

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
      <div className="">
        <HomeSection info={info}/>
      </div>
    </>
  );
}
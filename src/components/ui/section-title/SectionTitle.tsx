
interface Params{
  title: string;
  className?: string;
}

export const SectionTitle = ({title, className}: Params) => {
  return (
    <div className={`text-6xl sm:text-9xl lg:pb-0 lg:text-10xl font-bold h-fit grid-col w-full text-left mt-10 ${className}`}>
            { title }
        </div>
  )
}

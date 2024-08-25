
interface Params {
  children: React.ReactNode
}

export const RoundedButton = ({children}: Params) => {
  return (
    <div className="bg-gris p-2 rounded shadow-[3px_3px_0px] shadow-blanco hover:bg-blanco hover:text-gris hover:shadow-gris transition-all duration-200">
      {children}
    </div>
  )
}

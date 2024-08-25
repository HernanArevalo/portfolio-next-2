import Image from "next/image"
import { IoAlbums, IoConstruct, IoHomeSharp, IoPerson, IoSendSharp } from "react-icons/io5"

const navbarItems = [
  {name: "Home",
   icon: <IoHomeSharp size={32}/>,
   iconSmall: <IoHomeSharp size={18}/>,
   href: "#home"
  },
  {name: "Me",
   icon: <IoPerson size={32}/>,
   iconSmall: <IoPerson size={18}/>,
   href: "#me"
  },
  {name: "Proyects",
   icon: <IoAlbums size={36}/>,
   iconSmall: <IoAlbums size={18}/>,
   href: "#proyects"
  },
  {name: "Skills",
   icon: <IoConstruct size={32}/>,
   iconSmall: <IoConstruct size={18}/>,
   href: "#skills"
  },
  {name: "Contact",
   icon: <IoSendSharp size={32}/>,
   iconSmall: <IoSendSharp size={18}/>,
   href: "#contact"
  }
  
]

export const Navbar = () => {
  return (
    <nav className="bg-blanco text-negro py-3
                    border-b-gris border-b-4
                    md:border-r-gris md:border-r-8
                      text-xl font-bold 
                      fixed top-0 
                      md:-left-32 md:h-screen md:w-auto
                      left0 h-fit w-screen
    
                    
    ">
			<ul className="flex md:flex-col flex-row justify-evenly md:justify-center h-full md:gap-10">
        { navbarItems.map(item => (
          <a href={item.href} key={item.name}>

          <li className="md:hover:translate-x-28 transition-all duration-700
                       bg-blanco text-negro md:border-r-gris md:border-r-8 md:px-6 md:py-6
                       relative left-2"
                       >
            <div className="flex flex-row justify-center md:justify-end items-center md:gap-7 relative 
                                       ">
              <span className="hidden md:inline">{item.name}</span>
              <div className="md:hidden">
                  {item.iconSmall}
              </div>
              <div className="hidden md:inline">
                  {item.icon}
              </div>
            </div>
          </li>
          </a>

        ))

        }

			</ul>

    </nav>
  )
}

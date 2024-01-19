import { useEffect } from "react"
import { useState, createContext } from "react"
import "../../styles/animations/menu_animation.css"
import { Hamburguer } from "./components/hamburguer"


//component hamburguer usa esse context
export const MenuContext = createContext()

export const Menu = ()=>{
    const [active, setActive] = useState(false)
   
    useEffect(()=>{
        const ul = document.getElementById('ul-container')
        const hamburguer = document.getElementById('hamburguer')
        const DisplayHamburguer = window.getComputedStyle(hamburguer).display
    
        
        if(DisplayHamburguer == 'none'){
            return
        }

        if(active){
            ul.style.transform = "translateX(0%)"
        }else{
            ul.style.transform = "translateX(100%)"
        }
    }, [active])

    return(
        <MenuContext.Provider value={{active, setActive}}>
            <nav className="relative flex justify-end w-full tablet:justify-start tablet:flex-col tablet:items-end tablet:bg-[#131314]">
                <div className="hidden tablet:block mb-2" id="hamburguer">
                    <Hamburguer />
                </div>

                <ul
                    id="ul-container" 
                    className={`
                        flex 
                        [&_a]:text-text-comun [&_a]:font-menu [&_a]:tracking-[0.15rem] [&_li]:p-3
                        [&_a]:text-menu-text
                        tablet:w-[160px]
                        tablet:flex-col
                        tablet:top-full
                        tablet:duration-200 
                        tablet:ease-in-out
                        tablet:h-[100vh]
                        tablet:bg-[#131314]
                        tablet:absolute
                `}>
                    <li className="tablet:flex tablet:flex-col tablet:items-end"><a href="#" className="bar_bottom">HOME</a></li>
                    <li className="tablet:flex tablet:flex-col tablet:items-end"><a href="#" className="bar_bottom">SOBRE</a></li>
                    <li className="tablet:flex tablet:flex-col tablet:items-end"><a href="#" className="bar_bottom">PROJETOS</a></li>
                    <li className="tablet:flex tablet:flex-col tablet:items-end"><a href="#" className="bar_bottom">HABILIDADES</a></li>
                    <li className="tablet:flex tablet:flex-col tablet:items-end"><a href="#" className="bar_bottom">CONTATOS</a></li>
                </ul>
            </nav>
        </MenuContext.Provider>
    )
}
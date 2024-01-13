import { useContext } from "react"
import { useRef } from "react"
import "../../../styles/animations/menu_animation.css"
import { MenuContext } from "../menu"

export const Hamburguer = ()=>{

    const {active, setActive} = useContext(MenuContext)

    const line_one = useRef()
    const line_two = useRef()

    const handle_animation = (e)=>{
        line_one.current.classList.toggle('hamburguer_line_one_animation')
        line_two.current.classList.toggle('hamburguer_line_two_animation')

        setActive(!active)
    }

    return(
        <div className="p-4 rotate-180 cursor-pointer" onClick={handle_animation}>
            <div className="hamburguer bg-white w-8 h-[2px] mb-[8px]" ref={line_one}></div>
            <div className="hamburguer bg-white w-6 h-[2px]" ref={line_two}></div>
        </div>
    )
}
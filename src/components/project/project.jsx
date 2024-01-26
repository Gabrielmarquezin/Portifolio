import { Imagem } from "../lazyimages/lazy"
import Panther from "../../assets/imgs/panther.png"
import "../../styles/animations/project_animation.css"
import Icon from "../../assets/react.svg"

export const ProjectReleased = ()=>{
    return(
        <div className="flex flex-col group relative w-full h-full">
            <div 
                className="
                    bg-[#d9d9d933]
                    absolute
                    top-0
                    w-full
                    min-h-0
                    duration-300 
                    ease-in-out
                    transition-all
                    group-hover:min-h-full
                    z-[1]
            "/>
            <div 
                className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    z-[2]
                    hidden
                    group-hover:flex
                    justify-center
                    w-full
                    pr-[8px]
                    pl-[8px]
            ">
                <div className="flex gap-10 w-[70%]">
                    <a 
                        href="#"
                        className="
                            border-solid
                            border-white
                            border-[1px]
                            rounded-[20px]
                            p-[5px]
                            w-full
                            flex
                            items-center
                            justify-center
                            ease-in-out
                            duration-300
                            text-white 
                            hover:bg-white
                            hover:text-black
                        "
                    >
                        Github
                    </a>
                    <a 
                        href="#"
                        className="
                            w-full
                            border-solid
                            border-black
                            border-[1px]
                            rounded-[20px]
                            flex
                            items-center
                            justify-center
                            text-white
                            bg-black
                            text-desc
                        "
                    >
                        Visualizar
                    </a >
                </div>
            </div>
            <Imagem src={Panther} alt="projeto" effect={'blur'} />
        </div>
    )
}

export const DescProjectReleased = ()=>{
    return(
        <div 
            className={`
                flex 
                flex-col 
                gap-[5px] 
                max-w-[80%]
                big-tablet:max-w-[60%]
                smartphone:w-[100%]
                tablet:w-[100%]
        `}>
            <div className="flex items-center gap-4">
                <p className="text-white font-pantera text-[1.3rem] tracking-widest">Black Panther</p>
                <div className="flex gap-2">
                    <div 
                        className="
                            h-[28px] 
                            w-[28px] 
                            p-[3px] 
                            border-solid 
                            border-white 
                            border-[1px] 
                            rounded-full
                            smartphone:h-[23px]
                            smartphone:w-[23px]
                        ">
                        <Imagem src={Icon} />
                    </div>
                    <div 
                        className="
                            h-[28px] 
                            w-[28px] 
                            p-[3px] 
                            border-solid 
                            border-white 
                            border-[1px] 
                            rounded-full
                            smartphone:h-[23px]
                            smartphone:w-[23px]
                        ">
                        <Imagem src={Icon} />
                    </div>
                    <div 
                        className="
                            h-[28px] 
                            w-[28px] 
                            p-[3px] 
                            border-solid 
                            border-white 
                            border-[1px] 
                            rounded-full
                            smartphone:h-[23px]
                            smartphone:w-[23px]
                        ">
                        <Imagem src={Icon} />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[#dddddd] font-desc-time text-desc-project">
                    Esse aqui é um convite, nele é possivel confirmar presença, fazer download da lista de convidados e verficar as principais informações da festa
                </p>
            </div>
        </div>
    )
}
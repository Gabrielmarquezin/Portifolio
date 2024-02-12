import { Imagem } from "../lazyimages/lazy"
import "../../styles/animations/project_animation.css"
import { WithLoader } from "../../HOC/withLoader"

export const ProjectReleased = ({TitleProject, TechsArray, DescProject, Github, LinkHost, imgProject, Key }) => {

    return(
        <div className="w-full h-full flex-none">
            <div className="flex flex-col group relative w-full h-full">
                <div className="relative w-full max-h-[800px]">
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
                                href={Github}
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
                                href={LinkHost}
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
                    <div className="w-full">
                        <Imagem 
                            src={imgProject} 
                            alt="projeto" 
                            effect={'blur'} 
                        />
                    </div>
                </div>
                <DescProjectReleased 
                    TitleProject={TitleProject} 
                    DescProject={DescProject} 
                    TechsArray={TechsArray}
                    key={Key}
                />
            </div>
        </div>
    )
}

export const DescProjectReleased = ({Class, TitleProject, DescProject, TechsArray})=>{
    return(
        <div 
            className={`
                w-[80%]
                flex 
                flex-col 
                gap-[5px]
                mt-[5px]
                ${Class}
        `}>
            <div className="flex items-center gap-4">
                <p className="text-white font-pantera text-[1.3rem] tracking-widest">{TitleProject}</p>
                <div className="flex gap-2">
                   {
                        TechsArray
                        .map((tech, i)=>{
                            return(
                                <Techs imgTech={tech} key={i.toString()} />
                            )
                        })
                   }
                </div>
            </div>
            <div className="max-w-[95%] smartphone:max-w-full">
                <p className="text-[#dddddd] font-desc-time text-desc-project">
                    {DescProject}
                </p>
            </div>
        </div>
    )
}

const Techs = ({imgTech})=>{
   
    return(
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
            "
        >
            <Imagem src={imgTech} effect="blur"/>
        </div>
    )
}

export const ProjectReleasedWithLoader = WithLoader(ProjectReleased)
import { ProjectReleased } from "../components/project/project"
import { ProjectBlocked } from "../components/project/project_blocked"
import { Title } from "../components/text/title"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect} from "react";
import { useSheet } from "../hooks/useSheet";
import { WithLoader } from "../HOC/withLoader";
import { CutList } from "../utils/cutlist";

const ContainerProjectUp = ({children}) =>{
    return(
        <div 
            className="
                flex
                flex-col
                row-start-1
                row-end-[11]
                col-start-1
                col-end-[11]

                overflow-hidden

                smartphone:col-end-[31]
                smartphone:row-end-[14]
        ">
            <div className="duration-200 ease-in-out flex w-full h-full" id="projectup">
                {children}
            </div>
        </div>
    )
}

const ContainerProjectDown = ({children}) =>{
    return(
        <div 
            className="
                row-start-[5]
                row-end-[15]
                col-start-[9]
                col-end-[19]

                overflow-hidden

                smartphone:col-start-1
                smartphone:col-end-[31]
                smartphone:row-start-[15]
                smartphone:row-end-[28]
                z-[2]
        ">
            <div className="duration-200 ease-in-out flex w-full h-full" id="projectdown">
                {children}
            </div>
        </div>
    )
}



export const Projetos = ()=>{

    const [slide, setSlide] = useState(1)
    const {data, loading, error} = useSheet("1hn2AG8CDxBfS2KgkoOP88lN6q-eFWpGjJRlKFEEr2I8")
    const [UpDataProject, setUpDataProject] = useState([])
    const [DownDataProject, setDownDataProject] = useState([])

    useEffect(()=>{
        if(!loading){
            const {firstPart, secondPart} = CutList(data)

            setUpDataProject(firstPart)
            setDownDataProject(secondPart)
        }
    }, [loading])

    if(loading){
        return(
            <div className="text-white text-desc-project w-full flex justify-center items-center">
                <p>Carregando dados...</p>
            </div>
        )
    }

    const LeftSlide = ()=>{
        const upProject = document.getElementById("projectup")
        const downProject = document.getElementById('projectdown')

        if(slide == Math.ceil(data.length/2)){
            return
        }

        upProject.style.transform = `translateX(-${slide * 100}%)`
        downProject.style.transform = `translateX(-${slide * 100}%)`

        setSlide(slide + 1)
    }

    const RightSlide = ()=>{

        const upProject = document.getElementById("projectup")
        const downProject = document.getElementById('projectdown')

        if(slide == 1 | (slide - 1) == 1){
            upProject.style.transform = `translateX(0%)`
            downProject.style.transform = `translateX(0%)`
            setSlide(1)
            return
        }

        upProject.style.transform = `translateX(-${(slide -1)*100}%)`
        downProject.style.transform = `translateX(-${(slide -1)*100}%)`

        setSlide(slide - 1)
    }

    
    return(
        <div className="relative flex flex-col max-h-[1150px]" id="projetos" data-anime="left">
            <Title text={"Projetos"} />
            <div
                className="
                    w-full
                    grid
                    grid-cols-20 
                    grid-rows-20    
                    h-[calc(100vw-30px)]

                    smartphone:h-[200vw]
                    smartphone:grid-cols-30
                    smartphone:grid-rows-30
                ">
                    <ContainerProjectUp>
                        {
                            UpDataProject
                            .map((row, i) => {
                                if(row == "blocked"){
                                   return <ProjectBlocked />
                                }else{
                                    const techs = row[2].split("+SEPARADOR+")

                                    return(
                                        <ProjectReleased
                                            textLoad="carregando projeto..."
                                            TitleProject={row[0] ?? 'titulo nao definido'}
                                            TechsArray={techs ?? []}
                                            DescProject={row[1] ?? ''}
                                            Gihub="#"
                                            LinkHost="#"
                                            imgProject={row[3]}
                                            key={i.toString()}
                                        />
                                    )
                                }
                            })
                        }
                    </ContainerProjectUp> 

                    <ContainerProjectDown>
                        {
                            DownDataProject
                            .map((row, i) => {
                                if(row == "blocked"){
                                   return <ProjectBlocked key={i}/>
                                }else{
                                    const techs = row[2].split("+SEPARADOR+")

                                    return(
                                        <ProjectReleased
                                            textLoad="carregando projeto..."
                                            TitleProject={row[0] ?? 'titulo nao definido'}
                                            TechsArray={techs ?? []}
                                            DescProject={row[1] ?? ''}
                                            Gihub="#"
                                            LinkHost="#"
                                            imgProject={row[3]}
                                            key={i.toString()}
                                        />
                                    )
                                }
                            })
                        }
                    </ContainerProjectDown>
                    <div 
                        className="
                            row-start-[14]
                            row-end-[15]
                            col-start-1
                            col-end-[20]

                            smartphone:row-start-[27]
                            smartphone:row-end-[29]
                            smartphone:col-start-1
                            smartphone:col-end-[30]
                            smartphone:mt-[80px]

                            flex 
                            items-center
                            justify-center
                            mt-[30px]
                            text-[1.7rem] 
                            text-pantera-color
                            z-[5]
                    ">
                            <IoIosArrowBack  className="cursor-pointer" onClick={RightSlide}/>
                            <div className="text-[1rem] text-white">
                                {slide}/{Math.ceil(data.length/2)}
                            </div>
                            <IoIosArrowForward className="cursor-pointer" onClick={LeftSlide}/>
                    </div>
            </div>
            
        </div>
    )
}

export const ProjetoWithLoading = WithLoader(Projetos)

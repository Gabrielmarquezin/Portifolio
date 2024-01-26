import { DescProjectReleased, ProjectReleased } from "../components/project/project"
import { ProjectBlocked } from "../components/project/project_blocked"
import { Title } from "../components/text/title"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ContainerProject = ()=>{
    return(
        <div className="w-full h-full flex-none">
            <div className="flex flex-col gap-2">
                <ProjectReleased />
                <DescProjectReleased />
            </div>
        </div>
    )
}

const ContainerProjectBlock = ()=>{
    return(
        <div 
            className="
                w-full h-full
                grid
                grid-cols-30
                grid-rows-30
                tablet:grid-rows-50   
            ">
            <div
                className="
                    row-start-1
                    row-end-[18]
                    col-start-1
                    col-end-[30]
                    tablet:row-end-[45]
                    smartphone:row-end-[33]
            ">
                <ProjectBlocked />
            </div>
        </div>
    )
}

export const Projetos = ()=>{
    return(
        <div className="flex flex-col">
            <Title text={"Projetos"} />
            <div
                className="
                    w-full
                    grid
                    grid-cols-30 
                    grid-rows-30
                    h-[calc(100vw-30px)]
                    tablet:grid-rows-50
                    tablet:h-[150vw]
                    smartphone:gap-y-[15px]
                ">
                    <div
                        className="
                            col-start-1
                            col-end-[15]
                            row-start-1
                            row-end-[18]
                            big-tablet:min-w-[450px]
                            big-tablet:min-h-[300px]
                            tablet:col-end-[28]
                            tablet:row-end-[20]
                            smartphone:col-end-[30]
                            smartphone:row-end-[26]
                            smartphone:min-h-[400px]
                            min-h-[700px]
                    ">
                        <div className="flex h-full w-full ease-in-out duration-200" id="project1">
                            <ContainerProjectBlock />
                        </div>
                    </div>
                    <div
                        className="
                            col-start-[13]
                            col-end-[27]
                            row-start-[8]
                            row-end-[25]
                            overflow-x-hidden
                            z-[2]
                            big-tablet:min-w-[450px]
                            big-tablet:min-h-[300px]
                            tablet:col-start-1
                            tablet:col-end-[28]
                            tablet:row-start-[30]
                            tablet:row-end-[49]
                            smartphone:col-start-1
                            smartphone:col-end-[30]
                            smartphone:row-start-[30]
                            smartphone:row-end-[55]
                            smartphone:min-h-[400px]
                            min-h-[700px]
                           
                    ">
                        <div className="flex h-full w-full ease-in-out duration-200" id="project2">
                            <ContainerProject />
                            <ContainerProject />
                            <ContainerProject />
                            <ContainerProjectBlock />   
                        </div>
                    </div>
                    <div 
                        className="
                            w-full flex items-end justify-center
                            col-start-1
                            col-end-[30]
                            row-start-[18]
                            row-end-[19]
                            tablet:row-start-[51]
                            tablet:row-end-[58]
                            tablet:col-end-[28]
                            smartphone:col-end-[30]
                            smartphone:row-start-[58]
                            smartphone:row-end-[60]
                            
                            z-[5]
                        ">
                        <div>
                            <div>
                                <IoIosArrowBack />
                            </div>
                            <span></span>
                            <div>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}


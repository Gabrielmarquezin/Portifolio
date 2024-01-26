import { MdBlockFlipped } from "react-icons/md";

export const ProjectBlocked = ()=>{
    return(
        <div className="bg-fundo border-solid border-pantera-color border-[1px] w-full h-full">
            <div className="relative w-full h-full clip-path-trapezio bg-pantera-color">
                <div 
                    className="
                        text-[3rem]
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        text-white
                    ">
                    <p className="tracking-widest font-pantera rotate-[-59deg] smartphone:rotate-[-56deg]">Em breve</p>
                </div>
            </div>
        </div>
    )
}

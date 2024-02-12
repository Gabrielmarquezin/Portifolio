import "../../styles/load/loader.css"

export const Loading = ({text})=>{
    return(
        <div className="w-full h-full flex justify-center items-center bg-fundo z-[5]">
           <div className="flex flex-col items-center gap-2">
                <span className="loader block"></span>
                <p className="text-white text-desc-project">{text}</p>
           </div>
        </div>
    )
}
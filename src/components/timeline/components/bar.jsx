import { Circle } from "./circle"

export const BarTimeLine = ({espelhar, year, title, desc})=>{
    return(
        <div className={`
                relative
                flex 
                flex-col-reverse 
                gap-5 
                w-[200px]
                min-w-[150px]
                ${espelhar ? 'scale-y-1' : 'scale-y-[-1]'}
        `}>
            <div className="relative w-full h-[15px] rounded-[10px] bg-pantera-color">
                <div 
                    className="
                        absolute
                        top-0
                        -translate-y-full
                        -translate-x-1/2
                        left-1/2
                        border-x-[5px]
                        border-transparent
                        border-solid
                        border-b-[8px]
                        border-b-[#654EAE]
                    "
                />
                <div 
                    className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                    "
                >
                    <Circle year={year} espelhar={espelhar}/>
                </div>
            </div>
            <div 
                className={`
                    absolute
                    top-0
                    -translate-y-[(calc(100%+25px))]
                    max-w-full
                    text-center
                    text-white
                    ${espelhar ? 'scale-y-1' : 'scale-y-[-1]'}
                `}
                data-anime-timeline="appear"
            >
                <p className="font-pantera mb-[10px] text-[1.3rem]">{title}</p>
                <p className="text-timeline">
                    {desc}
                </p>
                <a className="text-pantera-color text-timeline" href="">arquivo</a>
            </div>
            <div 
                className={`
                    absolute
                    left-0
                    h-[15px]
                    w-[8px]
                    bg-fundo
                    rounded-e-full
                    z-[2]
                `}
            />
        </div>
    )
}

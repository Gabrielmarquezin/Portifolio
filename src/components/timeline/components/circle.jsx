
export const Circle = ({year, espelhar})=>{
    return(
        <div
            className="
                h-[150px]
                w-[3px]
                bg-pantera-color
                relative       
            "
            id="circle-timeline"
            data-anime-timeline="slide"
        >
            <div 
                className="
                    absolute
                    top-full
                    left-1/2
                    -translate-x-1/2
                ">
                <div className="relative bg-pantera-color w-[80px] h-[80px] rounded-full">
                    <div className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-white rounded-full">
                        <p 
                            className={`
                                font-pantera
                                ${espelhar ? 'scale-y-1' : 'scale-y-[-1]'}
                            `}>{year}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
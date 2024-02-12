import { useEffect, useContext, useState, useRef} from "react"
import { WithLoader } from "../../HOC/withLoader"
import { ContextHabilidades } from "../../pages/habilidades"
import { ErrorText } from "../error/error"
import { Imagem } from "../lazyimages/lazy"
import "../../styles/hability/hability.css"

const TechsRender = ({stopLoading})=>{
    const {data, loading, error, setDescHability} = useContext(ContextHabilidades)
    const [button, setButton] = useState(false)
    const targetTech = useRef()

    useEffect(()=>{
        if(!loading || error){
            stopLoading()
        }
    }, [loading])

    useEffect(()=>{
        document.addEventListener("click", ()=>{
            setDescHability("Clique nos icones, para saber mais detalhes")
            HiddenButtonVisible()
        })

        return () => {
            document.removeEventListener('click', ()=>{
                setDescHability("")
                HiddenButtonVisible()
            });
          };
    }, [])

    const setDesc = (e)=>{
        e.stopPropagation()
        const target = e.target
        const parent = target.offsetParent

        if(!parent.nextSibling){
            return
        }

        const pElementText = parent.nextSibling.innerHTML

        HiddenButtonVisible()
        setButtonVisible(e)
        setButton(!button)
        setDescHability(pElementText)
    }

    const setButtonVisible = (e)=>{
        const target = e.target.offsetParent.parentNode
        target.classList.add("habilyVisible")
    }

    const HiddenButtonVisible = ()=>{
        const elementsActive = document.querySelectorAll(".habilyVisible")
        elementsActive.forEach((ele)=>{
            ele.classList.remove("habilyVisible")
        })
    }

    if(loading){
        return ""
    }

    if(error){
        return(
            <ErrorText text={"Não foi possível carregar as Habilidades, por favor volte mais tarde"} />
        )
    }

    return(
        <div className="w-full flex flex-wrap gap-[30px]">
            {
                data
                .map((t, i)=>{
                    return(
                        <div 
                            className={`
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                w-full
                                h-full
                                max-w-[85px]
                                max-h-[95px]
                                min-w-[60px]
                                p-[10px]
                                hover:border-solid
                                hover:border-[1px]
                                hover:border-white
                                hover:bg-button_hability
                                hover:rounded-[8px]
                                smartphone:h-[95px]
                            `}
                            ref={targetTech}
                            key={i.toString()}
                            onClick={setDesc}
                        >
                            <Imagem src={t[2]} alt="Tech" effect={"blur"} />
                            <p className="hidden">{t[1]}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const TechsRenderWithLoader = WithLoader(TechsRender)
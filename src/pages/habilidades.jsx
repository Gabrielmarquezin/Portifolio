import { createContext, useState} from "react"
import { TechsRenderWithLoader } from "../components/techs/techs"
import { Title } from "../components/text/title"
import { useSheet } from "../hooks/useSheet"

export const ContextHabilidades = createContext("")

export const Habilidades = ()=>{
   
    const {data, loading, error} = useSheet("1SrdqoLWHiR8iMWl1fUgu6r4MOty36VDlW3ihmFv5JZ4")
    const [descHability, setDescHability] = useState('Clique nos icones, para saber mais detalhes')

    return(
        <ContextHabilidades.Provider value={{data: data, loading: loading, error: error, setDescHability}} >
            <div className="flex flex-col gap-[40px]" id="habilidades" data-anime="left">
                <Title text={"HABILIDADES"} />
                <div className="flex gap-[50px] smartphone:flex-col" data-anime="right">
                    <TechsRenderWithLoader textLoad="Carregando..." />
                   <p className="w-full text-white text-desc-project">{'<>'}<br/>{descHability}<br/>{'</>'}</p>
                </div>
            </div>
        </ContextHabilidades.Provider>
    )
}

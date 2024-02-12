import { BarTimeLine } from "./components/bar"

export const TimeLine = ()=>{
    
    return(
        <div className="flex items-center mt-[230px]">
            <BarTimeLine 
                espelhar={false}
                year={"2021"}
                title=".INICIO"
                desc={"Comecei o curso técnico de informática na Escola de Ensino Profissional Adriano Nobre"}
            />
            <BarTimeLine 
                espelhar={true}
                year={"2022"}
                title=".Projeto"
                desc={"Participei na criação backend com NodeJs do app Bene, para o Ceará Ciêntifico."}
            />
            <BarTimeLine 
                espelhar={false}
                year={"2023"}
                title=".ESTÁGIO"
                desc={"Finalizei o curso de informática e o curso da Aws Cloud Functions. Comecei a estagiar na empresa Shopping Pães como analista de dados, utilizando power bi, Python e sql server"}
            />
        </div>
    )
}


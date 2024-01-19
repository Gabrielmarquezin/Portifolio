import { Title } from "../components/text/title"
import { TimeLine } from "../components/timeline/timeline"

export const Sobre = ()=>{
    return(
        <article className="flex flex-col gap-[85px]">
            <div id="sobre" data-anime="left">
                <Title text={"SOBRE"} />
                <p className="text-desc text-text-comun">
                    . Sou programador Full Stak, utilizo React, Tailwind para criação de interfaces,<br/>
                    PHP e NodeJs para desenvolvimento de APIs, aplicando SOLID e Clean Architecture. NextJs para<br/>Interfaces e APIs
                </p>
                <br/>
                <p className="text-desc text-text-comun">
                    . Também sou Analista de Dados, utilizo Python com Pandas, power Bi e SQL server para minhas análises. <br/>Estou estagiando nessa área na empresa Shopping Pães.
                </p>
                <br/>
                <p className="text-desc text-text-comun">
                    . Busco ser um Desenvolvedor ou um Analista de Dados
                </p>
            </div>
            <div className="h-[475px] smartphone:max-w-[355px] overflow-hidden scroll-smooth overflow-x-auto">
                <TimeLine />
            </div>
        </article>
    )
}
import { Menu } from "../components/menu/menu"
import { Title } from "../components/text/title"
import { Imagem } from "../components/lazyimages/lazy"
import perfil  from "../assets/imgs/perfil.png"
import { ContactBar } from "../components/contactbar/bar"

export const Home = ()=>{
    return(
      <>
        <header 
            className="
                tablet:fixed 
                tablet:top-0 
                tablet:left-full 
                w-full 
                tablet:-translate-x-full
                z-[5]
            ">
            <Menu />
        </header>
        <section 
            className="
                w-[95%]
                items-center
                h-[calc(100%-61px)] 
                flex justify-between 
                tablet:flex-col-reverse 
                tablet:justify-normal 
                tablet:items-center
                tablet:gap-[150px]
                smartphone:w-full
                tablet:mt-[60px]
                smartphone:mt-[40px]
            "
        >
            <div className="flex flex-col gap-3 tablet:h-full tablet:w-[60%] smartphone:w-[70%] tablet:items-start">
                <div>
                    <p className="relative top-[10px] text-text-comun text-title-desc">salve! Meu nome é</p>
                    <Title text={"Gabriel Marques"} />
                    <div className="relative -top-[10px] text-title-desc z-[-2]">
                        <p className="text-text-comun">tenho 18 anos, sou analista de </p>
                        <p className="text-text-comun">dados e desenvolvedor de software </p>
                    </div>
                </div>
                
                <ContactBar />
            </div>
            <div className="flex justify-center items-center tablet:z-[-2]">
                <div 
                    className="
                        relative 
                        max-w-[480px] max-h-[480px] 
                        w-[calc(200px+15vw)] h-[calc(180px+15vw)] 
                        tablet:w-[60vw] 
                        tablet:h-[60vw] 
                        tablet:max-w-[95%] 
                        tablet:right-0
                        tablet:top-[61px]
                        smartphone:w-[70vw]
                        smartphone:h-[70vw]
                      bg-[#151515] right-[28px]
                    "
                >
                    <Imagem src={perfil} alt={"Profile"} effect={'blur'} />
                    <div className="absolute top-[10%] left-[10%]  w-full h-full border-pantera-color border-solid border-[5px] smartphone:border-[3px] z-[-1]"></div>
                </div>
            </div>
        </section>
      </>
    )
}
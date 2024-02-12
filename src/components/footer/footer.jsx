

export const Footer = ()=>{
    return(
        <footer 
            className="
                text-white 
                h-full 
                w-full 
                max-h-[80px] 
                mt-[100px] 
                bg-[#131314]
                
                flex
                justify-between
                items-center
                p-5
                text-menu-text
                gap-[30px]
            "
            id="contatos"
        >
                <div className="flex flex-wrap w-full gap-[15px] tablet:gap-[0] tablet:flex-col">
                    <div>
                        <span>@2024</span>
                    </div>
                    <div>
                        <a href="https://github.com/Gabrielmarquezin" className="underline">
                            Github
                            <span className="tablet:hidden">: GabrielMarquezin</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap gap-[15px] w-full tablet:gap-[0px] tablet:flex-col-reverse">
                    <div>
                        <a href="https://www.linkedin.com/in/gabriel-marques-5922ba262/" className="underline">
                            Linkedin 
                            <span className="tablet:hidden">: Gabriel Marques</span>
                        </a>
                    </div>
                    <div>
                        <span>Feito: autoral</span>
                    </div>
                </div>
                <div className="w-full justify-between flex items-start">
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMVJTQhzrBswsXdpbvdhhNfDpbLbGCtlNVChMpLDtnmhwrLvqLPKMXrpfXtrmtfXVTSDtdD" className="underline">
                        Email<span className="tablet:hidden">: gabrielmarquesaraujo22@gmail.com</span></a>
                </div>
        </footer>
    )
}
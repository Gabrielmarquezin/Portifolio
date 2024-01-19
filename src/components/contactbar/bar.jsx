import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";

export const ContactBar = ()=>{
    const [visibility, setVisisbility] = useState(false)

    const handleicon = ()=>{
        setVisisbility(!visibility)
    }

    return(
        <div className="w-full flex gap-5 ">
            <a 
                className='
                    flex
                    justify-center
                    items-center
                    text-[2.5rem] 
                    text-white

                '
                href="#"
            >
                <BsGithub />
            </a>

            <a 
                className='
                    p-[10px] 
                    border-white 
                    border-[0.1rem] 
                    border-solid 
                    rounded-full 
                    text-[1.3rem] 
                    text-white
                    hover:bg-white
                    hover:text-fundo
                    cursor-pointer
                '
                href="#"
                >
                <FaLinkedinIn />
            </a>
            <a 
                className='
                    p-[10px]
                    border-white 
                    border-[0.1rem] 
                    border-solid 
                    rounded-full 
                    text-[1.3rem] 
                    text-white 
                    hover:bg-white
                    hover:text-fundo
                    cursor-pointer
                '
                href="#"
                >
                <TfiEmail />
            </a>
        </div>
    )
}
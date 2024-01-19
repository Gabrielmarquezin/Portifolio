import { useEffect } from "react"
import { Home } from "./pages/home"
import { Sobre } from "./pages/sobre"
import "./styles/animations/slide_animation.css"
import { debounce } from "./utils/debounce"

function App() {

  useEffect(()=>{
    window.addEventListener('scroll', debounce(()=>{
      animate_timeline()
    }, 200))
  }, [])

  const animate_timeline = ()=>{
    const page_about = document.getElementById('sobre')
    const target_timeline = document.querySelectorAll('[data-anime-timeline]')
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    target_timeline.forEach(element => {
      if((windowTop) > page_about.offsetTop){
        element.classList.add('animate-timeline')
      }else{
        console.log("olaa")
        element.classList.remove('animate-timeline')
      }
    })
  }

  return (
    <div 
      className="
        h-full 
        pr-[50px] 
        pl-[50px] 
        tablet:pr-[15px] 
        tablet:pl-[15px] 
    ">
      <Home />
      <main
        className="
          mt-[150px]
        ">
        <Sobre />
      </main>
    </div>
  )
}

export default App

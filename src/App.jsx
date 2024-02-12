import { useEffect } from "react"
import { Footer } from "./components/footer/footer"
import { Habilidades } from "./pages/habilidades"
import { Home } from "./pages/home"
import { Projetos } from "./pages/projeto"
import { Sobre } from "./pages/sobre"
import "./styles/animations/slide_animation.css"
import { debounce } from "./utils/debounce"
import "./styles/animations/animate.css"

function App() {

  useEffect(()=>{
    window.addEventListener('scroll', debounce(()=>{
      animate_timeline()
      animeScroll()
    }, 200))

    return ()=>{
      window.removeEventListener('scroll',debounce(()=>{
        animate_timeline()
        animeScroll()
      }, 150))
    }
  }, [])

  const animate_timeline = ()=>{
    const page_about = document.getElementById('sobre')
    const target_timeline = document.querySelectorAll('[data-anime-timeline]')
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)

    target_timeline.forEach(element => {
      if((windowTop) > page_about.offsetTop){
        element.classList.add('animate-timeline')
      }else{
        element.classList.remove('animate-timeline')
      }
    })
  }

 

  function animeScroll() {
    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }

  return (
    <>
      <div 
        className="
          pr-[50px] 
          pl-[50px] 
          tablet:pr-[15px] 
          tablet:pl-[15px] 
      ">
        <div className="h-[100vh]" id="home">
          <Home />
        </div>
        <main
          className="
            mt-[150px]
            flex
            flex-col
            gap-[350px]
          ">
          <Sobre />
          <Projetos />
          <Habilidades />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App

/**
 * Node Modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Work from './components/Work.jsx'
import Review from './components/Review.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  useGSAP(() => {
    const elements= gsap.utils.toArray('.reveal-up');
    elements.forEach(element => {
      gsap.to(element,{
        scrollTrigger:{
          trigger:element,
          scrub:true,
          start: '-200 bottom',
          end:'bottom 80%'
        },
        y:0,
        ease:'power2.out',
        duration:1,
        opacity:1
      })
    })
  })

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Main />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}
export default App;
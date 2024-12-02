
/**
 * Components
 */
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Work from './components/Work.jsx'
import Review from './components/Review.jsx'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Skill />
        <Work />
        <Review />
      </main>
    </>
  )
}
export default App;
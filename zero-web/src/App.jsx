
/**
 * Components
 */
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <About />
        <Skill />
      </main>
    </>
  )
}
export default App;
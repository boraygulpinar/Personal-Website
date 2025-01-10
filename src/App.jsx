import './App.css'
import About from './components/About'
import AboutList from './components/AboutList'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import VideoBackground from './components/VideoBackground'

function App() {

  return (
    <div className='app-container'>
      <VideoBackground />
      <div className='content'>
        <Header />
        <About />
        <AboutList />
        <Skills />
        <Projects />
      </div>
    </div>

  )
}

export default App




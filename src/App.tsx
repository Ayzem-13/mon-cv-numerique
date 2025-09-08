
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import AboutMe from './components/sections/AboutMe'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import Project from './components/sections/project'
import Welcome from './components/sections/Welcome'
import './index.css'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <main> 
            <Navbar/>
            <Pagination/>
            <Welcome/>
            <AboutMe/>
            <Project/>
            <Contact/>
      </main>
      <Footer/>
    </div>
    
  )
}

export default App
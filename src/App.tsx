
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Project from './pages/project'
import Welcome from './pages/Welcome'
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
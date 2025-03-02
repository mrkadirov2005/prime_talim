import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Test from './pages/Test'
import AboutUs from './pages/AboutUs'
import VCourses from './pages/VCourses'
import Courses from './pages/Courses'
import SEB from './pages/SEB'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/seb' element={<SEB/>}></Route>
    </Routes>
    <Header/>
    <main id='main' className='min-h-screen h-fit flex flex-col items-center justify-between'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/videos' element={<VCourses/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

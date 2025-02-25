import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Courses from './pages/Courses'
import Videos from './pages/Videos'
import Test from './pages/Test'
import AboutUs from './pages/AboutUs'
function App() {


  return (
    <BrowserRouter>
    
    <Header/>
    <main className='min-h-screen h-fit flex flex-col items-center justify-between pt-20'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/videos' element={<Videos/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App

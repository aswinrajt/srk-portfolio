import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Works from './components/Works'
import Intro from './components/Intro'
import About from './components/About'
import Achievments from './components/Achievments'
import Carousel from './components/Carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
   <Header/>
   
   <Intro/>
   <Works/>
   <About/>
   <Achievments/>
   <Footer/>
    </>
  )
}

export default App

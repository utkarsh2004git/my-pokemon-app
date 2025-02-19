import React from 'react'
import Navbar from './components/Navbar'
import Pokemon from './pages/Pokemon'
import Footer from './components/Footer'
import "./App.css"
const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Pokemon/>
      <Footer/>
    </div>
  )
}

export default App
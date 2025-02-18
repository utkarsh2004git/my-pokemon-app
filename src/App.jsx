import React from 'react'
import Navbar from './components/Navbar'
import Pokemon from './pages/Pokemon'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Pokemon/>
      <Footer/>
    </div>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import Mission from './components/custom/Mission'
import Figures from './components/custom/Figures'
import ContactUs from './components/custom/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <Mission/>
      <Figures/>
      <ContactUs/>
    </>
  )
}

export default App

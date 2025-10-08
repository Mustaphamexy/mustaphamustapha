import { useState } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Resume from "./components/Resume"
import Services from "./components/Services"
import Contact from './components/Contact'
import ElevatorPitch from './components/ElevatorPitch'
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <ElevatorPitch />
      <Services />
      <Resume />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
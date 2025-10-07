import { useState } from 'react'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Resume from "./components/Resume"
import Services from "./components/Services"
import Contact from './components/Contact'
import ElevatorPitch from './components/ElevatorPitch'

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
    </>
  )
}

export default App
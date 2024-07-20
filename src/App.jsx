import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, 
        Hero, Navbar, Works, StarsCanvas} from "./components"
import { Analytics } from "@vercel/analytics/react"
import SplineModel from "./components/canvas/SplineModel"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover 
        bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <SplineModel />
        </div>
        <About/>
        <Experience/>
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics />
    </BrowserRouter>
  )
}

export default App

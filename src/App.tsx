import React from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import TrustStrip from "./components/TrustStrip"
import About from "./components/About"
import Services from "./components/Services"
import ProcessTimeline from "./components/ProcessTimeline"
import WhyChoose from "./components/WhyChoose"
import Stats from "./components/Stats"
import Faq from "./components/Faq"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <ProcessTimeline />
      <WhyChoose />
      <Stats />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App
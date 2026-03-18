import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Terminal from './components/Terminal'
import Install from './components/Install'
import Features from './components/Features'
import TrustedStack from './components/TrustedStack'
import Shipping from './components/Shipping'
import Everything from './components/Everything'
import Fullstack from './components/Fullstack'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="max-w-[1426px] mx-auto w-full border-x border-[#e5e4e7] min-h-screen">
      <Navbar />
      <div className="ticks"></div>
      <Hero />
      <div className="ticks"></div>
      <Terminal />
      <div className="ticks"></div>
      <Install />
      <div className="ticks"></div>
      <Features />
      <div className="ticks"></div>
      <TrustedStack />
      <div className="ticks"></div>
      <Shipping />
      <div className="ticks"></div>
        </div>
        <div className='bg-[#16171E]'>
      <Everything />
      <div className="ticks"></div>
      </div>
      <div className="max-w-[1426px] mx-auto w-full border-x border-[#e5e4e7]">
        <Fullstack />
      </div>
           <div className='bg-[#16171E]'>
      <div className="max-w-[1426px] mx-auto w-full border-x border-[#2a2a2a] ">
        <Footer />
      </div>
      </div>
      </>
  )
}

export default App

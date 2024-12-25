import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Showroom } from "./components/showroom"
import { Contact } from "./components/contact"
import './globals.css'

export default function Home() {
  return (
    <div>
      <Hero />  
      <About />
      <Showroom />
      <div className="bg-dark-blue text-white p-8 text-center text-5xl font-bold underline">
        <h2>Contact Us</h2>
      </div>
      <Contact />
    </div>
    
  );
}

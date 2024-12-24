import Image from "next/image";
import { Hero } from "./components/hero"
import { About } from "./components/about"
import './globals.css'

export default function Home() {
  return (
    <div>
      <Hero />  
      <About />
    </div>
    
  );
}

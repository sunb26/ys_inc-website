import Image from "next/image";
import { Hero } from "./components/hero"
import { About } from "./components/about"
import { Showroom } from "./components/showroom"
import './globals.css'

export default function Home() {
  return (
    <div>
      <Hero />  
      <About />
      <Showroom />
    </div>
    
  );
}

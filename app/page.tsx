import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Showroom } from "@/components/home/showroom";
import { Contact } from "@/components/home/contact";
import "./globals.css";

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

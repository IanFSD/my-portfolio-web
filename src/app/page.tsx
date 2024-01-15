import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white 
    h-screen snap-y snap-mandatory overflow-scroll z-0">
      <title>Portfolio Ian</title>

    {/*Header*/}  
    <Header/>

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero/>
    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About/>
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
      <Experience/>
    </section>
    
    {/* Skills */}


    {/* Projects */}


    {/* Contact */}
    </div>
  );
}

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Experiences, PageInfo, Project, Skill, Social } from "./api/types/typings";
import { fetchSocials } from "./api/fetchSocials";
import { fetchExperience } from "./api/fetchExperiences";
import { fetchPageInfo } from "./api/fetchPageInfo";
import { fetchProjects } from "./api/fetchProjects";
import { fetchSkills } from "./api/fetchSkills";

type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default async function Home({}) {
  const data = await getData();
  return (
    <div className="bg-[rgb(36,36,36)] text-white 
    h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]">
      <title>Portfolio Ian</title>

    {/*Header*/}  
    <Header socials={data.socials}/>

    {/* Hero */}
    <section id="hero" className="snap-start">
      <Hero pageInfo={data.pageInfo}/>
    </section>

    {/* About */}
    <section id="about" className="snap-center">
      <About pageInfo={data.pageInfo}/>
    </section>

    {/* Experience */}
    <section id="experience" className="snap-center">
      <Experience experiences={data.experiences}/>
    </section>
    
    {/* Skills */}
    <section id="skills" className="snap-start">
      <Skills skills={data.skills}/>
    </section>

    {/* Projects */}
    <section id="projects" className="snap-start">
      <Projects projects={data.projects}/>
      </section>

    {/* Contact */}
    <section id="contact" className="snap-start">
      <Contact/>
    </section>
    </div>
  );
}

async function getData() {
  try {
  const socials = await fetchSocials();
  const experiences = await fetchExperience();
  const pageInfo = await fetchPageInfo();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  return {
      socials,
      experiences,
      pageInfo,
      projects,
      skills
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error()
  }
}

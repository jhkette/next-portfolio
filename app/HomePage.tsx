"use client";
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import ContactForm from "@/components/ContactForm";
import Header from "./Header";
import Footer from "./Footer";
import { DESCRIPTION_QUERYResult, ABOUT_QUERYResult, SKILL_QUERYResult, EDUCATION_QUERYResult, EXPERIENCE_QUERYResult, PROJECT_QUERYResult } from "@/sanity.types";
interface Props {
  data: data;
  description: DESCRIPTION_QUERYResult;
  about: ABOUT_QUERYResult;
  skills: SKILL_QUERYResult,
  education: EDUCATION_QUERYResult,
  experience: EXPERIENCE_QUERYResult,
  projects: PROJECT_QUERYResult
  
}

const HomePage = ({ data, description, about, skills, education , experience, projects}: Props) => {
 

  return (
    <>
      <Header logo={data.main.name} />
      <Hero mainData={data.main} description={description} />
      <Socials socials={data.socials} />
      <About aboutData={data.about} name={data.main.name} aboutSanity={about} />
      <Skills  skillsList={skills}/>
      <Projects projectsData={data.projects} projectSanity={projects} />
      <Experiences
      
        experienceSanity={experience}
        educationSanity={education}
      />
      <ContactForm />
      <Footer socials={data.socials} name={data.main.name} />
    </>
  );
};

export default HomePage;

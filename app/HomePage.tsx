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
import { DESCRIPTION_QUERYResult, ABOUT_QUERYResult, SKILL_QUERYResult,  } from "@/sanity.types";
interface Props {
  data: data;
  description: DESCRIPTION_QUERYResult;
  about: ABOUT_QUERYResult;
  skills: SKILL_QUERYResult
}

const HomePage = ({ data, description, about, skills }: Props) => {
  console.log(skills, "THIS IS skills");

  return (
    <>
      <Header logo={data.main.name} />
      <Hero mainData={data.main} description={description} />
      <Socials socials={data.socials} />
      <About aboutData={data.about} name={data.main.name} aboutSanity={about} />
      <Skills  skillsList={skills}/>
      <Projects projectsData={data.projects} />
      <Experiences
        experienceData={data.experiences}
        educationData={data.educations}
      />
      <ContactForm />
      <Footer socials={data.socials} name={data.main.name} />
    </>
  );
};

export default HomePage;

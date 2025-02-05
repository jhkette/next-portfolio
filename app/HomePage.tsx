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
import {
  DESCRIPTION_QUERYResult,
  ABOUT_QUERYResult,
  SKILL_QUERYResult,
  EDUCATION_QUERYResult,
  EXPERIENCE_QUERYResult,
  PROJECT_QUERYResult,
} from "@/sanity.types";
interface Props {
  description: DESCRIPTION_QUERYResult;
  about: ABOUT_QUERYResult;
  skills: SKILL_QUERYResult;
  education: EDUCATION_QUERYResult;
  experience: EXPERIENCE_QUERYResult;
  projects: PROJECT_QUERYResult;
}

const HomePage = ({
  description,
  about,
  skills,
  education,
  experience,
  projects,
}: Props) => {
  return (
    <>
      <Header logo={description[0].name as string} />
      <Hero description={description} />
      <Socials />
      <About
        name={description[0].name as string}
        aboutSanity={about}
      />
      <Skills skillsList={skills} />
      <Projects projectSanity={projects} />
      <Experiences experienceSanity={experience} educationSanity={education} />
      <ContactForm />
      <Footer name={description[0].name as string} />
    </>
  );
};

export default HomePage;


import { defineQuery } from "next-sanity";

export const DESCRIPTION_QUERY = 
defineQuery(`*[_type == "description" && name == "Joseph"]{
_id, name, description, techStackImages, titles
}`);

export const ABOUT_QUERY = 
defineQuery(`*[_type == "about" && aboutTitle == "Full Stack Developer"]{
_id,  about, aboutImage, aboutTitle
}`);

export const SKILL_QUERY = 
defineQuery(`*[_type == "skill"]{
_id,  skill, image, category
}`);


export const EDUCATION_QUERY = 
defineQuery(`*[_type == "eduction"]{
_id,  institute, degree, duration, desc
}`);


export const EXPERIENCE_QUERY = 
defineQuery(`*[_type == "experience"]{
_id,  company, position, duration, desc
}`);

export const PROJECT_QUERY = defineQuery(`*[_type == "project"]{
    _id,
    projectName,
    techstack,
    description,
    projectImage,
    category,
    link { code, visit }
  }`);






import { defineQuery } from "next-sanity";
export const POSTS_QUERY = 
defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
_id, title, body, slug, publishedAt,  author->{name}, 
}`);


export const DESCRIPTION_QUERY = 
defineQuery(`*[_type == "description" && name == "Joseph"]{
_id, name, description, 
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
_id,  institute, degree, duration
}`);




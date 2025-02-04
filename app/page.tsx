import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
import {data} from "@/lib/data"
import {client} from "@/sanity/lib/client"
import { DESCRIPTION_QUERY, ABOUT_QUERY, SKILL_QUERY, EDUCATION_QUERY, EXPERIENCE_QUERY } from "@/sanity/queries";


export default async function page() {
 
  const description = await client.fetch(DESCRIPTION_QUERY);
  const about = await client.fetch(ABOUT_QUERY);
  const skills = await client.fetch(SKILL_QUERY);
  const education = await client.fetch(EDUCATION_QUERY);
  const experience = await client.fetch(EXPERIENCE_QUERY);
  // education = education.map((edu: any) => ({
  //   ...edu,
  //   desc: edu.desc || []
  // }));
  // console.log(skills, "THIS IS ABOUT")
  return (
    <>
      {data && description && about ? (
        <HomePage data={data} description={description} about={about} 
          skills={skills} education={education} experience={experience}
        />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-blue-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          {/* <FaNodeJs size={100} className="animate-pulse" /> */}
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}

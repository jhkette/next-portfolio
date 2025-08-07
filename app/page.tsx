import HomePage from "./HomePage";
import { sanityFetch } from "@/sanity/lib/live"
import { DESCRIPTION_QUERY, ABOUT_QUERY, SKILL_QUERY, EDUCATION_QUERY, EXPERIENCE_QUERY, PROJECT_QUERY } from "@/sanity/queries";


export default async function page() {
 
  const {data: description} = await sanityFetch({query: DESCRIPTION_QUERY});
  const {data: about} = await sanityFetch({query:ABOUT_QUERY});
  const {data: skills} = await sanityFetch({query:SKILL_QUERY});
  const {data: education} = await sanityFetch({query:EDUCATION_QUERY});
  const {data: experience} = await sanityFetch({query:EXPERIENCE_QUERY});
  const {data: projects} = await sanityFetch({query:PROJECT_QUERY});

  return (
    <>
      {description && about && skills ? (
        <HomePage description={description} about={about} 
          skills={skills} education={education} experience={experience}
          projects={projects}
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

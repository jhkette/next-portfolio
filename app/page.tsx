import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
// import { ref, get } from "firebase/database"
import {data} from "@/lib/data"
import {client} from "@/sanity/lib/client"
import { DESCRIPTION_QUERY, POSTS_QUERY } from "@/sanity/queries";


export default async function page() {
 
  const description = await client.fetch(DESCRIPTION_QUERY);
  // console.log(faqsAccount)
  return (
    <>
      {data && description ? (
        <HomePage data={data} description={description} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-blue-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          {/* <FaNodeJs size={100} className="animate-pulse" /> */}
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}

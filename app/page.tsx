import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

async function getData() {
  const res = await fetch("http://localhost:3000/data.json", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-blue-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}
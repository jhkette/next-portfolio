import { FaNodeJs } from "react-icons/fa";
import HomePage from "./HomePage";
// import { ref, get } from "firebase/database"
import { getData } from "@/lib/getData";


async function getData1() {

  // return await (await get(ref(database))).val()

  const DB_URL =  'https://api.jsonbin.io/v3/b/679cd841e41b4d34e481cb2d'
  const res = await fetch(DB_URL, {
		method: 'GET',
		headers: {
			'X-Master-Key': process.env.X_MASTER_KEY as string,
			'X-Access-Key': process.env.X_ACCESS_KEY as string
		},
	})
  const data = res.json()
  return data
}

export default async function page() {
  const data = await getData1();


  console.log(data)

  return (
    <>
      {data ? (
        <HomePage data={data.record} />
      ) : (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 text-blue-600 fixed z-30 bg-gray-100 dark:bg-grey-900">
          {/* <FaNodeJs size={100} className="animate-pulse" /> */}
          <p className="animate-pulse text-xl">Loading...</p>
        </div>
      )}
    </>
  );
}

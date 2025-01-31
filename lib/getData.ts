"use server"
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";
async function getData() {
    const dataRef = ref(database, "/");
    console.log(dataRef)
    let data;
    onValue(dataRef, (snapshot) => {
      data = snapshot.val();
    });
    console.log(data);
    return data;
  }

  export { getData };
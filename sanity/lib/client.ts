import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { defineLive } from "next-sanity";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const token = process.env.SANITY_API_TOKEN
if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN")
}


// export const { sanityFetch, SanityLive } = defineLive({
//   client,
  
// })
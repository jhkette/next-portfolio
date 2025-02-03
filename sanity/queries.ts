import { client } from "./lib/client";
import { defineQuery } from "next-sanity";
export const POSTS_QUERY = 
defineQuery(`*[_type == "post" && defined(slug.current)]|order(publishedAt desc){
_id, title, body, slug, publishedAt,  author->{name}, 
}`);

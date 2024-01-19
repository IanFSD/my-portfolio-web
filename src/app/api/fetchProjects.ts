import { Project } from "@/app/api/types/typings";


let query = encodeURIComponent(`*[_type == "project"]{
  ...,
   technologies[]->{
     title,
     image,
   }
 }`);
  let URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;
  

export const fetchProjects = async ()=> {
  try{
    const res = await fetch(URL,{ next: { revalidate: 10 } });
    const data = await res.json();
    const projects: Project[] = data.result
    return projects;
  } catch (err) {
    console.error('Projects error: ' + JSON.stringify(err));
  }
}
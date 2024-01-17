import { Experiences } from "@/app/api/types/typings";

let query = encodeURIComponent(`*[_type == 'experience'] {
  ...,
   technologies[]->{
     title,
     image,
   }
 }`);
let URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;
  
export const fetchExperience = async ()=> {
    const res = await fetch(URL,{ next: { revalidate: 10 } });

    const data = await res.json();
    const experiences: Experiences[] = data.result
    return experiences;
}
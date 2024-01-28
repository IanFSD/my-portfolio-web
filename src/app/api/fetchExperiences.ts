import { Experiences } from "@/app/api/types/typings";

let query = encodeURIComponent(`*[_type == 'experience'] | order(dateStarted desc) {
  ...,
   technologies[]->{
     title,
     image,
   }
 }`);
let URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;
  
export const fetchExperience = async ()=> {
  try{
    const res = await fetch(URL,{ next: { revalidate: 10 } });

    const data = await res.json();
    const experiences: Experiences[] = data.result
    return experiences;
  } catch (err) {
    console.error('Experiences error: ' + JSON.stringify(err));
    throw new Error(`Experiences not found ${err}`)

  }
}
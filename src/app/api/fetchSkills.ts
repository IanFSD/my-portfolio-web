import { Skill } from "@/app/api/types/typings";

let query = encodeURIComponent('*[_type == "skill"]');
 
let URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

export const fetchSkills = async ()=> {
    const res = await fetch(URL,{ next: { revalidate: 10 } });
    const data = await res.json();
    const skills: Skill[] = data.result
    return skills;
}
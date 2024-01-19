import { Social } from "@/app/api/types/typings";

let query = encodeURIComponent('*[_type == "social"]');

export const fetchSocials = async ()=> {
  try {
  let URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

  const res = await fetch(URL,{ next: { revalidate: 10 } });

  const data = await res.json();
  const socials: Social[] = data.result
  return socials;
  } catch (err) {
    console.error('Socials error: ' + JSON.stringify(err));
  }
}
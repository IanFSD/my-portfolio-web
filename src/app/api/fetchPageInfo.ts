import { PageInfo } from "@/app/api/types/typings";


let query = encodeURIComponent(`*[_type == "pageInfo"]`);
let URL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

export const fetchPageInfo = async ()=> {
    try{
    const res = await fetch(URL,{ next: { revalidate: 10 } });
    const data = await res.json();
    const pageInfo: PageInfo = data.result[0]
    return pageInfo;
    } catch (err) {
        console.error('Page info error: ' + JSON.stringify(err));
        throw new Error()
      }
}
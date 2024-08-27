import { ImageResults } from "../models/Images";

export default async function fetchImages(url: string): Promise<ImageResults> {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: process.env.PEXEL_API_KEY
            }
        });
        if (!res.ok) throw new Error('Fetch Images Failed!');
        const imageResults: ImageResults = await res.json();
        console.log(imageResults);
        
        
    } catch (e) {

    }

}
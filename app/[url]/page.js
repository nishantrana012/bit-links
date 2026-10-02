import { redirect } from 'next/navigation'
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    const { url } = await params
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls");

    //Check if shortUrl already exists in the database
    const exists = await collection.findOne({ shortUrl: url });
    if (exists) {
        redirect(exists.longUrl);
    }
    return (
        <div className="text-center my-16 text-4xl flex flex-col gap-4 items-center">
            Link not found!
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 cursor-pointer ml-4 text-2xl"><a href="/shorten">Create One</a></button>
        </div>
    )
}
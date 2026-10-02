import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls");

    //Check if shortUrl already exists in the database
    const exists = await collection.findOne({shortUrl : body.shortUrl});
    if(exists){
        return Response.json({message : "Short URL already exists", success : false});
    }
    const result = await collection.insertOne({shortUrl: body.shortUrl, longUrl: body.longUrl});
    return Response.json({message : "Short URL created successfully", success : true});
}   
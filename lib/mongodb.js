import { MongoClient, ServerApiVersion } from "mongodb"

const uri = process.env.MONGODB_URI;

if(!uri){
    throw new Error('Please add your Mongo URI to .env.local');
}

// Creates a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);

let clientPromise
try {
    // Connects the client to the server (optional starting in v4.7)
    clientPromise = await client.connect();

} catch (e) {
    console.error(e);
    throw new Error('Failed to connect to MongoDB');
}

export default clientPromise;

import * as mongodb from "mongodb";
import * as dotenv from "dotenv";
import ZipCode from "./models/zipCodes";

// Global Variables
// @ts-expect-error
export const collections : {
    zipCodes: mongodb.Collection<ZipCode>
} = {};

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();
 
    const client : mongodb.MongoClient = new mongodb.MongoClient("mongodb://localhost:27017", {serverSelectionTimeoutMS: 1000});
    await client.connect();

    const db = client.db("data");

    collections.zipCodes = db.collection( "zipCodes");

       
    console.log(`Successfully connected to database: ${db.databaseName}`);
 }
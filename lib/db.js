import { MongoClient } from "mongodb";

export async function DbConnection() {
  const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.cffqjyb.mongodb.net/?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(connectionString);
  return client;
}

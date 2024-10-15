const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'e-com';

async function dbConnect() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  return db.collection('products');
}

module.exports= dbConnect;
const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://admin:admin@cluster0.57rsz.mongodb.net/rest?w=majority';

let db;
async function init() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true });
  db = client.db('rest');
}

function getDB() {
  return db;
}

module.exports = { getDB, init };

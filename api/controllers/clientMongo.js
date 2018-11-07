var MongoClient = require('mongodb').MongoClient;

function clientMongo() {
  this.uri = 'mongodb+srv://hoangtuan:Abc123456789@cluster0-lc7su.gcp.mongodb.net/test?retryWrites=true';
}

clientMongo.prototype.connect = function() {
  return new Promise((res ,rej) => {
      MongoClient.connect(this.uri, { useNewUrlParser: true }, (err, client) => {
        const collection = client.db("test").collection("tasks");
        res(collection);
    });
  })
}

module.exports = new clientMongo();
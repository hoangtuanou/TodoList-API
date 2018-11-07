var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var Task = require('./api/models/todoListModel');
var bodyParser = require('body-parser');

var uri = 'mongodb+srv://hoangtuan:Tu%40n!Th%401994@cluster0-lc7su.gcp.mongodb.net/test?retryWrites=true';

// mongoose.Promise = global.Promise;
// mongoose.connect(uri, { useNewUrlParser: true }); 

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
  console.log(client);
  // const collection = client.db("test").collection("devices");
  // // perform actions on the collection object
  // client.close();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app);

app.listen(port);

console.log('Server listen on: ' + port);
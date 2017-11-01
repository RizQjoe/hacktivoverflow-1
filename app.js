const express = require ('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
var MongoClient = require("mongodb").MongoClient;
//connnet to mongdbatlas
var uri ="mongodb://rizqjoe:admin123@cluster0-shard-00-00-sajed.mongodb.net:27017,cluster0-shard-00-01-sajed.mongodb.net:27017,cluster0-shard-00-02-sajed.mongodb.net:27017/overflow-rizqjoe?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";;
MongoClient.connect(uri, function(err, db) {
    db.close();
});

const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.json({ type: "application/x-www-form-urlencoded" }));

app.use(cors());



// test for connect 
app.get('/', function(req,res){
    res.send('hello')
})


//listen port 
app.listen(3000,()=>{
    console.log('listen port 3000 running')
})
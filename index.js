const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://marcus:123456a@ds161764.mlab.com:61764/hackatown2019";
let db;
const app = express();

MongoClient.connect(
  url,
  function(err, client) {
    db = client;
  }
);

const port = process.env.PORT || 3000;

app.get("/locations", (req, res) => {
  db.db()
    .collection("locations")
    .find()
    .toArray()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("location an error occurred", err);
    });
});
app.get("/activities", (req, res) => {
  db.db()
    .collection("activities")
    .find()
    .toArray()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log("activities an error occurred", err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

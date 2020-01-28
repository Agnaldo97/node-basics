//require mongoose module
var mongoose = require("mongoose");
//require chalk module to give colors to console text
var chalk = require("chalk");
//require database URL from envirnment file
var dbURL = require("config").get("db");

class MongoConnection {
  constructor() {
    this.initConnection();
  }

  //export this function and imported by server.js
  initConnection() {
    mongoose
      .connect(dbURL)
      .then(res => {
        console.log(`Mongoose default connection is open to: ${dbURL}`);
      })
      .catch(err => {
        console.log("Mongoose Connection Error:", err);
      });
  }
}

module.exports = MongoConnection;

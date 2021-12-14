
var express = require("express");
var admin = require('firebase-admin');
import fire from 'fire'; 

var serviceAccount = require(fire);  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),  
  databaseURL: 'https://react-db.firebaseio.com'
});


function SaveAccessToken(access_token) {
  firebase.database().ref('users/'+userid).set({
    access_token : access_token
  });
}
function GetAccessToken(access_token) {
  firebase.database().ref('users/').set({
    access_token : access_token
  });
}
var app = express();
var number = Math.floor(Math.random() * 10) + 1;
var TWILIO_ACCOUNT_SID = "AC9e42b8e4e0bcae9779f018155ca43062";
var TWILIO_AUTH_TOKEN = "f8d3abaa0bb829edbacabb25b2cdf4bb";
var TWILIO_PHONE_NUMBER = "+18335792425";
var CELL_PHONE_NUMBER = "+923226622773";
var client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

app.listen(3001, () => {
  
  app.get("/random-number", (req, res, next) => {
  res.type('text/plain');
  var randomnumber=Math.floor(Math.random()*90000) + 100000;
  var db = admin.database();
  var ref = db.ref("/restau");
  await firebase.database().ref().update(updates);
  console.log(randomnumber); 
  SaveAccessToken(randomnumber);
  
 client.messages.create({
	from: process.env.TWILIO_PHONE_NUMBER,
	to: process.env.CELL_PHONE_NUMBER,
    body: "Here is your Code "+randomnumber
 }).then((message) => console.log(message.sid));
  
  
});


  app.get("/tally-access-code", (req, res, next) => {
    var access_token = req['access_token']; 
    console.log(true);
  });



});
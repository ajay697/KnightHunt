var express = require("express");
var bodyParser = require("body-parser");

var cricapi = require("cricapi");

var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("https://cricapi.com/api/matchCalendar?apikey=8LyrrugU7LQf78eDIXejpS85CHZ2",(error,response,body)=>{
  if(error){
    console.log(error);
  }
  res.send(JSON.parse(body));
})

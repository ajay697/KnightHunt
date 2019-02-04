let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let cricapi = require("cricapi");
let request = require("request");


cricapi.setAPIKey("8LyrrugU7LQf78eDIXejpS85CHZ2");
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

let url = "https://cricapi.com/api/matchCalendar?apikey=8LyrrugU7LQf78eDIXejpS85CHZ2"
let u = "https://cricapi.com/api/matches?apikey=8LyrrugU7LQf78eDIXejpS85CHZ2"
app.get("/",function(req,res){
  res.sendFile(__dirname+"/homepage.html");
});
request.get(u,function(error,response,body){
  if(error){
    return console.log(error);
  }
  console.log(JSON.parse(body));
});

app.listen(3000,function(req,res){
  console.log("the connection is established at port 3000");
});

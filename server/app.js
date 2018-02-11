const express = require("express");
const radiosJSON = require("./data/radios");
const app = express();

app.use(express.static("../build"));

app.get("/",(req,res)=>{
    res.sendfile("../build/index.html");
}) 

app.get("/api/radio_list",(req,res)=>{
    res.json(radiosJSON);
});

app.listen(8080,()=>console.log("Server running"));
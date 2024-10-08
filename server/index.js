const express = require("express");
const session = require("express-session");
require("dotenv").config();


const app = express();


app.get("/", (req,res)=>{
res.send("Weather Backend Working Successfully!")
});

app.get("/weather", async (req,res)=>{

    let cityname = req.query.city;
    let apikey = process.env.weatherAPI;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}`;

    try {
        const response = await fetch(url);
        const json = await res.json();
        res.send(json);
        }
    catch(err){
        console.log(err);
    }
});

const port = 4000;
app.listen(port, (err)=>{
    if(err) console.log(err);
    else {
        console.log(`Server PORT IS RUNNING AT:: ${port}`);
    }
})
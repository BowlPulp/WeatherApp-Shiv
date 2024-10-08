const express = require("express");
const session = require("express-session");
const isAuth = require("./middlewares/auth");
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
        const json = await response.json();
        res.send({ ...json, list: [json.list[0]] });
    }
    catch(err){
        console.log(err);
    }
});


app.get("/next-days-forcast", isAuth, async (req,res)=>{
    let cityname = req.query.city;
    let apikey = process.env.weatherAPI;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${apikey}`;

    try {
        const response = await fetch(url);
        const json = await response.json();
        res.send(json);
    }
    catch(err){
        console.log(err);
    }
});





const port = 4005;
app.listen(port, (err)=>{
    if(err) console.log(err);
    else {
        console.log(`Server PORT IS RUNNING AT:: ${port}`);
    }
})
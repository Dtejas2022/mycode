const express = require("express");
// const mongoose = require('mongoose');
const app = express();
const {connectDB,User} = require('./batabase/database');
PORT = 3000;

connectDB;


app.use(express.json());

app.get("/",(req,res)=>{
    res.send("app is running");
});

app.post("/register",()=>{
    const {userName, password} = req.body;

    const newUser = new User({
        userName,
        password
    });

    newUser.save();
    res.send("user registerd");
});



app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
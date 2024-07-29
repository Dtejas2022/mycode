const express = require("express");
// const mongoose = require('mongoose');
const app = express();
const connectDB = require('./batabase/database');
PORT = 3000;

connectDB;

app.get("/",(req,res)=>{
    res.send("app is running");
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
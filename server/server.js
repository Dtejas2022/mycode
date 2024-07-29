const express = require("express");
const app = express();
require('./batabase/database');
PORT = 3000;

connectDB();

app.get("/",(req,res)=>{
    res.send("app is running");
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
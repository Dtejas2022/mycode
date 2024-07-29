const express = require("express");
const app = express();
PORT = 3000;

app.get("/",(req,res)=>{
    res.send("app is running");
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
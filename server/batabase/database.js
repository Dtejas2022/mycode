const mongoose = require("mongoose");
const connectDB = mongoose.connect("mongodb://atlas-sql-652f6f1ef30f77480719340c-cojzm.a.query.mongodb.net/login?ssl=true&authSource=admin",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});

module.exports = connectDB;
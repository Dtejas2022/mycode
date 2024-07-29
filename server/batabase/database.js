const mongoose = require("mongoose");
// require('./userSchema');
// require('User');
const connectDB = mongoose.connect("mongodb://atlas-sql-652f6f1ef30f77480719340c-cojzm.a.query.mongodb.net/login?ssl=true&authSource=admin",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});


const userSchema = new mongoose.Schema({
    userName :{
        type: String,
        require : true
    },

    password : { 
        type:String,
        require:true
    }

});

const User = new mongoose.model("User", userSchema)



module.exports = {connectDB, User};
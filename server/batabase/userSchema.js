const mongoose = require('mongoose');
mongoose.connect("mongodb://atlas-sql-652f6f1ef30f77480719340c-cojzm.a.query.mongodb.net/login?ssl=true&authSource=admin");

const userSchema = new mongoose.Schema({
    userName :{
        type: String,
        require : true
    },

    password : { 
        type: password,
        require:true
    }

});

const User = new mongoose.model("user", userSchema);

const user1 = new User({
    userName:'tejas',
    password:"tejas@m123"
});

user1.save();

module.exports = userSchema;

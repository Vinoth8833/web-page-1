const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const loginData = mongoose.model("studentLogin",userSchema)
module.exports = loginData
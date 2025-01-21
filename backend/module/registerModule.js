const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,  
        require:true
    }
})

const registerData = mongoose.model('nameDetails',userSchema)
module.exports = registerData
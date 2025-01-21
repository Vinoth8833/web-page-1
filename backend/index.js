const express = require('express')
const cors = require('cors')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const registerData = require('./module/registerModule')
const loginData = require("./module/loginModule")

const port = 3002
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://vinothismail5734256:Vinoth123@cluster0.271bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(pre=>console.log("db is connected"))
.catch(err=>console.log(err))

app.post('/register',(req,res)=>{
    console.log(req.body)
    const newData = registerData(req.body)
    newData.save()
    res.status(200).send("data send success")
})

app.post('/login',async(req,res)=>{
    const {email, password} = req.body
    try {
        const user = await registerData.findOne({email:email,password:password})
        if(!user ){
            res.status(404).send("invalid user")
        }
        else {
            res.status(200).send(`${user.name}`)
        }
    } catch (error) {
        
    }
})

app.listen(port,()=>{
    console.log("server run in 3002")
})
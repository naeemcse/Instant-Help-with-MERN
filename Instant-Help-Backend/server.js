const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const PersonModel = require('./models/registrationModel');

const app = express();
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect("mongodb://127.0.0.1:27017/ServiceProvider");

// registration information post
app.post('/register',(req,res)=>{
    PersonModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.json(err))
})

app.listen(3000, ()=>{
    console.log('Server is running');
})
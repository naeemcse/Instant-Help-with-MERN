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

// searching person in the database
app.get('/findPerson', async(req,res)=>{

    const {divisionName,zillaName,upZillaName,profession} = req.query;

   try{
    
    const persons = await PersonModel.find({
        divisionName :  divisionName,
        zillaName :  zillaName,
        upZillaName:upZillaName,
        profession:profession
    })
    console.log("Found data is " + persons);
    res.json(persons);
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error : 'An error occured while fetching data'});
   }
})

app.get('/findPersonDemo', async(req,res)=>{

    const {divisionName,zillaName} = req.query;
  

   try{
    console.log(`Received GET request: /findPersonDemo?divisionName=${divisionName}&zillaName=${zillaName}`);
    const persons = await PersonModel.find({
        divisionName :  divisionName,
        zillaName :  zillaName
    })
    console.log("Found data is " + persons);
    res.json(persons);
   }
   catch(error){
    console.error(error);
    res.status(500).json({ error : 'An error occured while fetching data'});
   }
})
app.listen(3000, ()=>{
    console.log('Server is running');
})
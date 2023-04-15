// import  ObjectID  from 'mongodb';
// // import router from './Router.js'
// import {MongoClient} from 'mongodb';
// import cors from 'cors'
// import express from 'express'
const { MongoClient, ObjectId } = require('mongodb') //importing The Mongodb and it is communicating with server
const ObjectID = require('mongodb').ObjectId;
const cors =require('cors') //helps for cross connection of websites with diff port number
const express= require('express') //requesting express

const app = express();  //object for express
app.use(cors())   //using object to use cors features
app.use(express.json()) //communicate your data from server to client
// app.use('/api',router)


//Mongodb connection  username Aditya Password Karthik    and uri is used too identify resources
const uri = "mongodb+srv://Aditya:Karthik@cluster0.xgfedyc.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri); //creating object with string ready

client.connect(); //asking for connection

const db = client.db("Aditya")

const collection = db.collection("Karthik")

const collection2 = db.collection("Varsha")

const collection3 = db.collection("Feedback")
 
const port = 2807;



 
app.get('/check', (request,response)=>{
    async function find(){
       console.log( request.query);
       try {
        const result = await collection2.findOne({username:request.query.username})
        console.log(result);
        if(result === null )
        {
            response.send("User Data Not Found");
        }
        else{
            if(result.password === request.query.password){
               response.send("Successful Login");

            }
            else{
                response.send("Incorrect Password")
            }
            
        }
       } finally{

       }
    }
    find().catch(console.dir)
})


// axios register which is registration page


app.post('/registrationuser',(req,res)=>{
    collection.insertOne(req.body);
    console.log(req.body);
    res.send(req.body);
    console.log("Inserted");
})

app.post('/feedback',(req,res)=>{
    collection3.insertOne(req.body);
    console.log(req.body);
    res.send(req.body);
    console.log("Inserted");
})


app.post('/registration',async(request,response)=>{
     
    const {username} = request.body;
    try{
      const result =  await  collection2.findOne({username});
      if(result == null){
          collection2.insertOne(request.body);
          console.log(request.body)
          response.send(request.body)
      }
      else{
        response.status(404).send({msg:"User Already Exists Use Another Name"})
      }
    }catch(error){
        console.log(error);
    }


    
})

app.post('/updatecheck',async(req,res)=>{
    const result = await collection2.findOne({username:req.body.username})
    if(result == null){
       res.status(404).send({msg:"We Cannot update your details"})
       console.log("username not found")
    }
    else{
        const bodyup = result._id;
        console.log(bodyup);
        const body = req.body;
        
        collection2.updateOne({username:req.body.username},{$set:{username:req.body.username,password:req.body.password}})

        console.log("updated");
    }
})


 
app.listen(port)

console.log(`Server Started  on ${port}`);
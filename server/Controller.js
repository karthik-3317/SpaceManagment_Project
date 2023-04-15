import {MongoClient} from 'mongodb';

const uri = "mongodb+srv://Aditya:Karthik@cluster0.xgfedyc.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri); //creating object with string ready

client.connect(); //asking for connection

const db = client.db("Aditya")

const collection = db.collection("Karthik")

export async function checkuser(req,res){
    const {username} = req.body;
    console.log(username);
  const result =  await collection.findOne({username})
  console.log(result)
}


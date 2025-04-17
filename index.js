require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors = require('cors');
const port=3000;
app.use(cors({
  origin: 'http://localhost:5173'
}));
const db_url= process.env.ATLASDB_URL;
main().then(()=>console.log("connected successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(db_url);
}

const list=require("./models/list");
app.listen(port,(req,res)=>{
    console.log(`the port listing at ${port}`)
});

app.get("/", async(req,res)=>
  {
 const lists=  await list.find({});
      res.send(lists);
  })
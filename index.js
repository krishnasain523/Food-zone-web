const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors = require('cors');
const port=3000;
app.use(cors({
  origin: 'http://localhost:5173'
}));

main().then(()=>console.log("connected successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/foodzone');
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
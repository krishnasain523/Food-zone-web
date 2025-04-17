const mongoose=require("mongoose");
const list=require("../models/list");
const initdata=require("./data");

main().then(()=>console.log("connected successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/foodzone');
}

 const initdb=async()=>
{
   await list.deleteMany();
   const intialdata=initdata.data.map((obj)=>(
    {...obj}
   ))
   await list.insertMany(intialdata);
   console.log("database initailized");
}
initdb();
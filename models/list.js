const mongoose=require("mongoose");
const listschema=new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        content:{
            type:String,
            require:true
        },
        price:
        {
            type:Number,
            require:true
        },
        img:String,
        type:String
    }
);
const list=mongoose.model("list",listschema);
module.exports= list;
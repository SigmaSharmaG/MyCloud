const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    folder:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
    },
    path:{
        type:String,
        default:"",
    },
    size:{
        type:Number,

    },
    type:{
        type:String,
    },
    
},{timestamps:true});

module.exports = mongoose.model("File",fileSchema);


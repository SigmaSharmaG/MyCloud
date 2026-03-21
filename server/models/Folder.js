const mongoose = require("mongoose");

const folderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        index:true,
    },
    parentFolder:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
        default:null,
    },
    path:{
        type:String,
        default:"",
    },
    isDeleted:{
        type:Boolean,
        default:false,
    },
    
},{timestamps:true});

module.exports = mongoose.model("Folder",folderSchema);

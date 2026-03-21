const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    password:{
        type:String,
        required:true,
    },
    storageUsed:{
        type:Number,
        required:true,
        default:0,
    },
    storageLimit:{
        type:Number,
        required:true,
        default: 1024 * 1024 * 1024 // 1GB
    },
    
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);

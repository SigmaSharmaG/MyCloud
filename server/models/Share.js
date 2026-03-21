const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
    file:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"File",
    },
    folder:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    accessType:{
        type:String,
        enum:["view","download","edit"],
        default:"view"
    },
    token:{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    expiry: {
        type: Date,
        default: null
    },
    isOneTime: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        default: null // optional password protection
    }

},{timestamps:true})

module.exports = mongoose.model("Share",shareSchema);

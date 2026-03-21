const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
// Connect to database
connectDB()

const app = express();

app.use(express.json());

const PORT = 4000;


app.listen(PORT,()=>{
    console.log(`App started listening at PORT : ${PORT}`);
})

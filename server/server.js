const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
// Connect to database
connectDB()

const app = express();

app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"));

const PORT = process.env.PORT || 4000;



// Starting server
app.listen(PORT,()=>{
    console.log(`App started listening at PORT : ${PORT}`);
})

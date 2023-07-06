
console.clear()
const express = require("express");

const app = express();

require("dotenv").config();
// connect to DB


const connectDB=require("./dbConnect");
connectDB();


// routes

app.use(express.json());
app.use("/user",require("./routes/User"))


//  server
const PORT=process.env.PORT;

app.listen(PORT, (err)=>err ? console.log(err): console.log(`server is runing on ${PORT}`));

console.clear()
// importing express
const express = require("express");
const cors=require("cors");

// initialisation
const app = express();

// importing dotenv
require("dotenv").config();

// connect to Data Base
const connectDB=require("./dbConnect");
connectDB();
// convert json,middleware

app.use(express.json());
app.use(cors());

app.use("/user", require("./routes/user"));
app.use("/reservation", require("./routes/reservation"));

// SERVER
const PORT=process.env.PORT;
app.listen(PORT,(err)=>err? console.log(err): console.log(`server is run on ${PORT}`));
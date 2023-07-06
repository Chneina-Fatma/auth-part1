const mongoose=require("mongoose");

const dbConnect=async()=> {try {
    await mongoose.connect(process.env.DB_URI)
        console.log("database iS connected")
    
} catch (error) {
    console.log(error);
    }
};


module.exports=dbConnect;
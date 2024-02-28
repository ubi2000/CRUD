const mongoose=require("mongoose")
require("dotenv").config()

async function dbConnect(){

    try {
        await mongoose.connect(process.env.DBLINK)
        console.log("database connected")
        
    } catch (error) {
        console.log(error)
    }
    
}

module.exports=dbConnect
const mongoose=require("mongoose")
const connection=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://nihalavk543:9037475543@nihala.uavrh7p.mongodb.net/?retryWrites=true&w=majority")
        console.log("db connected");
    }
    catch (err){
        console.log(`error:${err}`);
        process.exit()
    }
}
module.exports=connection
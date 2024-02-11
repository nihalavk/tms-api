const mongoose=require("mongoose")
const newempSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const newEmp=mongoose.model("newEmp",newempSchema);
module.exports=newEmp

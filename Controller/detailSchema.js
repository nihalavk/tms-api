const mongoose=require("mongoose")
const detailSchema=mongoose.Schema({
    id:{type:String},
    Email:{type:String},
      taskName:{type:String},
      assignedBy:{type:String},
      assignedTo:{type:String},
      status:{type:String},
      description:{type:String},
      assignDate:{type:String},
      deadLine:{type:String}
})
const detail=mongoose.model("detail",detailSchema)
module.exports=detail

const detail = require("./detailSchema")

const createTask=async(req,res)=>{
    const {email}=req.params
    const {id,Email,taskName,assignedTo,assignedBy,status,description,assignDate,deadLine} =req.body 
    try{
    const taskDetails=await detail.create({id,Email:email,taskName,assignedTo,assignedBy,status,description,assignDate,deadLine})
    res.json(taskDetails)}
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports=createTask
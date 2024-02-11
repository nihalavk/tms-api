const detail = require("./detailSchema")

const editTask=async(req,res)=>{
    const {id,taskName,assignee,status,description,assignDate,deadLine} =req.body 
    const taskId=req.params.id
    try{
    const taskEdit=await detail.findByIdAndUpdate(taskId,{id,taskName,assignee,status,description,assignDate,deadLine})
    res.json(taskEdit)
}catch(error){
    console.error('Error editing task:', error);
        res.status(500).json({ error: "Internal Server Error" });
}
}
module.exports=editTask
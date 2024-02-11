const detail = require("./detailSchema")

const deleteTask=async(req,res)=>{
    const _id=req.params.id
    try{
    const taskDelete=await detail.findByIdAndDelete(_id)
    res.json(taskDelete)
} catch (error){
    console.error('Error deleting task:', error);
    res.status(500).json({ error: "Internal Server Error" });
}
}
module.exports=deleteTask
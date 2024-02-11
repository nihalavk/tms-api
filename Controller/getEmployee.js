const newEmp = require("./newempSchema")

const getUsers = async(req,res)=>{
    const {Email}=req.params
    try{
        const userGet=await newEmp.find({ Name: { $exists: true } }).select('Name')
        res.json(userGet)
    }
    catch(error){
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports=getUsers

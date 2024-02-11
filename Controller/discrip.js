const detail = require("./detailSchema")

const getDescr=async(req,res)=>{
    const getId=req.params._id
    const personId=await detail.findById({_id:getId})
    res.json(personId)
}
module.exports=getDescr

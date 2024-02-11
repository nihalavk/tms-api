const detail = require("./detailSchema");

const getDetails = async (req,res) => {
    const {Email}=req.params
    try{
        const detailsGet=await detail.findById().select()
        res.json(detailsGet)
    }
    catch(error){
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports=getDetails
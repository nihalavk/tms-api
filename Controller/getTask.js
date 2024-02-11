const detail = require("./detailSchema")

const getTask = async(req,res) => {
    const {Email}=req.params
    try{
        const taskGet=await detail.find({Email})
        res.json(taskGet)
    } catch(error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = getTask

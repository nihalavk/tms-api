const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const newEmp = require("./newempSchema");

const tokenGen=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
}

const Login = async (req,res) =>{
    const {Email,Password} = req.body;

     if (!Email || !Password){
        res.send("Complete all Field")
        return;
     }
    try{
        const findEmail=await newEmp.findOne({Email})
        if (!findEmail){
            res.json("invalid user name or password");
            return;
        }
    const isPasswordvalid=await bcrypt.compare(Password,findEmail.Password)
    if (!isPasswordvalid){
        res.json("invalid username or password")
    }
    res.json({
        findEmail
        })
    }
catch(error){
    console.error(error);
    res.json("internal server error")
}
}

module.exports = Login

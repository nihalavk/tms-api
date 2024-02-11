const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const newEmp = require("./newempSchema")


const tokenGenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
}
const signUp = async (req,res) => {
    const {Name,Email,Password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(Password,salt)
    const findUser = await newEmp.findOne({Email});

 if(findUser){
        res.send("Email already exist")
        return;
    }
if(!Email || !Password){
    res.send("Complete all field")
    return;
}
 if(Password.length<6){
    res.send("atleast six values")
    return;
}
   const userDet = await newEmp.create({
    Name,Email,Password:hashedPassword
})
res.json({
    Id:userDet._id,
    Name:userDet.Name,
    Email:userDet.Email,
    Password:userDet.Password,
    token:tokenGenerate(userDet._id)
})
}


module.exports=signUp

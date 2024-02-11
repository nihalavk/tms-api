const express=require("express")
// const http = require("http")
// const socketIo =require("socket.io")
const dotenv=require("dotenv")
const cors=require("cors")
const connection = require("./Config/mongoose")
const router = require("./Router/route")

const app=express()
// const server=http.createServer(app)
// const io=socketIo(server)
connection()
dotenv.config()

const PORT=process.env.PORT||4005
app.listen(PORT,console.log(`Server running on ${PORT}`))

// io.on('connection', (socket) => {
//     console.log(' user connected');
//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//       });
//     });
app.use(express.json())
app.use(cors())
app.use('/',router)
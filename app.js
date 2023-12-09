const cron = require('node-cron');
const express= require("express") 
const app = express()

const http=require("http").createServer(app)
const io=require("socket.io")(http)
const port=process.env.PORT || 5001

// Schedule a task to be run every 2 seconds


http.listen(port , ()=>{
  io.on("connection" , (socket)=>{
    console.log("connected" + socket.id)
    cron.schedule('*/2 * * * * *', () => {
      socket.emit("List" , {
        "re" : "ea"
      })
    });
  })
})
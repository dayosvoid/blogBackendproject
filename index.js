require("dotenv").config()
const express = require("express")
const app = express()
PORT = process.env.PORT || 2600
const mongoose = require("mongoose")
const router = require('./routes/auth.router.js')
const auth = require('./middleware/auth.middleware.js')
const blogRouter = require("./routes/blog.router.js")
const notfound = require("./utils/notfound.js")


app.use(express.json())
app.use("/api/v1", router)

// app.get("/test", auth, (req,res)=>{
//     res.send("passed authentication")
// })

app.use("/api/v1/blog", auth, blogRouter)
app.use(notfound)
const start = async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`server is runing on ${PORT}`)
        })

    } catch (error) {
        console.log(error);
        
        
    }}
    start()
import express from "express"
import cors from "cors"

import { ConnectDB } from "./Config/db.js"
import foodroute from "./routes/foodroute.js"


//app config

const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//DB connection 
ConnectDB();

// api end point
app.use("/api/food",foodroute)


app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{
    console.log(`server started on  http://localhost:${port}`)
})









import express from "express"
import { addFood } from  "../controller/foodcontroller.js"
import multer from "multer"

const foodroute = express.Router();

// image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cd)=>{
        return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodroute.post("/add",upload.single("image"),addFood)



export default foodroute;
// import foodModel from "../models/foodmodle.js";
// import fs from 'fs'


// // add food items


// const addFood = async (req,res)  => {
//     let image_filename = `${req.file.filename}`;

// const food = new foodModel({
//     name: req.body.name,
//     description:req.body.description,
//     price:req.body.price,
//     category:req.body.category,
//     image: image_filename

// })
// try{
//     await food.save();
//     res.json({sucess:true,message:"Food Added"})
// } catch(error) {
//        console.log(error)
//        res.json({sucess:false,message:"Error"})
// }
// }

// export {addFood}


import foodModel from "../models/foodmodle.js";
import fs from "fs/promises";

// Add food items
const addFood = async (req, res) => {
    try {
        // Check if the file is provided
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required." });
        }

        const image_filename = req.file.filename;

        // Create a new food item instance
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Save food item to the database
        await food.save();

        res.status(201).json({ success: true, message: "Food item added successfully." });
    } catch (error) {
        console.error("Error adding food item:", error);

        // Remove uploaded file if database save fails
        if (req.file) {
            try {
                await fs.unlink(`uploads/${req.file.filename}`);
                console.log("Orphaned file deleted.");
            } catch (unlinkError) {
                console.error("Error deleting orphaned file:", unlinkError);
            }
        }

        // Send appropriate error responses
        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Validation error occurred.",
                errors: error.errors,
            });
        }

        res.status(500).json({
            success: false,
            message: "An internal server error occurred.",
        });
    }
};

export { addFood };

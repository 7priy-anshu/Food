import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/food', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // Options for compatibility
    console.log('Connected! Database');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};


// import mongoose from "mongoose";

// export const ConnectDB = async () => {
//     await mongoose.connect('mongodb+srv://7priy_anshu:Dabbusingh7777@cluster0.muz0j.mongodb.net/food-del')
//     .then(()=>
//         console.log("mongodb connected")
//     )
// }

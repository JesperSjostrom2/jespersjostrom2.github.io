require('dotenv').config();
const mongoose=require("mongoose")
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  console.log("mongodb connected");
})
.catch(() => {
  console.log('failed');
})

const newSchema = new mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required:true
  }
})

const collection = mongoose.model("colleciton",newSchema)

module.exports=collection
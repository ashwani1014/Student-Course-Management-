import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    default: 0,
  },
  
  
});

const course = mongoose.model("Course", courseSchema);
export default course; 

import mongoose, { Mongoose } from "mongoose";

const StudentSchema= new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    enrolledCourses:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Course",
        },
    ],


});
const Student = mongoose.model("Student", studentSchema);
export default Student;
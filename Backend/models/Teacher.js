import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  assignedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;

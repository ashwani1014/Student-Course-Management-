import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Course from "./models/courseModel.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // body parser

// Connect to Mongo
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB connection Failed", err));

// Simple seed route (optional) - run once to add sample data
app.get("/seed", async (req, res) => {
  await Course.deleteMany({});
  const docs = await Course.insertMany([
    { title: "Intro to Web", instructor: "Radhe Radhe", seats: 20, description: "Basics of HTML, CSS" },
    { title: "React Basics", instructor: "FullLearn", seats: 15, description: "Learn React fundamentals" },
  ]);
  res.json(docs);
});

// GET all
app.get("/courses", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// POST add
app.post("/courses", async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: "Error creating course", error: err.message });
  }
});

// PUT update (by Mongo _id)
app.put("/courses/:id", async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Course not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

// DELETE
app.delete("/courses/:id", async (req, res) => {
  try {
    const removed = await Course.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Course not found" });
    res.json({ message: "deleted Successfully", id: req.params.id });
  } catch (err) {
    res.status(500).json({ message: "not deleted", error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

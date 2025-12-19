import React, { useState } from "react";
import axios from "axios";

function CourseItem({ course, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(course.title);
  const [instructor, setInstructor] = useState(course.instructor);
  const [seats, setSeats] = useState(course.seats);

  const handleSave = async () => {
    if (!title.trim() || !instructor.trim() || !seats) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await axios.put("/courses/:id", {
        title: title.trim(),
        instructor: instructor.trim(),
        seats: Number(seats),
      });

      onUpdate(res.data);
      setIsEditing(false);
      alert("Course updated Successfully!");
    } catch (err) {
      console.error("after updated error : ", err);
      alert("Failed to update Course");
    }
  };

  return (
    <div className="course-item">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={instructor} onChange={(e) => setInstructor(e.target.value)} />
          <input
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            type="number"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <div className="course-details">
            <h3>{course.title}</h3>
            <p>
              Instructor: {course.instructor} • Seats: {course.seats}
            </p>
          </div>

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(course.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default CourseItem;

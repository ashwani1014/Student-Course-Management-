import { useState } from "react";

export default function AddCourseForm({ addCourse }) {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [seats, setSeats] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Enter title");
    addCourse({ title, instructor, seats });
    
    setTitle("");
    setInstructor("");
    setSeats(10);
  };

  return (
    <form className="add-course-form" onSubmit={handleSubmit}>
      <input
        className="input-field"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="input-field"
        placeholder="Instructor Name"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
      />

      <input
        className="input-field"
        placeholder="Seats Available"
        type="number"
        value={seats}
        onChange={(e) => setSeats(Number(e.target.value))}
      />

      <button className="btn-add" type="submit">
        Add Course
      </button>
    </form>
  );
}

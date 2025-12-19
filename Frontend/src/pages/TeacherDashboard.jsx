import { useState, useEffect } from "react";
import AddCourseForm from "../component/AddCourseForm";
import CourseList from "../component/CourseList";

function TeacherDashboard() {
  const [courses, setCourses] = useState([]);

  // 📌 FETCH DATA FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  // 📌 ADD COURSE (Backend assigns _id)
  const addCourse = async (course) => {
    try {
      const res = await fetch("http://localhost:5000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });

      const saved = await res.json();
      setCourses((prev) => [saved, ...prev]); // yaha saved._id milta hai
    } catch (err) {
      console.log("Add error:", err);
    }
  };

  // 📌 DELETE COURSE USING _id
  const deleteCourse = async (_id) => {
    try {
      const res = await fetch(`http://localhost:5000/courses/${_id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setCourses((prev) => prev.filter((c) => c._id !== _id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  // 📌 UPDATE COURSE USING _id
  const updateCourse = async (updatedCourse) => {
    try {
      const res = await fetch(
        `http://localhost:5000/courses/${updatedCourse._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedCourse),
        }
      );

      const saved = await res.json();

      setCourses((prev) =>
        prev.map((c) => (c._id === saved._id ? saved : c))
      );
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  return (
    <div className="home">
      <div className="title">
   <h2 style={{ color: "#884ecb" }}>Teacher Dashboard</h2>
</div>
      <AddCourseForm addCourse={addCourse} />
      <CourseList
        courses={courses}
        onDelete={deleteCourse}
        onUpdate={updateCourse}
      />
    </div>
  );
}

export default TeacherDashboard;

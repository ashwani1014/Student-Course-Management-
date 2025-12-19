import React, { useEffect, useState } from "react";
import axios from "axios";

function StudentDashboard() {
  const [courses, setCourses] = useState([
    { id: 1, title: "Intro to Web", instructor: "Ashwani", seats: 20 },
    { id: 2, title: "React Basics", instructor: "Shivraj", seats: 15 },
  ]);


  useEffect(()=>{
    const fetchCourses=async()=>{
      try{
        const res=await axios.get("http://localhost:5000/courses")
      setCourses(res.data);
      }catch (error){
        console.log("Error fetching courses : ",error);

      }
      };
      fetchCourses();
    },[]);
  
  const handleBuy = (id) => {
    const course = courses.find((c) => c.id === id);
    alert(`You bought the course: ${course.title}`);
    
  };

  return (
    <div className="courses-container">
      <h2>📚 Available Courses</h2>

      <div className="courses-grid">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3>{course.title}</h3>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Seats:</strong> {course.seats}</p>
              <p className="description">{course.description}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))
        ) : (
          <p className="no-course">No courses available</p>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;

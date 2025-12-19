export default function CourseList({ courses = [], onDelete, onUpdate }) {
  if (!courses.length) return <div className="no-courses">No courses available</div>;

  return (
    <div className="course-list">
      {courses.map((course) => (
        <div className="course-card" key={course._id}>
          <h3 className="course-title">{course.title}</h3>

          <p className="course-info">
            <strong>Instructor:</strong> {course.instructor}
          </p>

          <p className="course-info">
            <strong>Seats:</strong> {course.seats}
          </p>

          {/* EDIT BUTTON */}
          <button
            className="btn-edit"
            onClick={() => {
              const newTitle = prompt("New title", course.title);
              if (!newTitle) return;
              const updated = { ...course, title: newTitle };
              onUpdate(updated);
            }}
          >
            Edit
          </button>

          {/* DELETE BUTTON */}
          <button
            className="btn-delete"
            onClick={() => {
              if (confirm("Delete this course?")) onDelete(course._id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

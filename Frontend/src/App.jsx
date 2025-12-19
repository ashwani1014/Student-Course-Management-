import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import TeacherLogin from "./pages/TeacherLogin";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

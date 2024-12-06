
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import SignUpPage from './component/SignUpPage';
import ContactUsPage from './component/ContactUsPage';
import AboutUsPage from './component/AboutUsPage';
import AdminHome from './component/admin/AdminHome';
import ManageUsers from './component/admin/ManageUsers';
import StudentDetails from './component/admin/StudentDetails';
import Dashboard from './component/admin/Dashboard';
import AcceptedStudents from './component/admin/AcceptedStudents';
import StudentLogin from './component/StudentLogin';
import StudentHome from './component/student/StudentHome';
import AddCourse from './component/admin/AddCourse';
import OfferedCourses from './component/admin/OfferedCourses';
import StudentOfferedCourses from './component/student/StudentOfferedCourses';
import CourseDetails from './component/student/CourseDetails';
import CourseDashboard from './component/student/CourseDashboard';
import TeacherLogin from './component/TeacherLogin';
import TeacherSignup from './component/TeacherSignup';
import ManageTeachers from './component/admin/ManageTeachers';
import PendingFaculty from './component/admin/PendingFaculty';
import AcceptedFaculty from './component/admin/AcceptedFaculty';
import RejectedFaculty from './component/admin/RejectedFaculty';
import MyCourses from './component/student/MyCourses';
import TeacherHome from './component/teacher/TeacherHome';
import StudentProfile from './component/student/StudentProlile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-signup" element={<TeacherSignup />} />
          <Route path="/StudentHome" element={<StudentHome />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/manage-users/:id" element={<StudentDetails />} /> 
          <Route path="/admin/manage-teachers" element={<ManageTeachers />} />
          <Route path="/admin/manage-teachers/pending-faculty" element={<PendingFaculty />} />
          <Route path="/admin/manage-teachers/accepted-faculty" element={<AcceptedFaculty />} />
          <Route path="/admin/manage-teachers/rejected-faculty" element={<RejectedFaculty />} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/accepted-students" element={<AcceptedStudents />} />
          <Route path="/admin/add-course" element={<AddCourse />} />
          <Route path="/admin/offered-courses" element={<OfferedCourses />} />
          <Route path="/student/offered-courses" element={<StudentOfferedCourses />} />
          <Route path="/student/my-courses" element={<MyCourses />} /> 
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/course/details/:courseId" element={<CourseDetails />} />
          <Route path="/course-dashboard/:courseId" element={<CourseDashboard />} />

          <Route path="/TeacherHome" element={<TeacherHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

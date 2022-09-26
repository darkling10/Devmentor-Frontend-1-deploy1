import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AppRoute from "./config/AppRoute";
import Dashboard from "./pages/Dashboard";
import AdminDashBoard from "./pages/AdminDashBoard";
import SignUp from "./pages/SignUp";
import CourseContext from "./context/CourseContext";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import { PostCourses } from "./pages/PostCourses";
import { PostInterview } from "./pages/PostInterview";
import AdminRoute from './config/AdminRoute'
import InterviewExp from "./pages/InterviewExp";
import InterviewContext from "./context/InterviewContext";
import InterviewDetail from "./components/InterviewDetail";
function App() {
  return (
    <CourseContext>
     <InterviewContext>
     <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/dashboard"
            element={
              <AppRoute>
                <Dashboard />
              </AppRoute>
            }
          />
          <Route
            path="/admindashboard"
            element={
              <AdminRoute>
                <AdminDashBoard />
              </AdminRoute>
            }
          />

          <Route
            path="/courses"
            element={
              <AppRoute>
                <Courses />
              </AppRoute>
            }
          />
          <Route
            path="/postcourse"
            element={
              <AdminRoute>
                <PostCourses/>
              </AdminRoute>
            }
          />
          <Route
            path="/postinterviewexp"
            element={
              <AppRoute>
                <PostInterview/>
              </AppRoute>
            }
          />

          <Route
            path="courses/:id"
            element={
              <AppRoute>
                <CourseDetail />
              </AppRoute>
            }
          />

          <Route
            path="Interview_experiences/:id"
            element={
              <AppRoute>
                <CourseDetail />
              </AppRoute>
            }
          />
          <Route
            path="/Interview_experiences"
            element={
              <AppRoute>
                <InterviewExp />
              </AppRoute>
            }
          />
        </Routes>
      </Router>
     </InterviewContext>
    </CourseContext>
  );
}

export default App;

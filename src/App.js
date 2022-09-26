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
function App() {
  return (
    <CourseContext>
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
              <AppRoute>
                <AdminDashBoard />
              </AppRoute>
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
            path="/Interview_experiences"
            element={
              <AppRoute>
                <InterviewExp />
              </AppRoute>
            }
          />
        </Routes>
      </Router>
    </CourseContext>
  );
}

export default App;

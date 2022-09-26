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
            path="/courses/post"
            element={
              <AppRoute>
                <PostCourses/>
              </AppRoute>
            }
          />
          <Route
            path="/interview/post"
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
        </Routes>
      </Router>
    </CourseContext>
  );
}

export default App;

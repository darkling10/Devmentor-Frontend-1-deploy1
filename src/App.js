
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './pages/Login';
import AppRoute from './config/AppRoute';
import Dashboard from './pages/Dashboard';
import AdminDashBoard from './pages/AdminDashBoard';
function App() {
 
  return (

     <Router>
      <Routes>
       <Route path='/' element={<Login />} ></Route>

       <Route path='/dashboard' element = {<AppRoute>
        <Dashboard/>
         </AppRoute> }></Route>
       

         <Route path='/admindashboard' element = {<AppRoute>
        <AdminDashBoard />
         </AppRoute> }></Route>

      </Routes>
    </Router>
 
  );
}
 
export default App;
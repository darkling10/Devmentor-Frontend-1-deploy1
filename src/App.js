
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import routes from './config/Routes';
import { useAuthState } from "./context/AuthContext";
import { redirect } from "react-router-dom";
import Login from './pages/Login';
import AppRoute from './config/AppRoute';
import Dashboard from './pages/Dashboard';
function App() {
  const {token} = useAuthState();
 
  return (

     <Router>
      <Routes>
       <Route path='/' element={<Login />} ></Route>
       <Route path='/dashboard' element = {<AppRoute>
        <Dashboard/>
         </AppRoute> }></Route>
      </Routes>
    </Router>
 
  );
}
 
export default App;
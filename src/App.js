import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./config/Routes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((ele) => {
            return (
              <Route
                path={ele.path}
                key={ele.path}
                element={ele.element}
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { ReactNode } from "react";
import Register from "./Pages/Register";
import "./style.scss";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
type ProtectedRouteProps = {
  children: ReactNode;
};
function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return <>{children}</>;
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

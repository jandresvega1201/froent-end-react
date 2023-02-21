import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import {AuthProvider} from "../context/authContex";
import ProtectedRoute from "../components/ProtectedRoute";
function App() {
  return (
      <AuthProvider>
          <Routes>
              <Route exact path="/" element={
                  <ProtectedRoute>
                      <Home />
                  </ProtectedRoute>} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
          </Routes>
      </AuthProvider>
  );
}

export default App;

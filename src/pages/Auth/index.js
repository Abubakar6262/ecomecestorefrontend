import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from './Register'
import Login from './Login'
import Forgotpassword from './Forgotpassword'
function index() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
      </Routes>
    </div>
  );
}

export default index;

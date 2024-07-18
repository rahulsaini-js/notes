import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

const App = () => {
  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signUp" exact element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );

  return <>{routes}</>;
};

export default App;

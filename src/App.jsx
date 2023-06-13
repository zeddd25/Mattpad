import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import Form from "./components/Form";
import Notfound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Story from "./pages/Story";
import Edit from "./pages/Edit";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import SelectCategory from "./components/SelectCategory";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/form" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/select" element={<SelectCategory />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import UserAuthWrapper from "../components/UserAuthWrapper";
import CreatePostPage from "../Pages/CreateAiPost";

const Routing = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Register />} />
    <Route
      path="/user-profile"
      element={
        <UserAuthWrapper>
          <UserProfile />
        </UserAuthWrapper>
      }
    />
    <Route
      path="/create-post-caption"
      element={
        <UserAuthWrapper>
          <CreatePostPage />
        </UserAuthWrapper>
      }
    ></Route>
  </Routes>
);

export default Routing;

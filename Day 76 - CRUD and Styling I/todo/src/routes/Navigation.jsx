import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "../components/Todo";
import Home from "../components/Home";
import Service from "../components/Service";
import Product from "../components/Product";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default Navigation;

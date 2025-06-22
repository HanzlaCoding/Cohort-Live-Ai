import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "../components/Todo";
import Home from "../components/Home";
import Service from "../components/Service";
import Product from "../components/Product";
import ProductDetails from "../components/ProductDetails";
import ServiceDetails from "../components/ServiceDetails";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/service" element={<Service />}>
          <Route path="/service/details" element={<ServiceDetails />} />
        </Route>
        <Route path="/product" element={<Product />} />
        <Route path="/product/details/:name" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Navigation;

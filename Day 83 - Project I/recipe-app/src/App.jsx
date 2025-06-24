import React from "react";
import Navbar from "./Components/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <main className="w-full min-h-screen text-2xl bg-[#F1DDB6]">
      <Navbar />
      <MainRoutes />
    </main>
  );
};

export default App;
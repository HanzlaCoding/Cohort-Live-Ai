import React from "react";
import Navbar from "./components/Navbar";
import Navigation from "./routes/Navigation";

const App = () => {
  return (
    <>
      <main className="w-full min-h-screen p-5 bg-gray-800 text-white font-['Helvetica_Now_Display']">
        <Navbar/>
        <Navigation/>
      </main>
    </>
  );
};

export default App;

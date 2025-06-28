import React from "react";
import Feature from "./Feature";
import ModernFooter from "./ModernFooter";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <main className="w-full min-h-100 text-2xl bg-zinc-100">
      <Welcome/>
      <Feature/>
      <ModernFooter/>
    </main>
  );
};

export default Home;

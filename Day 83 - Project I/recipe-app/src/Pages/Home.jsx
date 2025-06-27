import React from "react";
import Feature from "./Feature";
import ModernFooter from "./ModernFooter";

const Home = () => {
  return (
    <main className="w-full min-h-100 text-2xl bg-zinc-100">
      <div className="content w-full h-125 flex justify-center items-center bg-[url(https://recipe-apl.netlify.app/static/media/cooking-background.a73b43bf.jpg)] bg-cover bg-center ">
        <div
          id="page1"
          className="font-['Inter'] flex items-center justify-center flex-col gap-y-5 "
        >
          <h1 className="text-4xl font-bold text-center leading-8">
            Discover Your Next <br />
            <span className="tracking-tight text-7xl">Culinary Adventure</span>
          </h1>
          <p className="text-sm text-zinc-500 text-center w-200 mx-auto">
            Explore a world of delightful flavors, from quick weeknight dinners
            to gourmet delights. Share your own cherished creations and inspire
            fellow food enthusiasts!
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-lg cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors">
            <p>Explore Recipes</p>
            <span>
              <i className="text-2xl bxr bx-food-menu bx-sm bx-wiggle" />
            </span>
          </button>
        </div>
      </div>

      <Feature/>
    </main>
  );
};

export default Home;

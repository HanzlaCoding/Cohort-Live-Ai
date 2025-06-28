import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate();
  return (
    <div className="content overflow-hidden w-full px-5 h-130 flex justify-center items-center">
      <div className="bg w-full h-full overflow-hidden rounded-2xl">
        <img className='w-full h-full object-cover blur-sm mix-blend-multiply' src="https://recipe-apl.netlify.app/static/media/cooking-background.a73b43bf.jpg" alt="" />
      </div>
        <div
          id="page1"
          className="font-['Inter'] rounded-2xl flex items-center justify-center flex-col gap-y-5 absolute"
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
          <div className="buttons flex items-center">
          <button onClick={() => navigate("/recpie")} className="bg-orange-500 text-white px-3 py-1 rounded-l-full text-sm cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors">
            <p>Explore Recipes</p>
            <span>
              <i className="text-2xl bxr bx-food-menu bx-sm bx-wiggle" />
            </span>
          </button>
          <button onClick={() => navigate("/create-recpie")} className="bg-orange-500 text-white px-3 py-1 rounded-r-full text-sm cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors">
            <p>Create Recipes</p>
            <span>
              <i className="text-2xl bxr bx-food-menu bx-sm bx-wiggle" />
            </span>
          </button>
          </div>
          
        </div>
      </div>
  )
}

export default Welcome
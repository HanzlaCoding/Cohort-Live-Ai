import React from 'react';

// Sample data structured for the profile
const userData = {
  username: "PurplePixelPro",
  name: "Alex Johnson",
  profileImage: "https://ugc.production.linktr.ee/f475e912-e9c7-48c1-8b45-f340089e2d8c_IMG-6049.png?io=true&size=avatar-v3_0", // Placeholder
  bio: "React enthusiast | Building beautiful UI with Tailwind CSS 💻🎨 | Minimalist designs.",
  website: "linktr.ee/purplepixel",
  stats: {
    posts: 42,
    followers: "1.2k",
    following: 150,
  },
  posts: [
    { id: 1, image: "https://via.placeholder.com/600/b197ee/ffffff?text=P1", alt: "Minimal desk setup" },
    { id: 2, image: "https://via.placeholder.com/600/d8c1ff/000000?text=P2", alt: "Code snippet" },
    { id: 3, image: "https://via.placeholder.com/600/9370db/ffffff?text=P3", alt: "Sunset view" },
    { id: 4, image: "https://via.placeholder.com/600/b197ee/ffffff?text=P4", alt: "Coffee mug" },
    { id: 5, image: "https://via.placeholder.com/600/d8c1ff/000000?text=P5", alt: "Abstract design" },
    { id: 6, image: "https://via.placeholder.com/600/9370db/ffffff?text=P6", alt: "Nature photo" },
  ],
};

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg">

        {/* 1. Profile Header (Image, Stats, Bio) */}
        <header className="p-6 md:p-10 border-b border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-16">
            
            {/* Profile Image Column */}
            <div className="flex-shrink-0">
              <img 
                className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover 
                           border-4 border-purple-400 p-0.5 shadow-md"
                src={userData.profileImage}
                alt={`${userData.username}'s profile`}
              />
            </div>

            {/* Profile Info and Stats Column */}
            <div className="flex flex-col w-full">
              <div className="flex items-center space-x-4 mb-4">
                <h1 className="text-2xl font-light text-gray-800">
                  {userData.username}
                </h1>
                {/* Edit Profile Button */}
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-semibold py-1 px-4 rounded-lg transition duration-200"
                >
                  Edit Profile
                </button>
              </div>

              {/* Stats Bar (Hidden on small screens, shown on medium screens and up) */}
              <div className="hidden md:flex space-x-10 text-lg mb-4">
                <span className="text-gray-800">
                  <span className="font-bold">{userData.stats.posts}</span> posts
                </span>
                <span className="text-gray-800">
                  <span className="font-bold">{userData.stats.followers}</span> followers
                </span>
                <span className="text-gray-800">
                  <span className="font-bold">{userData.stats.following}</span> following
                </span>
              </div>

              {/* Bio Section */}
              <div className="text-gray-800 mt-2">
                <p className="font-semibold text-sm">{userData.name}</p>
                <p className="text-sm my-1">{userData.bio}</p>
                <a 
                  href={`https://${userData.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 text-sm font-medium hover:underline"
                >
                  {userData.website}
                </a>
              </div>
            </div>
          </div>
          
          {/* Stats Bar for Mobile (Visible on small screens) */}
          <div className="flex justify-around items-center text-sm border-t border-gray-200 mt-6 pt-4 md:hidden">
            <div className="text-center">
              <span className="font-bold block">{userData.stats.posts}</span>
              <span className="text-gray-500">posts</span>
            </div>
            <div className="text-center">
              <span className="font-bold block">{userData.stats.followers}</span>
              <span className="text-gray-500">followers</span>
            </div>
            <div className="text-center">
              <span className="font-bold block">{userData.stats.following}</span>
              <span className="text-gray-500">following</span>
            </div>
          </div>
        </header>

        {/* 2. Posts Grid Section */}
        <main>
          {/* Tab/Navigation Placeholder */}
          <div className="flex justify-center border-t border-gray-100">
            <div className="py-3 px-6 border-t-2 border-purple-600 text-purple-600 font-semibold text-xs tracking-wider cursor-pointer">
              <svg className="w-4 h-4 inline-block mr-1 -mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
              POSTS
            </div>
          </div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-3 gap-1 bg-gray-100 p-1">
            {userData.posts.map((post) => (
              <div 
                key={post.id} 
                className="relative w-full pb-[100%] overflow-hidden cursor-pointer group" // pb-[] gives a perfect square
              >
                <img 
                  className="absolute inset-0 w-full h-full object-cover 
                             transition-transform duration-300 group-hover:scale-105"
                  src={post.image} 
                  alt={post.alt} 
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
                                transition-opacity duration-300 flex items-center justify-center">
                    {/* Optional: Add a simple like/comment icon here on hover */}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
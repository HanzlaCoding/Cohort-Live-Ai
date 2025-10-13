import React from "react";

const Feed = () => {
  const profile = {
    name: "Hanzla Shahid",
    verified: true,
    role: "UI/UX Designer & Frontend Developer",
    location: "Lahore, Pakistan",
    joined: "Feb 2024",
    following: 512,
    followers: 18_900,
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328f6a38?w=400&q=80&auto=format&fit=crop&crop=faces",
  };

  return (
    <>
      <main className="lg:col-span-8">
        <div className="max-w-[820px] mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold flex items-center gap-4">
              <span className="border-l-4 border-[#10B981] pl-4">
                Your Feed
              </span>
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Fresh thoughts and creative moments from your network.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-4 mb-6 flex gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow">
              <img
                src={profile.avatar}
                alt="mini avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <input
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              placeholder="Share your inspiration..."
              aria-label="Create quick post"
            />
            <button className="bg-[#10B981] text-white px-4 py-2 rounded-lg font-semibold shadow hover:shadow-lg hover:scale-105 active:scale-95 transition">
              Post
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;

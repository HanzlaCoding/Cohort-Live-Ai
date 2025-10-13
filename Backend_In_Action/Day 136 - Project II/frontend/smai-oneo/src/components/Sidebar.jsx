import React from "react";

const Sidebar = () => {
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
      <aside className="lg:col-span-4">
        <div className="max-w-[350px] lg:sticky lg:top-8 mx-auto">
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-2xl overflow-hidden transition-all hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <div className="relative h-40">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg,#FF6A00,#FFD500)",
                }}
              />
              <div className="absolute top-4 right-4">
                <button className="bg-white text-[#059669] font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-transform">
                  + New Post
                </button>
              </div>
              <div className="absolute left-6 -bottom-12">
                <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-2xl">
                  <img
                    src={profile.avatar}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="pt-16 px-6 pb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold">{profile.name}</h2>
                {profile.verified && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">{profile.role}</span>
                {
                  " — crafting digital experiences with simplicity, structure, and soul."
                }
              </p>

              <div className="mt-4 flex items-center gap-6">
                <div>
                  <div className="text-lg font-extrabold">
                    {profile.following}
                  </div>
                  <div className="text-xs text-gray-400">Following</div>
                </div>
                <div>
                  <div className="text-lg font-extrabold">
                    {profile.followers.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">Followers</div>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3-4 5-4 5s-4-2-4-5a4 4 0 118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11V3"
                    />
                  </svg>
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                    />
                  </svg>
                  <span>Joined {profile.joined}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 bg-[#059669] text-white py-2 rounded-2xl font-semibold shadow hover:shadow-lg hover:scale-105 active:scale-95 transition">
                  Follow
                </button>
                <button className="px-4 py-2 rounded-2xl border border-gray-200 bg-white shadow hover:shadow-lg hover:scale-105 active:scale-95 transition">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

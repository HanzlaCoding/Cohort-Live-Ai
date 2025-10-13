import React from "react";

const Post = () => {
  const posts = [
    {
      id: 1,
      author: "Hanzla Shahid",
      avatar: "abc",
      username: "@hanzla_shahid",
      time: "3h",
      text: "Designing modern interfaces means balancing clarity with emotion — minimal doesn’t mean empty, it means intentional.",
      image:
        "https://images.unsplash.com/photo-1612831662375-295c1003d3b0?w=1400&q=80&auto=format&fit=crop",
      likes: 260,
      comments: 35,
      shares: 14,
    },
    {
      id: 2,
      author: "DevTalks",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328f6a38?w=400&q=80&auto=format&fit=crop&crop=faces",
      username: "@DevTalks",
      time: "1d",
      text: "Consistency in UI isn’t about repetition — it’s about rhythm. Once your interface feels like a melody, users dance through it.",
      image: null,
      likes: 542,
      comments: 72,
      shares: 41,
    },
  ];

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
      <div className="space-y-6 w-full lg:col-span-8 max-w-[820px] mx-auto">
        {posts.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-xl shadow-xl hover:shadow-2xl p-5 transition-shadow"
          >
            <div className="flex items-center gap-3 w-full">
              <div className="w-40 h-10 rounded-full overflow-hidden border-2 border-white shadow">
                <img
                  src={p.avatar}
                  alt="author"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{p.author}</div>
                  <div className="text-xs text-gray-400">
                    {p.username} · {p.time}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400 cursor-pointer">•••</div>
            </div>

            <div className="mt-4 text-gray-800 leading-relaxed text-[15px]">
              {p.text}
            </div>

            {p.image && (
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={p.image}
                  alt="post media"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  ❤️ <span>{p.likes}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                  💬 <span>{p.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-[#059669] transition-colors">
                  🔁 <span>{p.shares}</span>
                </button>
                <div className="ml-auto text-xs text-gray-400">
                  Engage • Save • Inspire
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Post;

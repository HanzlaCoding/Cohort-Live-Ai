import React from "react";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import Feed from "../components/Feed";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] py-10">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Sidebar />
          <Post />
          <Feed />
        </div>
      </div>
    </div>
  );
}

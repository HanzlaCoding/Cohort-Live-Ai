import axios from "axios";
import React, { useState, useRef } from "react";

// Dummy data for the user and avatar
const DUMMY_USER = {
  username: "AI_Explorer_Pro",
  avatar: "https://placehold.co/40x40/4F46E5/FFFFFF?text=P", // Placeholder avatar matching indigo theme
};

export default function CreatePostPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const fileInputRef = useRef(null);
  const [response, setResponse] = useState(null);
 
  console.log(selectedFile);

  const uploadPicture = async () => {
    const geminiResponse = await axios
      .post(`${import.meta.env.VITE_POSTS_API_URL}`, selectedFile)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err.message;
      });

    setResponse(geminiResponse)
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      // Clean up previous URL to prevent memory leaks
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Allows the drop event to fire
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = (e) => {
    if (e) e.stopPropagation(); // Stop click propagating to the parent upload box
    setSelectedFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = ""; // Clear input
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleCreatePost = () => {
    uploadPicture();
    if (selectedFile) {
      setAlertMessage(
        `AI Post creation initiated for: ${selectedFile.name}. Imagine the AI is generating content now!`
      );
      // In a real app, you would send the file to an API endpoint here.
      handleRemoveFile(); // Clear input after "submission"
    } else {
      setAlertMessage(
        "Error: Please upload a photo first to create an AI post."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-[Inter]">
      {/* Navbar - Sleeker and less bulky */}
      <nav className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-indigo-700 tracking-tight">
            New AI Post
          </h1>
          <div className="flex items-center space-x-3">
            <span className="text-lg font-medium text-gray-700 hidden sm:inline">
              {DUMMY_USER.username}
            </span>
            <img
              src={DUMMY_USER.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-md ring-2 ring-indigo-100"
            />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto p-4 sm:p-8 flex justify-center">
        {/* Main Card Container - Sleek rounded-3xl and softer shadow */}
        <div className="w-full max-w-4xl bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden transition-all hover:shadow-2xl mt-8 p-10 sm:p-12 lg:p-14">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
            Generate Content with{" "}
            <span className="text-indigo-600">Gemini AI</span>
          </h2>

          {/* Photo Upload Box - Refined border and added focus ring */}
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500
              ${
                selectedFile
                  ? "border-indigo-400 bg-indigo-50/50"
                  : "border-gray-300 hover:border-indigo-500 hover:bg-gray-50"
              } relative`}
            onClick={!selectedFile ? handleUploadClick : undefined} // Only trigger click if no file is selected
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            tabIndex={0} // Make div focusable
          >
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            {previewUrl ? (
              <div className="relative w-full min-h-64 flex flex-col items-center justify-center">
                <p className="text-base text-gray-700 font-semibold mb-4 tracking-wide">
                  Image Preview
                </p>
                <div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-xl border border-gray-200 shadow-md">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="mt-6 bg-red-500 text-white rounded-full px-5 py-2 font-medium shadow-md hover:bg-red-600 active:scale-95 transition"
                  title="Remove image"
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <div className="py-10">
                <svg
                  className="mx-auto h-16 w-16 text-indigo-500"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m-4-4v4c0 1.056.406 2.062 1.13 2.894l3 3m-3-3l3 3M24 12h-4v4h4v-4zm-4 0v-4h4v4h-4z"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mt-4 text-xl text-gray-600">
                  Drag and drop your image, or{" "}
                  <span className="font-bold text-indigo-600 hover:text-indigo-500 underline underline-offset-2">
                    click to select
                  </span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (PNG, JPG, or GIF up to 10MB)
                </p>
              </div>
            )}

            {selectedFile && (
              <p className="mt-5 text-base text-gray-800 font-medium">
                File:{" "}
                <span className="text-indigo-600 font-bold">
                  {selectedFile.name}
                </span>
              </p>
            )}
          </div>

          {/* Create AI Post Button - Highly prominent and rounded */}
          <button
            onClick={handleCreatePost}
            disabled={!selectedFile}
            className={`mt-12 w-full py-4 px-4 rounded-xl text-lg font-extrabold transition-all shadow-xl 
              ${
                selectedFile
                  ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-[0.98]"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
          >
            Create AI Post
          </button>
        </div>
      </div>

      {/* Custom Alert Modal */}
      {alertMessage && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setAlertMessage(null)}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';

// Static Data for the user profile header
const staticUserData = {
  username: "Anya_Codez",
  name: "Anya Sharma",
  // Using a soft violet for the placeholder image to match the primary color
  profileImage: "https://placehold.co/150x150/7c3aed/FFFFFF?text=A", 
};

/**
 * Main Post Creator Card Component with Interactive Logic
 */
const PostCreatorCard = () => {
  const userData = staticUserData;
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  // Custom alert logic (showAlert and modal component) has been removed for simplicity. 
  // Feedback will now be logged to the console.

  // Handles file selection and sets the image preview state
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      // Reset if file is not an image
      setSelectedFile(null);
      setImagePreview(null);
      if (file) {
        console.log("Error: Please select a valid image file (PNG, JPG).");
      }
    }
  };

  // Handles the post button click
  const handlePost = () => {
    if (selectedFile) {
      console.log(`Success! Posting image: ${selectedFile.name}`);
      
      // Reset the form after simulated post
      setSelectedFile(null);
      setImagePreview(null);
      document.getElementById('image-upload').value = ''; 
    } else {
      console.log("Error: Please select an image to post.");
    }
  };

  // Handles removal of the selected image
  const handleRemoveImage = (e) => {
    e.preventDefault();
    setSelectedFile(null);
    setImagePreview(null);
    document.getElementById('image-upload').value = ''; // Clear file input
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      
      {/* Main Card Container (Clean and simple) */}
      <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden 
                    border border-gray-100">
        
        {/* Card Header */}
        <div className="p-4 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
                Create New Post
            </h2>
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-6">

            {/* 1. Profile Header (User Info) */}
            <div className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 flex-shrink-0"
                    src={userData.profileImage}
                    alt={`${userData.username}'s profile`}
                    onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/150x150/7c3aed/FFFFFF?text=A";
                    }}
                />
                <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-800">
                    @{userData.username}
                    </p>
                </div>
            </div>

            {/* 2. Image Upload Box */}
            <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">Select Image</span>
                <label 
                    htmlFor="image-upload"
                    className="block w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 transition duration-200 
                            hover:border-purple-500 hover:bg-gray-50 overflow-hidden relative"
                    style={{ 
                        height: imagePreview ? 'auto' : '180px', 
                        aspectRatio: imagePreview ? '4 / 3' : 'auto', 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {imagePreview ? (
                    <img 
                        src={imagePreview} 
                        alt="Image preview" 
                        className="w-full h-full object-cover"
                    />
                    ) : (
                    <div className="text-center p-8">
                        {/* SVG Upload Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-purple-500 mb-2">
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.75"/>
                            <path d="M12 18v3"/>
                            <path d="m8 17 4 4 4-4"/>
                        </svg>
                        <p className="text-gray-700 font-medium text-sm">Click to select image</p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, JPEG accepted</p>
                    </div>
                    )}
                    
                    <input 
                        id="image-upload" 
                        type="file" 
                        accept="image/*" 
                        className="sr-only" 
                        onChange={handleFileChange} 
                    />
                    
                    {/* Remove image button */}
                    {imagePreview && (
                        <button
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 p-1 bg-red-600 rounded-full text-white hover:bg-red-700 transition shadow-md z-10 opacity-90"
                            aria-label="Remove selected image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    )}
                </label>
            </div>
        </div>

        {/* 3. Post Button */}
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handlePost}
            disabled={!selectedFile}
            className={`w-full text-white font-semibold py-2.5 px-6 rounded-lg transition duration-200 ${
              selectedFile 
                ? 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800 shadow-md' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Post Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCreatorCard;
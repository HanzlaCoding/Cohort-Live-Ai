import React, { useState } from "react";

const SuggestedSongs = ({ suggestedSongs }) => {
  return (
    <>
      <div className="songs mt-5 w-full min-h-80">
        <h3 className="text-2xl font-bold">Recommended Songs</h3>
        {suggestedSongs && suggestedSongs.length > 0 ? (
          suggestedSongs
        ) : (
          <p className="text-gray-500 font-bold">No songs available</p>
        )}
      </div>
    </>
  );
};

export default SuggestedSongs;
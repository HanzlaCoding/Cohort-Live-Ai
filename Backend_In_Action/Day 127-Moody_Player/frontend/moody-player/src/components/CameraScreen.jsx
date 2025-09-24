import React, { useRef, useState } from "react";
import axios from "axios";
import * as faceapi from "face-api.js";
import SuggestedSongs from "./SuggestedSongs";

const CameraScreen = () => {
  const videoRef = useRef();
  const [renderSongs, setRenderSongs] = useState(null);
  const [handlePlay, setHandlePlay] = useState(false);

  const detectFace = async () => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    const handleVideoPlay = async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections && detections[0]) {
        const expressions = detections[0].expressions;

        const dominantMood = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );

        axios
          .get(`http://localhost:3000/getSongs?mood=${dominantMood}`)
          .then((response) => {
            const songs = response.data;
            const songList = songs.songsByMood;
            console.log(songList);

            setRenderSongs(songList);
          })
          .catch((error) => {
            console.error("Error fetching songs:", error);
          });
      }
    };

    loadModels().then(startVideo);
    videoRef.current &&
      videoRef.current.addEventListener("play", handleVideoPlay);
  };

  // Render songs based on the fetched data
  const suggestedSongs = renderSongs?.map((items, idx) => {
    const { songName, artist, mood } = items;

    return (
      <div
        key={idx}
        className="song-card flex justify-between items-center p-3 transition-all duration-200 rounded-lg hover:bg-zinc-100"
      >
        <div className="song-dets flex gap-x-1">
          <div className="song-detail">
            <h4 className="font-bold text-lg leading-5 opacity-80">
              {songName}
            </h4>
            <p className="opacity-60 text-sm">Ft. {artist}</p>
          </div>
          <p className="text-center ml-3 text-blue-500 text-sm font-semibold">
            {mood}
          </p>
        </div>
        <div className="buttons">
          <audio id={`audio-${idx}`} src={items.songAudio} />
          <i
            onClick={() => {
              const audio = document.getElementById(`audio-${idx}`);
              audio && audio.play();
              setHandlePlay(idx);
            }}
            className="ri-play-large-line cursor-pointer inline-block transition-all duration-300 hover:scale-125"
          ></i>
          <i
            onClick={() => {
              const audio = document.getElementById(`audio-${idx}`);
              audio && audio.pause();
            }}
            className="ri-pause-large-fill cursor-pointer inline-block transition-all duration-300 hover:scale-125"
          ></i>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="face-detections flex items-end gap-x-2">
        <div className="video-frame w-50 h-60 rounded-lg bg-zinc-900 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={detectFace}
          className="px-5 cursor-pointer mt-3 py-2 bg-yellow-500 font-bold rounded-lg text-black"
        >
          Detect Face
        </button>
      </div>
      <SuggestedSongs suggestedSongs={suggestedSongs} />
    </>
  );
};

export default CameraScreen;
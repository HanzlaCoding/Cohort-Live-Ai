import React, { useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';

export default function FacialExpression() {
  const videoRef = useRef();
  const canvasRef = useRef();

  const detectFace = () => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Error accessing webcam: ", err));
    };

    const handleVideoPlay = () => {
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
        console.log(detections[0].expressions);
      })
    };

    loadModels().then(startVideo);
    videoRef.current && videoRef.current.addEventListener('play', handleVideoPlay);
  }

  return (
    <>
      <div style={{ position: 'relative' }} className='w-full h-screen flex flex-col justify-center items-center'>
        <div className="video-frame w-120 h-120 rounded-lg bg-zinc-900 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            className='w-full h-full object-cover'
          />
        </div>
        <button onClick={detectFace} className='px-3 cursor-pointer mt-3 py-1 bg-purple-500 rounded-lg text-white font-["Inter"]'>Detect Face</button>
      </div>
    </>
  );
}    
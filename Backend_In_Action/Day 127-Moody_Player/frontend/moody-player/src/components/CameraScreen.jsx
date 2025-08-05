import React, { useEffect, useRef } from 'react'

const CameraScreen = () => {

    const videoRef = useRef();

    useEffect(()=>{
        
navigator.mediaDevices.getUserMedia({ video: true })
.then((video)=>{
    const videoElement = document.querySelector('.camera')
    videoElement.srcObject = video
})
.catch((err)=>{
    console.log(err)
})

    },[])

  return (
    <>
    <div className='w-100 h-100 rounded-2xl'>
        <div className="camera w-100 h-100 rounded-2xl bg-gray-100">
            <video ref={videoRef} src="" className='w-full h-full'></video>
        </div>

<button className='px-6 w-full font-bold py-2 bg-purple-600 text-white rounded-lg cursor-pointer my-2 hover:bg-purple-700 transition duration-300'>
Detect Face
</button>
</div>
    </>
  )
}

export default CameraScreen
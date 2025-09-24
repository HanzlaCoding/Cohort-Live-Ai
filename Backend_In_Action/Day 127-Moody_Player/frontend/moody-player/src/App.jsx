import React from 'react'
import CameraScreen from './components/CameraScreen';
import './index.css'

export default function App() {

  return (
    <>
      <div className='w-full h-screen relative p-5 font-["Helvetica_Now_Display"]'>
        <CameraScreen />
      </div>
    </>
  );
}
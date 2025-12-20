import React from 'react'
import { Canvas } from '@react-three/fiber'
import './style.css'
import { OrbitControls } from '@react-three/drei'
import Cly from './Cly.jsx'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Footer from './Footer.jsx'

const App = () => {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Overlay text */}
      <div className="absolute top-1/10 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to my <span className="text-cyan-400">Portfolio</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Exploring 3D creativity with React & Three.js
        </p>
      </div>
    <Canvas camera={{fov: 35}}>

      <ambientLight intensity={3} />
      <Cly />
      <EffectComposer>
        <Bloom
        mipmapBlur
        intensity={2} // The bloom intensity.
        luminanceThreshold={0.49} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0.2} // smoothness of the luminance threshold. Range is [0, 1]
  />
      </EffectComposer>
    </Canvas>
    <Footer />
    </div>
  )
}

export default App
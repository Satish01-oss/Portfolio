import { Canvas } from "@react-three/fiber"
import Cly from "./Cly.jsx"
import Footer from "./Footer.jsx"
import Page2 from "./page2/Page2.jsx"
import { Bloom, EffectComposer } from "@react-three/postprocessing"

const Home = () => {
  return (
    <div className="relative w-full bg-black">
      {/* Overlay text */}
      <div className="absolute top-[1%] left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Welcome to my <span className="text-cyan-400">Portfolio</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Exploring 3D creativity with React & Three.js
        </p>
      </div>

      <section className="relative w-full h-screen">
        <Canvas camera={{ fov: 35 }}>
          <ambientLight intensity={3} />
          <Cly />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={2}
              luminanceThreshold={0.49}
              luminanceSmoothing={0.2}
            />
          </EffectComposer>
        </Canvas>
        <Footer />
      </section>

      <Page2 />
    </div>
  )
}

export default Home

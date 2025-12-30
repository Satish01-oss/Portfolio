import { Canvas } from '@react-three/fiber'
import { Bounds } from '@react-three/drei'
import Card from './Card'
import { OrbitControls } from '@react-three/drei'
function App() {
  
  return (
    <section className="h-screen bg-black">
      <Canvas camera={{ fov: 20 }}>
  <ambientLight intensity={1.5} />
  <directionalLight position={[5, 5, 5]} intensity={3} />

  <OrbitControls
    enableZoom
    enablePan={false}
    minPolarAngle={Math.PI / 2}
    maxPolarAngle={Math.PI / 2}
  />

  <Card />
</Canvas>

    </section>
  )
}

export default App

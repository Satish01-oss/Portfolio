import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three'

const Card = () => {
  const { scene } = useGLTF('/Cards/card.gltf')
  const texture = useTexture('/Cards/textures/ImageCard.png')

  useEffect(() => {
    texture.flipY = false
    texture.colorSpace = THREE.SRGBColorSpace

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: texture,
          roughness: 0.5,
          metalness: 0.1,
          side: THREE.FrontSide,
        })
      }
    })
  }, [scene, texture])

  return <primitive object={scene} />
}

export default Card

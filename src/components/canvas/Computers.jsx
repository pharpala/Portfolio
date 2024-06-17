import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {

  const Computer = useGLTF('./desktop_pc/scene.gltf') // 54.13

  return (
    <mesh>
      <hemisphereLight intensity={3} 
      groundColor='black'/>

      <pointLight intensity={2.5} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={Computer.scene}
        scale={isMobile ? 0.48 : 0.72}
        position={isMobile ? [0, -1.8, -0.9] : [0, -3.25, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}


const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => 
  {
    const mediaQuery = window.matchMedia
    ('(max-width: 500px)')

      setIsMobile(mediaQuery.matches)
      
      const handleMediaQueryChange = (e) => 
      {
        setIsMobile(e.matches)
      }

      mediaQuery.addEventListener
      ('change', handleMediaQueryChange)

      return () => {
        mediaQuery.removeEventListener
        ('change', handleMediaQueryChange)
      }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      
      >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas
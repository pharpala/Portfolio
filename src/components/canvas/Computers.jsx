import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const Computer = useGLTF('./desktop_pc/scene.gltf');
  const meshRef = useRef();

  // Bounce animation parameters
  const bounceHeight = 0.1;
  const bounceSpeed = 2;

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(elapsedTime * bounceSpeed) * bounceHeight;
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={3} groundColor="black" />
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
        scale={isMobile ? 0.4 : 0.72}
        position={isMobile ? [0, -2.9, -0.9] : [0, -3.5, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

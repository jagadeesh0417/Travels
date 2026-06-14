'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const routeData = [
  { name: 'Hyderabad', pos: [0, 0, 0] as [number, number, number] },
  { name: 'Tirupati', pos: [0, 0, -1.5] as [number, number, number] },
  { name: 'Bangalore', pos: [0, 0, -3] as [number, number, number] },
  { name: 'Goa', pos: [0, 0, -4.5] as [number, number, number] },
];

function TravelLine() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const progress = (Math.sin(t * 0.3) * 0.5 + 0.5);
    const totalLength = 4.5;
    const p = progress * totalLength;
    ref.current.position.z = -p;
    ref.current.position.y = 0.2 + Math.sin(t * 2 + p) * 0.05;
  });

  return (
    <mesh ref={ref} position={[0, 0.2, 0]}>
      <sphereGeometry args={[0.08, 12, 12]} />
      <meshPhysicalMaterial color="#d97706" emissive="#d97706" emissiveIntensity={0.8} />
    </mesh>
  );
}

function RouteNodes() {
  const nodeRefs = useRef<(THREE.Mesh)[]>([]);

  useFrame((state) => {
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.position.y = 0.15 + Math.sin(state.clock.elapsedTime * 0.5 + i * 1.5) * 0.05;
    });
  });

  return (
    <>
      {routeData.map((city, i) => (
        <group key={i} position={city.pos}>
          <mesh
            ref={(el) => { if (el) nodeRefs.current[i] = el; }}
          >
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshPhysicalMaterial color="#ffffff" emissive="#d97706" emissiveIntensity={0.3} metalness={0.5} roughness={0.2} />
          </mesh>
          <mesh position={[0.25, 0, 0]}>
            <planeGeometry args={[0.6, 0.12]} />
            <meshBasicMaterial color="#d97706" transparent opacity={0.6} />
          </mesh>
          {/* Ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.15, 0.18, 24]} />
            <meshBasicMaterial color="#d97706" transparent opacity={0.2} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}
    </>
  );
}

function RoutePath() {
  return (
    <group>
      {routeData.slice(0, -1).map((_, i) => {
        const startZ = routeData[i].pos[2];
        const endZ = routeData[i + 1].pos[2];
        const midZ = (startZ + endZ) / 2;
        return (
          <mesh key={i} position={[0, 0.05, midZ]}>
            <boxGeometry args={[0.015, 0.015, Math.abs(endZ - startZ)]} />
            <meshPhysicalMaterial
              color="#d97706"
              transparent
              opacity={0.3}
              emissive="#d97706"
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function MovingBus() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const progress = (Math.sin(t * 0.25) * 0.5 + 0.5);
    const totalLength = 4.5;
    const p = progress * totalLength;
    ref.current.position.z = -p;
    ref.current.position.y = 0.3 + Math.sin(t * 2 + p) * 0.08;
    ref.current.position.x = Math.sin(t * 0.5) * 0.1;
    ref.current.rotation.y = Math.sin(t * 0.3) * 0.05;
  });

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.1}>
      <group ref={ref} position={[0, 0.2, 0]}>
        <mesh>
          <boxGeometry args={[0.25, 0.12, 0.15]} />
          <meshPhysicalMaterial color="#d97706" metalness={0.3} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.2, 0.06, 0.12]} />
          <meshPhysicalMaterial color="#fef3c7" transparent opacity={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

function GridFloor() {
  return (
    <group>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, -0.1, -i * 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[3, 0.01]} />
          <meshBasicMaterial color="#d97706" transparent opacity={0.05} />
        </mesh>
      ))}
    </group>
  );
}

export default function RouteMap() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 1.2, 2.5], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 1.2, 2.5]} fov={45} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 2]} intensity={0.8} />
        <pointLight position={[0, 0.5, -2]} color="#d97706" intensity={0.3} />

        <RoutePath />
        <RouteNodes />
        <TravelLine />
        <MovingBus />
        <GridFloor />
      </Canvas>
    </div>
  );
}

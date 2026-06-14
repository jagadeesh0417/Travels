'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '@/hooks/useMousePosition';

function LuxuryBus({ scroll }: { scroll: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(Date.now() * 0.0005 + scroll * 0.01) * 0.15;
    ref.current.position.x = scroll * 0.005;
    ref.current.rotation.z = Math.sin(Date.now() * 0.0003) * 0.02;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[2.2, 0.9, 1]} />
        <meshPhysicalMaterial color="#ffffff" metalness={0.6} roughness={0.2} clearcoat={0.8} clearcoatRoughness={0.3} envMapIntensity={1} />
      </mesh>
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[2, 0.5, 0.85]} />
        <meshPhysicalMaterial color="#f8f9fa" metalness={0.3} roughness={0.1} transparent opacity={0.8} />
      </mesh>
      {[-0.7, -0.35, 0, 0.35, 0.7].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0.43]} castShadow>
          <boxGeometry args={[0.25, 0.3, 0.02]} />
          <meshPhysicalMaterial color="#88ccee" metalness={0.9} roughness={0.1} transparent opacity={0.6} />
        </mesh>
      ))}
      {[[-0.8, -0.15, 0.5], [-0.8, -0.15, -0.5], [0.8, -0.15, 0.5], [0.8, -0.15, -0.5]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <meshPhysicalMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
      <mesh position={[1.1, 0.35, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshPhysicalMaterial color="#ffeeaa" emissive="#ffdd66" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-1.1, 0.35, 0]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshPhysicalMaterial color="#ff4444" emissive="#ff2222" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function BlackSUV({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);
  const angle = useRef(0);
  const initialized = useRef(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    if (!initialized.current) {
      angle.current = (index * 1.7 + 0.3) % (Math.PI * 2);
      initialized.current = true;
    }
    angle.current += delta * 0.3;
    const radius = 2.8;
    ref.current.position.x = Math.cos(angle.current + index * 2) * radius;
    ref.current.position.z = Math.sin(angle.current + index * 2) * radius;
    ref.current.position.y = Math.sin(angle.current * 2) * 0.1;
    ref.current.rotation.y = -angle.current - index * 2 + Math.PI / 2;
  });

  return (
    <group ref={ref} position={[2.5, 0, 0]}>
      <mesh position={[0, 0.25, 0]} castShadow>
        <boxGeometry args={[1.2, 0.5, 0.7]} />
        <meshPhysicalMaterial color="#1a1a1a" metalness={0.7} roughness={0.15} clearcoat={0.9} clearcoatRoughness={0.2} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[0.7, 0.3, 0.6]} />
        <meshPhysicalMaterial color="#2a2a2a" metalness={0.5} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      {[[-0.45, -0.1, 0.35], [-0.45, -0.1, -0.35], [0.45, -0.1, 0.35], [0.45, -0.1, -0.35]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.08, 12]} />
          <meshPhysicalMaterial color="#111" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function WhiteSedan({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);
  const angle = useRef(0);
  const initialized = useRef(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    if (!initialized.current) {
      angle.current = Math.PI + (index * 2.3 + 0.7) % Math.PI;
      initialized.current = true;
    }
    angle.current += delta * 0.25;
    const radius = 2.2;
    ref.current.position.x = Math.cos(angle.current + index * 2.5) * radius;
    ref.current.position.z = Math.sin(angle.current + index * 2.5) * radius;
    ref.current.position.y = Math.sin(angle.current * 1.5) * 0.08;
    ref.current.rotation.y = -angle.current - index * 2.5 + Math.PI / 2;
  });

  return (
    <group ref={ref} position={[-2, 0, 0]}>
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[0.9, 0.3, 0.55]} />
        <meshPhysicalMaterial color="#ffffff" metalness={0.5} roughness={0.2} clearcoat={0.8} clearcoatRoughness={0.3} />
      </mesh>
      <mesh position={[0.05, 0.35, 0]} castShadow>
        <boxGeometry args={[0.5, 0.2, 0.45]} />
        <meshPhysicalMaterial color="#f0f4f8" metalness={0.3} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      {[[-0.35, -0.05, 0.28], [-0.35, -0.05, -0.28], [0.35, -0.05, 0.28], [0.35, -0.05, -0.28]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.06, 12]} />
          <meshPhysicalMaterial color="#222" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function MiniTraveller() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 0.7) * 0.3 + 0.5;
    ref.current.position.x = Math.sin(t * 0.4) * 1.5;
    ref.current.position.z = Math.cos(t * 0.3) * 0.8;
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    ref.current.rotation.z = Math.cos(t * 0.6) * 0.05;
    ref.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.05);
  });

  return (
    <group ref={ref} position={[0, 0.5, 0]}>
      <mesh castShadow>
        <boxGeometry args={[0.35, 0.2, 0.25]} />
        <meshPhysicalMaterial color="#ffffff" metalness={0.6} roughness={0.15} clearcoat={0.9} />
      </mesh>
      <mesh position={[0, 0.15, 0]} castShadow>
        <boxGeometry args={[0.25, 0.12, 0.2]} />
        <meshPhysicalMaterial color="#e8ecf0" metalness={0.3} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      {[[-0.12, -0.05, 0.13], [-0.12, -0.05, -0.13], [0.12, -0.05, 0.13], [0.12, -0.05, -0.13]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 0.04, 8]} />
          <meshPhysicalMaterial color="#333" />
        </mesh>
      ))}
    </group>
  );
}

function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const initialized = useRef(false);
  const count = 50;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = i * 0.5;
      pos[i * 3] = Math.sin(phi) * 6;
      pos[i * 3 + 1] = Math.cos(phi * 0.7) * 3;
      pos[i * 3 + 2] = Math.sin(phi * 0.3) * 3 - 2;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    if (!initialized.current) {
      initialized.current = true;
      return;
    }
    const positionsAttrib = meshRef.current.geometry.attributes.position;
    const array = positionsAttrib.array as Float32Array;
    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.001;
      array[i * 3] += Math.cos(state.clock.elapsedTime * 0.15 + i * 0.5) * 0.0005;
    }
    positionsAttrib.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial size={0.03} color="#d97706" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

function Clouds() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.position.x += delta * 0.02;
    if (groupRef.current.position.x > 8) groupRef.current.position.x = -8;
  });

  const cloudPositions = useMemo(() => {
    return [
      { x: -2.5, y: 2.0, z: -4, scale: 0.8 },
      { x: 3.2, y: 1.8, z: -3, scale: 0.6 },
      { x: -1.0, y: 2.5, z: -5, scale: 1.0 },
      { x: 4.5, y: 1.5, z: -4.5, scale: 0.5 },
    ];
  }, []);

  return (
    <group ref={groupRef}>
      {cloudPositions.map((pos, i) => (
        <group key={i} position={[pos.x, pos.y, pos.z]} scale={pos.scale}>
          <mesh>
            <sphereGeometry args={[0.4, 8, 8]} />
            <meshPhysicalMaterial color="white" transparent opacity={0.15} roughness={0.4} />
          </mesh>
          <mesh position={[0.3, 0.05, 0]}>
            <sphereGeometry args={[0.3, 8, 8]} />
            <meshPhysicalMaterial color="white" transparent opacity={0.12} roughness={0.4} />
          </mesh>
          <mesh position={[-0.25, 0.03, 0.1]}>
            <sphereGeometry args={[0.25, 8, 8]} />
            <meshPhysicalMaterial color="white" transparent opacity={0.1} roughness={0.4} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Scene({ scroll }: { scroll: number }) {
  const mouse = useMousePosition();

  return (
    <group
      rotation={[mouse.normalizedY * 0.02, mouse.normalizedX * 0.02, 0]}
      position={[mouse.normalizedX * 0.1, mouse.normalizedY * 0.1, 0]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 4]} intensity={1.5} castShadow shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-5, 5, -5, 5]} />
      </directionalLight>
      <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#d97706" />
      <hemisphereLight args={["#ffffff", "#d97706", 0.4]} />

      <LuxuryBus scroll={scroll} />
      <BlackSUV index={0} />
      <WhiteSedan index={1} />
      <MiniTraveller />
      <FloatingParticles />
      <Clouds />

      <ContactShadows position={[0, -0.5, 0]} opacity={0.2} scale={8} blur={2.5} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshPhysicalMaterial color="#f0f2f5" transparent opacity={0.3} roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function VehicleScene({ scroll = 0 }: { scroll?: number }) {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 1.5, 4.5], fov: 40 }}>
        <PerspectiveCamera makeDefault position={[0, 1.5, 4.5]} fov={40} />
        <Environment preset="city" />
        <Scene scroll={scroll} />
      </Canvas>
    </div>
  );
}

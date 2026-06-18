"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { BufferGeometry, BufferAttribute, Mesh, Group } from "three";

function CoreShape() {
  const meshRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <MeshDistortMaterial
          color="#0284C7"
          emissive="#0284C7"
          emissiveIntensity={0.2}
          wireframe
          transparent
          opacity={0.5}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function OrbitingRing() {
  const ringRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      ringRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshBasicMaterial color="#3B82F6" transparent opacity={0.2} />
    </mesh>
  );
}

function OuterRing() {
  const ringRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.3) * 0.4;
      ringRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[4.5, 0.015, 16, 100]} />
      <meshBasicMaterial color="#0284C7" transparent opacity={0.1} />
    </mesh>
  );
}

function FloatingCubes() {
  const groupRef = useRef<Group>(null!);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      pos.push({ x: Math.cos(angle) * 5.5, y: Math.sin(angle) * 5.5, z: 0 });
    }
    return pos;
  }, []);

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
          <mesh position={[p.x, p.y, p.z]}>
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshBasicMaterial color="#0284C7" transparent opacity={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Particles() {
  const positions = useMemo(() => {
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < pos.length; i++) {
      pos[i] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.02}
        color="#0284C7"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D({ className = "", interactive = false }: { className?: string; interactive?: boolean }) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <CoreShape />
        <OrbitingRing />
        <OuterRing />
        <FloatingCubes />
        <Particles />
      </Canvas>
    </div>
  );
}

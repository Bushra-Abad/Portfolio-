'use client';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// A rotating "neural network": nodes connected by nearby edges around a glowing core.
// It tilts toward the pointer, which keeps it interactive without hiding the text.
function Network({ still }: { still: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const { pts, edges } = useMemo(() => {
    const pts = Array.from({ length: 70 }, () => new THREE.Vector3().randomDirection().multiplyScalar(1.5 + Math.random() * 0.6));
    const v: number[] = [];
    pts.forEach((a, i) => pts.slice(i + 1).forEach((b) => { if (a.distanceTo(b) < 1.15) v.push(a.x, a.y, a.z, b.x, b.y, b.z); }));
    return { pts, edges: new Float32Array(v) };
  }, []);

  useFrame((s, dt) => {
    const g = group.current;
    if (!still) g.rotation.y += dt * 0.12;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, s.pointer.y * 0.4, 0.05);
    g.position.x = THREE.MathUtils.lerp(g.position.x, s.pointer.x * 0.3, 0.05);
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={edges.length / 3} array={edges} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#5CA8FF" transparent opacity={0.35} />
      </lineSegments>
      {pts.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={i % 7 === 0 ? '#FFB86B' : '#9DB8FF'} />
        </mesh>
      ))}
      <Float speed={still ? 0 : 1.5} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial color="#1B2A8A" metalness={0.6} roughness={0.25} emissive="#2340D8" emissiveIntensity={0.4} flatShading />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3D({ still = false }: { still?: boolean }) {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 5.2], fov: 50 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#8B7CFF" />
      <pointLight position={[-4, -2, 3]} intensity={25} color="#FFB86B" />
      <Network still={still} />
    </Canvas>
  );
}

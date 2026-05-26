"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export function MorvenScene(){
  const group = useRef<THREE.Group>(null);
  const points = useMemo(()=>new Float32Array(Array.from({length:450},()=> (Math.random()-0.5)*6)),[]);
  useFrame((state)=>{ if(group.current){ group.current.rotation.y += 0.0015; group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y*0.2, 0.05); }});
  return <group ref={group}><mesh><icosahedronGeometry args={[0.9,2]}/><meshStandardMaterial color="#0f1220" metalness={0.8} roughness={0.25}/></mesh><points><bufferGeometry><bufferAttribute attach="attributes-position" count={points.length/3} array={points} itemSize={3}/></bufferGeometry><pointsMaterial color="#6D4AFF" size={0.02} sizeAttenuation/></points><gridHelper args={[12,20,"#3B82F6","#1A1A24"]} position={[0,-2,0]} /></group>;
}

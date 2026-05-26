'use client';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function MorvenScene({ reducedMotion=false }:{reducedMotion?:boolean}){
  const group = useRef<THREE.Group>(null);
  const points = useMemo(()=>new Float32Array(Array.from({length:300},()=> (Math.random()-0.5)*4)),[]);
  useFrame((state)=>{if(!group.current||reducedMotion) return; group.current.rotation.y = state.clock.elapsedTime*0.08; group.current.rotation.x = state.mouse.y*0.1;});
  return <group ref={group}><mesh><icosahedronGeometry args={[0.8,2]} /><meshStandardMaterial color='#0f1020' metalness={0.7} roughness={0.2} /></mesh><points><bufferGeometry><bufferAttribute attach='attributes-position' count={points.length/3} array={points} itemSize={3} /></bufferGeometry><pointsMaterial size={0.02} color='#6D4AFF' /></pointsMaterial></points></group>;
}

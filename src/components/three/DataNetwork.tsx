'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MorvenScene } from './MorvenScene';
export function DataNetwork({reducedMotion=false}:{reducedMotion?:boolean}){return <div className='h-[380px] rounded-3xl border border-line bg-[#06060a]'><Canvas camera={{position:[0,0,3.2],fov:45}}><ambientLight intensity={0.6}/><pointLight position={[3,2,3]} intensity={1} color='#3B82F6'/><MorvenScene reducedMotion={reducedMotion}/><OrbitControls enableZoom={false} enablePan={false} autoRotate={!reducedMotion} autoRotateSpeed={0.4} /></Canvas></div>}

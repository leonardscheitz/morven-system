"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MorvenScene } from "./MorvenScene";
export function HeroCanvas(){return <div aria-hidden className="h-[420px] w-full"><Canvas camera={{position:[0,0,4],fov:45}} dpr={[1,1.5]}><ambientLight intensity={0.5}/><pointLight position={[4,2,3]} intensity={2} color="#22D3EE"/><Suspense fallback={null}><MorvenScene/></Suspense></Canvas></div>}

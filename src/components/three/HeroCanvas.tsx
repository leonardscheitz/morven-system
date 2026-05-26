'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const Scene = dynamic(()=>import('./DataNetwork').then(m=>m.DataNetwork),{ssr:false, loading:()=> <div className='h-[380px] rounded-3xl border border-line bg-card'/>});
export function HeroCanvas(){const [r,setR]=useState(false);useEffect(()=>{setR(window.matchMedia('(prefers-reduced-motion: reduce)').matches);},[]);return <div aria-hidden><Scene reducedMotion={r} /></div>;}

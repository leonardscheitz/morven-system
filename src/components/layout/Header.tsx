'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header(){const [s,setS]=useState(false);useEffect(()=>{const h=()=>setS(window.scrollY>8);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);},[]);
return <header className={`fixed top-0 z-50 w-full transition ${s?'bg-panel/95 border-b border-line':'bg-transparent'}`}><div className='mx-auto flex max-w-7xl items-center justify-between p-4'><Link href='/' className='font-semibold text-text'>Morven Systems</Link><nav className='hidden gap-6 text-sm md:flex text-muted'>{['Início','Serviços','Processo','Planos','Contato'].map((i)=><a key={i} href={i==='Início'?'/':`/#${i.toLowerCase()}`} className='hover:text-text'>{i}</a>)}</nav><div className='hidden md:flex gap-2'><Button href='/agendar' variant='ghost'>Agendar reunião</Button><Button href='/area-cliente'>Área do cliente</Button></div><MobileMenu /></div></header>}

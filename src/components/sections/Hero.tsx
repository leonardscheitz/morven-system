"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
const HeroCanvas = dynamic(()=>import("@/components/three/HeroCanvas").then(m=>m.HeroCanvas),{ssr:false,loading:()=> <div className="h-[420px] rounded-xl panel"/>});
export function Hero(){return <section className="section pt-32 pb-20 grid lg:grid-cols-2 gap-10 items-center"><div><motion.h1 initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="text-4xl lg:text-6xl font-semibold leading-tight">Sites profissionais para empresas que precisam vender, transmitir confiança e crescer.</motion.h1><p className="mt-6 text-muted max-w-xl">A Morven Systems cria sites, landing pages e sistemas web com design premium, performance, estratégia e estrutura profissional para captação de clientes.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/contato"><Button className="bg-accent text-white">Solicitar orçamento</Button></Link><Link href="/agendar"><Button>Agendar reunião</Button></Link><Link href="/servicos"><Button>Ver serviços</Button></Link></div></div><div className="panel rounded-2xl p-4"><HeroCanvas/></div></section>}

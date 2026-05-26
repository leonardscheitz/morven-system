"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
export function Header() {
  return <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-bg/90 backdrop-blur"><div className="section flex h-16 items-center justify-between"><Link href="/" className="font-semibold tracking-wide">Morven Systems</Link><nav className="hidden md:flex items-center gap-6 text-sm text-muted"><Link href="/">Início</Link><Link href="/servicos">Serviços</Link><a href="/#processo">Processo</a><a href="/#planos">Planos</a><Link href="/contato">Contato</Link></nav><motion.div whileHover={{y:-1}} className="flex gap-2"><Link href="/agendar"><Button>Agendar reunião</Button></Link><Link href="/area-cliente"><Button className="bg-accent text-white">Área do cliente</Button></Link></motion.div></div></header>;
}

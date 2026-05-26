import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export const metadata: Metadata = {title:"Morven Systems — Sites profissionais, sistemas web e soluções digitais",description:"A Morven Systems cria sites profissionais, landing pages, sistemas web, dashboards e soluções digitais com design premium, performance e estrutura de conversão.",keywords:["morven systems","sites profissionais","sistemas web"],robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Header/>{children}<Footer/></body></html>;}

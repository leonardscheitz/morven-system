import { z } from "zod";

export const contactSchema = z.object({ name: z.string().min(2), email: z.string().email(), whatsapp: z.string().min(8), company: z.string().min(2), service: z.string().min(2), budget: z.string().min(2), timeline: z.string().min(2), message: z.string().min(10), consent: z.literal(true) });
export const scheduleSchema = z.object({ name: z.string().min(2), email: z.string().email(), whatsapp: z.string().min(8), company: z.string().min(2), projectType: z.string().min(2), bestDay: z.string().min(2), bestTime: z.string().min(2), notes: z.string().optional() });
export const registerSchema = z.object({ fullName: z.string().min(2), email: z.string().email(), whatsapp: z.string().min(8), company: z.string().min(2), projectType: z.string().min(2), budget: z.string().min(2), message: z.string().min(10), password: z.string().min(8), confirmPassword: z.string().min(8), consent: z.literal(true) }).refine((d)=>d.password===d.confirmPassword,{path:["confirmPassword"],message:"As senhas devem ser iguais."});
export const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8) });

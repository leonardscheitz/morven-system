import { z } from 'zod';
const requiredText = (label: string) => z.string().min(2, `${label} é obrigatório`);
export const contactSchema = z.object({
  name: requiredText('Nome'), email: z.string().email('E-mail inválido'), whatsapp: requiredText('WhatsApp'),
  company: z.string().optional(), serviceType: requiredText('Tipo de serviço'), budget: z.string().optional(),
  deadline: z.string().optional(), message: z.string().min(10, 'Mensagem muito curta'), consent: z.boolean().refine(Boolean, 'Aceite obrigatório'),
});
export const scheduleSchema = z.object({ name: requiredText('Nome'), email: z.string().email(), whatsapp: requiredText('WhatsApp'), company: z.string().optional(), projectType: requiredText('Tipo de projeto'), bestDay: requiredText('Melhor dia'), bestTime: requiredText('Melhor horário'), notes: z.string().optional() });
export const loginSchema = z.object({ email: z.string().email(), password: z.string().min(8, 'Senha mínima de 8 caracteres') });
export const registerSchema = z.object({ fullName: requiredText('Nome completo'), email: z.string().email(), whatsapp: requiredText('WhatsApp'), company: z.string().optional(), projectType: requiredText('Tipo de projeto'), budget: z.string().optional(), message: z.string().min(10), password: z.string().min(8), confirmPassword: z.string().min(8), consent: z.boolean().refine(Boolean, 'Aceite obrigatório') }).refine((data) => data.password === data.confirmPassword, {message: 'As senhas precisam ser iguais', path: ['confirmPassword']});

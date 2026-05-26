import { InputHTMLAttributes } from 'react'; import { cn } from '@/lib/utils';
export const Input = (p: InputHTMLAttributes<HTMLInputElement>) => <input {...p} className={cn('w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-text outline-none focus:border-steel', p.className)} />;

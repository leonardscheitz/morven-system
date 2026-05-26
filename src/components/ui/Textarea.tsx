import { TextareaHTMLAttributes } from 'react'; import { cn } from '@/lib/utils';
export const Textarea = (p: TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea {...p} className={cn('w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-text outline-none focus:border-steel min-h-28', p.className)} />;

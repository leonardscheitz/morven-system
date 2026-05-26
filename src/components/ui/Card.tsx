import { HTMLAttributes } from 'react'; import { cn } from '@/lib/utils';
export const Card = (p: HTMLAttributes<HTMLDivElement>) => <div {...p} className={cn('rounded-2xl border border-line bg-card/80 p-6', p.className)} />;

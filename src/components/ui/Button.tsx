import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { href?: string; variant?: 'primary'|'ghost' };
const styles = { primary:'bg-text text-bg hover:bg-white', ghost:'border border-line hover:border-purple text-text' };
export function Button({ href, className, variant='primary', ...props }: Props){
  const cls = cn('rounded-xl px-5 py-2.5 text-sm font-semibold transition', styles[variant], className);
  return href ? <Link href={href} className={cls}>{props.children}</Link> : <button className={cls} {...props} />;
}

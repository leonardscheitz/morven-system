import { clsx, type ClassValue } from 'clsx';
export const cn = (...inputs: ClassValue[]) => clsx(inputs);
export const waitMock = (ms = 1200) => new Promise((r) => setTimeout(r, ms));

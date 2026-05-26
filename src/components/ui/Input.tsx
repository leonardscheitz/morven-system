import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";
export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => <input {...props} className={cn("w-full rounded-md border border-white/15 bg-panel px-3 py-2 text-sm text-text placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent", props.className)} />;

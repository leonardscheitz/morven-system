import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn("rounded-md border border-white/15 bg-interface px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent", className)} {...props} />;
}

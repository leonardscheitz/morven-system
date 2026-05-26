import { cn } from "@/lib/utils";
import { SelectHTMLAttributes } from "react";
export const Select = (props: SelectHTMLAttributes<HTMLSelectElement>) => <select {...props} className={cn("w-full rounded-md border border-white/15 bg-panel px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent", props.className)} />;

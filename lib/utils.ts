import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function textGradient(gradient: string){
  const style = {
    background: gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }
  return style
}
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

export const twoColumnsMotion = {
  initial: { opacity:0, y:20 },
  whileInView: { opacity:1, y:0 },
  transition: { delay:0.3 }
}
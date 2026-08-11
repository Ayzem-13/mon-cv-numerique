import { isValidElement } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveNativeButton(render: unknown, explicit?: boolean): boolean {
  if (explicit !== undefined) return explicit
  return isValidElement(render) ? render.type === 'button' : true
}

import { useRef } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme, type Theme } from '@/lib/theme'

const OPTIONS = [
  { value: 'light', label: 'Clair', icon: Sun },
  { value: 'dark', label: 'Sombre', icon: Moon },
  { value: 'system', label: 'Système', icon: Monitor },
] as const satisfies ReadonlyArray<{ value: Theme; label: string; icon: typeof Sun }>

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const triggerRef = useRef<HTMLSpanElement>(null)

  const current = OPTIONS.find((option) => option.value === theme) ?? OPTIONS[2]
  const Icon = current.icon

  const choose = (value: string) => {
    const rect = triggerRef.current?.getBoundingClientRect()
    setTheme(
      value as Theme,
      rect && { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    )
  }

  return (
    <DropdownMenu>
      <span ref={triggerRef} className="inline-flex">
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label={`Thème : ${current.label}`}
              className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="size-4" />
            </button>
          }
        />
      </span>

      <DropdownMenuContent align="end" className="w-auto min-w-40">
        <DropdownMenuRadioGroup value={theme} onValueChange={choose}>
          {OPTIONS.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              <option.icon className="size-4 text-muted-foreground" />
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

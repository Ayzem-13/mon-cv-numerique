import { LuMonitor, LuMoon, LuSun } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useTheme, type Theme } from '../lib/theme'

const CYCLE: Theme[] = ['light', 'dark', 'system']

const THEMES = {
  light: { icon: LuSun, label: 'Thème clair' },
  dark: { icon: LuMoon, label: 'Thème sombre' },
  system: { icon: LuMonitor, label: 'Thème système' },
} as const

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { icon: Icon, label } = THEMES[theme]
  const next = CYCLE[(CYCLE.indexOf(theme) + 1) % CYCLE.length]

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(next)}
            aria-label={`${label}. Basculer vers : ${THEMES[next].label}`}
          >
            <Icon />
          </Button>
        }
      />
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  )
}

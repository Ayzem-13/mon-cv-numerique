import { useMemo, useState } from 'react'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavBody,
  NavItems,
} from '@/components/ui/resizable-navbar'
import { navItems } from '@/config/navigation'
import { profile } from '@/config/profile'
import { useActiveSection } from '@/hooks'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

const SOCIALS = [
  { label: 'GitHub', href: `https://github.com/${profile.githubUsername}`, Icon: LuGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axel-roubaud/', Icon: LuLinkedin },
  { label: 'Email', href: 'mailto:roubaudaxel2@gmail.com', Icon: LuMail },
]

function Wordmark() {
  return (
    <a
      href="#accueil"
      className="relative z-20 px-2 py-1 text-sm font-semibold tracking-tight transition-colors hover:text-brand-text"
    >
      {profile.firstName} {profile.lastName}
    </a>
  )
}

function Actions() {
  return (
    <div className="relative z-20 flex items-center gap-1">
      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Icon className="size-4" />
        </a>
      ))}
      <ThemeToggle />
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const ids = useMemo(() => navItems.map((item) => item.id), [])
  const activeId = useActiveSection(ids, 'accueil')

  const items = navItems.map((item) => ({ name: item.label, link: `#${item.id}` }))

  return (
    <Navbar>
      <NavBody>
        <Wordmark />
        <NavItems items={items} />
        <Actions />
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Wordmark />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNavToggle isOpen={open} onClick={() => setOpen(!open)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={open} onClose={() => setOpen(false)}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              aria-current={item.id === activeId ? 'page' : undefined}
              className={cn(
                'flex w-full items-baseline gap-3 py-1 transition-colors',
                item.id === activeId ? 'font-semibold text-brand-text' : 'text-foreground'
              )}
            >
              <span className="font-mono text-xs text-muted-foreground">{item.index}</span>
              {item.label}
            </a>
          ))}

          <div className="flex items-center gap-2 pt-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border text-foreground transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

import { LuArrowUp } from 'react-icons/lu'
import { profile } from '@/config/profile'
import { currentYear } from '@/lib/format'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-5 py-8 text-xs text-muted-foreground sm:px-8">
        <span>
          © {currentYear()} {profile.firstName} {profile.lastName}
        </span>
        <span className="text-border">│</span>
        <span>{profile.city}, France</span>
        <span className="text-border">│</span>
        <span>React · TypeScript · Tailwind</span>

        <a
          href="#accueil"
          className="ml-auto inline-flex items-center gap-1.5 transition-colors hover:text-brand-text"
        >
          Remonter
          <LuArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  )
}

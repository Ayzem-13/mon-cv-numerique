import { LuMenu, LuCopyright } from "react-icons/lu"
import { navItems } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm shadow-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group uppercase tracking-wide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                    <LuMenu />
                  </Button>
                }
              />
              <SheetContent side="right">
                <SheetTitle className="sr-only">Navigation</SheetTitle>

                <div className="flex flex-col gap-6 px-6 py-8">
                  {navItems.map((link) => (
                    <SheetClose
                      key={link.label}
                      render={
                        <a
                          href={link.href}
                          className="block group relative py-4 px-6 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover:bg-accent rounded-lg w-full text-left"
                        >
                          <div className="flex items-center justify-between">
                            <span className="uppercase tracking-wide text-sm">
                              {link.label}
                            </span>
                            <div className="w-4 h-px bg-border group-hover:w-8 group-hover:bg-foreground transition-all duration-300"></div>
                          </div>
                        </a>
                      }
                    />
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-4 px-6 pb-6">
                  <Separator />
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    <LuCopyright className="inline mb-0.5" /> 2025 Axel Roubaud. Tous droits réservés.
                  </span>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

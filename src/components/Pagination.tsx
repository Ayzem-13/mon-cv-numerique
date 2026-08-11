import { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';
import { sections } from '../data/mockData';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Pagination() {
    const [activeSection, setActiveSection] = useState('welcome');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el && scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
            <div className="flex flex-col gap-2 bg-card rounded-lg p-2 shadow-lg border">
                {sections.map((section) => (
                    <Tooltip key={section.id}>
                        <TooltipTrigger
                            render={
                                <Button
                                    variant={activeSection === section.id ? 'brand' : 'ghost'}
                                    size="icon-lg"
                                    onClick={() => scrollToSection(section.id)}
                                    aria-label={section.name}
                                    aria-current={activeSection === section.id ? 'true' : undefined}
                                    className="font-bold"
                                >
                                    {section.label}
                                </Button>
                            }
                        />
                        <TooltipContent side="left">{section.name}</TooltipContent>
                    </Tooltip>
                ))}
            </div>

            <Tooltip>
                <TooltipTrigger
                    render={
                        <Button
                            variant="secondary"
                            onClick={scrollToTop}
                            aria-label="Retour en haut"
                            className="font-bold text-xs shadow-lg group"
                        >
                            <LuArrowUp
                                data-icon="inline-start"
                                className="group-hover:scale-110 transition-transform duration-300"
                            />
                            TOP
                        </Button>
                    }
                />
                <TooltipContent side="left">Retour en haut</TooltipContent>
            </Tooltip>
        </div>
    );
}

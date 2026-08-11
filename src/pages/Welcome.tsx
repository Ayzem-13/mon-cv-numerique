import { LuDownload , LuMail ,LuArrowDown  } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function Welcome() {
    return (
    <section id="welcome" className="min-h-screen bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_var(--foreground)_3px,_transparent_0)] [background-size:24px_24px] pointer-events-none"></div>

            <div className="absolute top-0 right-0 w-2/5 sm:w-1/2 md:w-1/2 h-full drop-shadow-xl/50 group">
                <div className="absolute inset-0 size-full bg-gradient-to-bl from-background via-muted/60 to-muted transform skew-x-1 sm:skew-x-3 md:skew-x-6 lg:skew-x-12 origin-top-right border-l-2">
                </div>
            </div>

        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-screen
                        px-6 sm:px-8 md:px-12 lg:px-20
                        py-8 sm:py-16 md:py-20">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-8 group/badge cursor-default">
                    <div className="size-3 bg-muted rounded-full border-2 border-brand shadow-md flex items-center justify-center">
                        <div className="size-2 bg-brand rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest group-hover/badge:text-brand-text transition-colors duration-300">
                        Portfolio 2025
                    </span>
                    <div className="w-8 h-px bg-gradient-to-r from-brand/50 to-transparent ml-2"></div>
                </div>

                <div className="relative mb-8 sm:mb-10 group/title">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight sm:leading-none tracking-tight">
                        <span className="block text-foreground transform transition-all duration-500 group-hover/title:translate-x-2">
                            Axel
                        </span>
                        <span className="block text-brand drop-shadow-xl/50 text-stroke-black transform transition-all duration-500 group-hover/title:translate-x-4 group-hover/title:scale-105">
                            Roubaud
                        </span>
                    </h1>
                </div>

                <div className="mb-8 sm:mb-10 group/subtitle">
                    <p className="text-lg sm:text-xl md:text-2xl text-foreground font-bold max-w-xl leading-relaxed transition-colors duration-300">
                        Étudiant{' '}
                        <span className="neon-text font-black relative">
                            Développeur
                        </span>
                        <br />
                        <span className="text-foreground text-base sm:text-lg font-semibold drop-shadow">Front End &amp; Back End</span>
                    </p>
                </div>

                <div className="mb-10 sm:mb-14 w-full">
                    <div className="text-base sm:text-lg text-foreground leading-relaxed border-l-4 drop-shadow border-brand bg-card/70 backdrop-blur-sm py-6 px-6 rounded-r-md max-w-full">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand blur-sm rounded-lg scale-105 opacity-0 group-hover/alert:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                                <div className="shrink-0 relative">
                                    <div className="size-4 bg-brand rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 size-4 bg-brand rounded-full animate-ping opacity-20"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base sm:text-lg font-bold text-brand-text mb-2 flex flex-col sm:flex-row sm:items-center gap-2">
                                        <span>À la recherche d'une alternance</span>
                                        <span className="inline-block size-4 bg-brand/20 rounded animate-pulse"></span>
                                    </p>
                                    <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                                        Développement web • Disponible dès septembre 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row gap-6 md:gap-4 items-stretch md:items-start w-full md:w-auto">
                <Button
                    variant="brand"
                    size="lg"
                    render={
                        <a
                            href="/CV_Axel_Roubaud.pdf"
                            download="CV_Axel_Roubaud.pdf"
                            type="application/pdf"
                        />
                    }
                    className="h-auto min-h-14 w-full md:w-auto rounded-none px-8 py-5 text-base sm:text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                    <LuDownload data-icon="inline-start" />
                    Télécharger CV
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    render={<a href="#contact" />}
                    className="h-auto min-h-14 w-full md:w-auto rounded-none border-2 px-8 py-5 text-base sm:text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                >
                    <LuMail data-icon="inline-start" />
                    Me contacter
                </Button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <span className="text-xs uppercase tracking-widest rotate-90 origin-center mb-4">Scroll</span>
                    <LuArrowDown />
                </div>
            </div>
        </div>

    </section>
    )
}

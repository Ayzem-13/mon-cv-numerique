import { LuDownload , LuMail ,LuArrowDown  } from "react-icons/lu";

export default function Welcome() {

    return (
    <section id="welcome" className="min-h-screen bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 relative overflow-hidden">
        <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_theme(colors.neutral.800)_3px,_transparent_0)] [background-size:24px_24px] pointer-events-none"></div>
            
            {/* Principal diagonal */}
            <div className="absolute top-0 right-0 w-2/5 sm:w-1/2 md:w-1/2 h-full drop-shadow-xl/50 group">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-bl from-neutral-50 via-neutral-100 to-neutral-200 transform skew-x-1 sm:skew-x-3 md:skew-x-6 lg:skew-x-12 origin-top-right border-l-2">
                </div>
            </div>
            
        </div>

    {/* Main content*/}
        <div className="relative z-10 flex flex-col justify-center min-h-screen 
                        px-6 sm:px-8 md:px-12 lg:px-20
                        py-8 sm:py-16 md:py-20">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 mb-2 sm:mb-8 group/badge cursor-default">
                    <div className="w-3 h-3 bg-neutral-100 rounded-full border-2 border-green-zzz shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-zzz rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-sm font-semibold text-neutral-700 uppercase tracking-widest group-hover/badge:text-green-zzz transition-colors duration-300">
                        Portfolio 2025
                    </span>
                    <div className="w-8 h-[1px] bg-gradient-to-r from-green-zzz/50 to-transparent ml-2"></div>
                </div>
                
                <div className="relative mb-8 sm:mb-10 group/title">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight sm:leading-none tracking-tight">
                        <span className="block text-neutral-900 transform transition-all duration-500 group-hover/title:translate-x-2 group-hover/title:text-neutral-800">
                            Axel
                        </span> 
                        <span className="block text-green-zzz drop-shadow-xl/50 text-stroke-black transform transition-all duration-500 group-hover/title:translate-x-4 group-hover/title:scale-105">
                            Roubaud
                        </span>
                    </h1>
                </div>

                {/* subtitle */}
                <div className="mb-8 sm:mb-10 group/subtitle">
                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 font-bold max-w-xl leading-relaxed transition-colors duration-300">
                        Étudiant{' '}
                        <span className="neon-text font-black relative">
                            Développeur
                        </span>
                        <br />
                        <span className="text-neutral-900 text-base sm:text-lg font-semibold drop-shadow">Front End & Back End</span>
                    </p>
                </div>

                {/* Description*/}
                <div className="mb-10 sm:mb-14 w-full">
                    <div className="text-base sm:text-lg text-neutral-900 leading-relaxed border-l-4 drop-shadow border-green-zzz bg-white/70 backdrop-blur-sm py-6 px-6 rounded-r-md max-w-full">
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-zzz blur-sm rounded-lg transform scale-105 opacity-0 group-hover/alert:opacity-100 transition-opacity duration-300"></div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                                <div className="flex-shrink-0 relative">
                                    <div className="w-4 h-4 bg-green-zzz rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-4 h-4 bg-green-zzz rounded-full animate-ping opacity-20"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-base sm:text-lg font-bold text-green-zzz-readable mb-2 flex flex-col sm:flex-row sm:items-center gap-2">
                                        <span>À la recherche d'une alternance</span>
                                        <span className="inline-block w-4 h-4 bg-green-zzz/20 rounded animate-pulse"></span>
                                    </p>
                                    <p className="text-sm sm:text-base text-neutral-700 font-semibold">
                                        Développement web • Disponible dès septembre 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-col md:flex-row gap-6 md:gap-4 items-stretch md:items-start w-full md:w-auto">
                <a href="/CV_Axel_Roubaud.pdf" download="CV_Axel_Roubaud.pdf" type="application/pdf" className="block group/btn">
                    <button className="w-full md:w-auto bg-green-zzz text-neutral-900 px-8 py-5 font-bold uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-green-zzz hover:bg-transparent hover:text-green-zzz relative overflow-hidden group min-h-[56px]">
                        <span className="relative flex items-center justify-center gap-3 text-base sm:text-lg">
                            <LuDownload className="text-xl" /> 
                            <span>Télécharger CV</span>
                        </span>
                    </button>
                </a>
                
                <a href="#contact" className="block group/contact">
                    <button className="w-full md:w-auto border-2 border-neutral-900 text-neutral-900 px-8 py-5 font-bold uppercase tracking-wider transform transition-all duration-300 hover:bg-neutral-900 hover:text-white relative overflow-hidden group min-h-[56px]">
                        <span className="relative flex items-center justify-center gap-3 text-base sm:text-lg">
                            <LuMail className="text-xl" /> 
                            <span>Me contacter</span>
                        </span>
                    </button>
                </a>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
                <div className="flex flex-col items-center gap-2 text-neutral-600">
                    <span className="text-xs uppercase tracking-widest rotate-90 origin-center mb-4">Scroll</span>
                    <LuArrowDown />
                </div>
            </div>
        </div>
    
    </section>
    )
}
import { Projets } from "../data/mockData";
import { LuExternalLink, LuGithub, LuCalendar, LuTag, LuEye } from "react-icons/lu";
import MotionOnScroll from "../components/MotionOnScroll";

export default function Project() {
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 relative overflow-hidden">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-green-zzz rounded-full shadow-md animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                            Portfolio 
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        Mes Projets
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-zzz to-transparent mx-auto rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projets.map((project, index) => (
                        <MotionOnScroll key={project.id} delay={index * 0.06}>
                        <div 
                            className="group bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:border-green-zzz/50 transform hover:-translate-y-3 hover:bg-white/90 dark:hover:bg-neutral-900/90"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-600">
                                {project.image ? (
                                    <>
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-6xl text-neutral-400 dark:text-neutral-500 opacity-50">
                                            💻
                                        </div>
                                    </div>
                                )}
                                
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full backdrop-blur-sm ${
                                        project.status === 'Terminé' 
                                            ? 'bg-green-zzz text-neutral-900' 
                                            : 'bg-amber-400 text-neutral-900'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 space-y-4">
                                {/* Title */}
                                <div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-green-zzz transition-colors duration-300 mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-medium text-green-zzz dark:text-green-400">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Date */}
                                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                    <LuCalendar size={12} />
                                    <span>{project.date}</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 rounded-full border border-neutral-200/50 dark:border-neutral-600/50"
                                        >
                                            <LuTag size={10} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons - Empilés verticalement */}
                                <div className="pt-4 space-y-3">
                                    {project.links.demo && project.links.demo !== '#' && (
                                        <a 
                                            href={project.links.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-green-zzz text-neutral-900 font-semibold text-sm rounded-lg hover:bg-green-zzz/80 transition-all duration-300 hover:scale-105"
                                        >
                                            <LuEye size={14} />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                    
                                    {project.links.github && project.links.github !== '#' && (
                                        <a 
                                            href={project.links.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-sm rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all duration-300 hover:scale-105"
                                        >
                                            <LuGithub size={14} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    
                                    {project.links.external && project.links.external !== '#' && (
                                        <a 
                                            href={project.links.external} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-semibold text-sm rounded-lg hover:border-green-zzz hover:text-green-zzz hover:bg-green-zzz/10 transition-all duration-300 hover:scale-105"
                                        >
                                            <LuExternalLink size={14} />
                                            <span>Voir</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        </MotionOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}
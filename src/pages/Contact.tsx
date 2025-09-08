import { LuLinkedin, LuExternalLink } from 'react-icons/lu';
import { ContactInfo } from "../data/mockData";
import MotionOnScroll from '../components/MotionOnScroll';



export default function Contact() {

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-neutral-100  dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 ">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-green-zzz rounded-full shadow-md animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest">
                            Contactez-moi
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        Contact
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-zzz to-transparent mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Description */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                                Recherche d'alternance
                            </h3>
                            <div className="space-y-4">
                                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    Je suis actuellement à la recherche d'une <strong>alternance en développement web </strong> 
                                    avec un rythme de 1/3 école, 2/3 entreprise.
                                </p>
                                <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                    N'hésitez pas à me contacter pour discuter d'opportunités professionnelles, 
                                    de collaborations ou simplement pour échanger sur nos projets communs.
                                </p>
                            </div>
                        </div>

                        {/* Call to action */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="/CV_Axel_Roubaud.pdf" 
                                download="CV_Axel_Roubaud.pdf"
                                className="inline-block group/btn"
                            >
                                <button className="bg-green-zzz text-neutral-900 px-8 py-4 font-bold uppercase tracking-wider transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-green-zzz hover:bg-transparent hover:text-green-zzz relative overflow-hidden">
                                    Télécharger mon CV
                                    <LuExternalLink className="inline-block ml-2 mb-1" size={16} />
                                </button>
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/axel-roubaud-8504252b0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block group/linkedin"
                            >
                                <button className="border-2 border-neutral-900 dark:border-white text-neutral-900 dark:text-white px-8 py-4 font-bold uppercase tracking-wider transform transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 relative overflow-hidden">
                                    Mon LinkedIn
                                    <LuLinkedin className="inline-block ml-2 mb-1" size={16} />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Contact Cards */}
                    <div className="grid gap-6">
                        {ContactInfo.map((contact, index) => {
                            const IconComponent = contact.icon;
                            return (
                                <MotionOnScroll key={contact.label} delay={index * 0.04}>
                                <div 
                                    className="group bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-zzz/50 transform hover:-translate-y-2"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-green-zzz/10 dark:bg-green-zzz/20 rounded-xl flex items-center justify-center group-hover:bg-green-zzz/20 dark:group-hover:bg-green-zzz/30 transition-colors duration-300">
                                                <IconComponent className="w-6 h-6 text-green-zzz" />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                                                    {contact.label}
                                                </h4>
                                                {contact.href && (
                                                    <LuExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-green-zzz transition-colors duration-300" />
                                                )}
                                            </div>
                                            <div className="mb-2">
                                                {contact.href ? (
                                                    <a 
                                                        href={contact.href}
                                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                        className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-green-zzz transition-colors duration-300 break-all"
                                                    >
                                                        {contact.value}
                                                    </a>
                                                ) : (
                                                    <span className="text-lg font-bold text-neutral-900 dark:text-white">
                                                        {contact.value}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {contact.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </MotionOnScroll>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom section - Additional info */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-lg">
                        <div className="w-2 h-2 bg-green-zzz rounded-full animate-pulse"></div>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">
                            Disponible pour une alternance
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
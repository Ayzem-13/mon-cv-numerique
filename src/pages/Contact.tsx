import { LuLinkedin, LuExternalLink } from 'react-icons/lu';
import { ContactInfo } from "../data/mockData";
import MotionOnScroll from '../components/MotionOnScroll';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-muted via-background to-muted">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="size-2 bg-brand rounded-full shadow-md animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                            Contactez-moi
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Contact
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                Recherche d'alternance
                            </h3>
                            <div className="flex flex-col gap-4">
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Je suis actuellement à la recherche d'une <strong>alternance en développement web </strong>
                                    avec un rythme de 1/3 école, 2/3 entreprise.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    N'hésitez pas à me contacter pour discuter d'opportunités professionnelles,
                                    de collaborations ou simplement pour échanger sur nos projets communs.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="brand"
                                size="lg"
                                render={
                                    <a
                                        href="/CV_Axel_Roubaud.pdf"
                                        download="CV_Axel_Roubaud.pdf"
                                    />
                                }
                                className="h-auto rounded-none px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                            >
                                Télécharger mon CV
                                <LuExternalLink data-icon="inline-end" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                render={
                                    <a
                                        href="https://www.linkedin.com/in/axel-roubaud-8504252b0/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    />
                                }
                                className="h-auto rounded-none border-2 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                            >
                                Mon LinkedIn
                                <LuLinkedin data-icon="inline-end" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {ContactInfo.map((contact, index) => {
                            const IconComponent = contact.icon;
                            return (
                                <MotionOnScroll key={contact.label} delay={index * 0.04}>
                                <Card className="group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:ring-brand/50 hover:-translate-y-2">
                                    <CardContent className="flex items-start gap-4">
                                        <div className="size-12 shrink-0 bg-brand/10 rounded-xl flex items-center justify-center group-hover:bg-brand/20 transition-colors duration-300">
                                            <IconComponent className="size-6 text-brand-text" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                                    {contact.label}
                                                </h4>
                                                {contact.href && (
                                                    <LuExternalLink className="size-4 text-muted-foreground group-hover:text-brand-text transition-colors duration-300" />
                                                )}
                                            </div>
                                            <div className="mb-2">
                                                {contact.href ? (
                                                    <a
                                                        href={contact.href}
                                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                        className="text-lg font-bold text-foreground group-hover:text-brand-text transition-colors duration-300 break-all"
                                                    >
                                                        {contact.value}
                                                    </a>
                                                ) : (
                                                    <span className="text-lg font-bold text-foreground">
                                                        {contact.value}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                {contact.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                                </MotionOnScroll>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border shadow-lg">
                        <div className="size-2 bg-brand rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">
                            Disponible pour une alternance
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

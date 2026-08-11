import { useState } from 'react';
import { skillsData } from '../data/mockData';
import MotionOnScroll from '../components/MotionOnScroll';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AboutMe() {
    const [activeSkillCategory, setActiveSkillCategory] = useState<string>('Frontend');
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 group/badge">
                        <div className="size-2 bg-brand rounded-full shadow-md animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                            Découvrir
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        À propos de moi
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col gap-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex flex-col gap-4">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                J'ai <span className="font-semibold text-brand-text">20 ans</span> et j'ai obtenu un
                                <span className="font-semibold text-foreground"> BUT informatique parcours création d'application</span> à
                                l'IUT d'Aix-en-Provence.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Passionné par l'informatique depuis le collège, j'ai voulu continuer ce cursus pour
                                découvrir de nouvelles technologies et créer de nouvelles choses comme des
                                <span className="font-semibold text-foreground"> applications et des sites web</span>.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                J'ai intégré un <span className="font-semibold text-foreground">Mastère Expert en Architecture et Développement Logiciel</span> et
                                je suis actuellement à la recherche d'une <span className="font-semibold text-brand-text">alternance</span> avec
                                1/3 du temps à l'école, 2/3 du temps en entreprise, avec des périodes allant de 6 à 24 semaines
                                sans interruption en entreprise.
                            </p>
                        </div>

                        <div className="pt-8 flex justify-center">
                            <Badge
                                variant="outline"
                                className="h-auto gap-3 px-6 py-3 text-sm font-medium group hover:border-brand/50 transition-all duration-300"
                            >
                                <span className="size-3 bg-brand rounded-full animate-pulse"></span>
                                Ouvert aux opportunités d'alternance
                            </Badge>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="relative">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-foreground mb-4">
                                    Formations
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full"></div>
                            </div>

                            <div className="relative flex flex-col gap-8">
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-border to-transparent"></div>

                                <MotionOnScroll delay={0.02}>
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10">
                                        <div className="size-12 bg-brand rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <div className="size-3 bg-brand-foreground rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <Card className="group-hover:shadow-md transition-shadow duration-300">
                                            <CardContent className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="brand">En cours</Badge>
                                                    <span className="text-sm text-muted-foreground">2025</span>
                                                </div>
                                                <h4 className="text-lg font-semibold text-foreground">
                                                    Mastère Expert en Architecture et Développement Logiciel
                                                </h4>
                                                <p className="text-xs text-muted-foreground">
                                                    École l'Esimed Technopôle de Château Gombert
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                </MotionOnScroll>

                                <MotionOnScroll delay={0.04}>
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10">
                                        <div className="size-12 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-brand/30">
                                            <div className="size-2 bg-brand rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 pb-8">
                                        <Card className="group-hover:shadow-md transition-shadow duration-300">
                                            <CardContent className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">Obtenu</Badge>
                                                    <span className="text-sm text-muted-foreground">2022-2025</span>
                                                </div>
                                                <h4 className="text-lg font-semibold text-foreground">
                                                    BUT Informatique
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Parcours Réalisations d'applications
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    IUT d'Aix-en-Provence (13)
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                </MotionOnScroll>

                                <MotionOnScroll delay={0.06}>
                                <div className="relative flex items-start gap-6 group">
                                    <div className="relative z-10">
                                        <div className="size-12 bg-muted rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <div className="size-2 bg-muted-foreground rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <Card className="group-hover:shadow-md transition-shadow duration-300">
                                            <CardContent className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="secondary">Obtenu</Badge>
                                                    <span className="text-sm text-muted-foreground">2022</span>
                                                </div>
                                                <h4 className="text-lg font-semibold text-foreground">
                                                    Baccalauréat STI2D
                                                </h4>
                                                <p className="text-xs text-muted-foreground">
                                                    Lycée polyvalent Antonin Artaud - Marseille (13)
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                                </MotionOnScroll>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-foreground mb-4">
                                    Expérience Professionnelle
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full"></div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <MotionOnScroll delay={0.02}>
                                <Card className="group hover:shadow-lg transition-all duration-300">
                                    <CardContent className="flex flex-col gap-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="size-3 bg-brand rounded-full animate-pulse"></div>
                                                <Badge variant="brand">Stage récent</Badge>
                                            </div>
                                            <span className="text-sm text-muted-foreground font-medium">
                                                02/2025 - 06/2025
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-foreground">
                                            Stage chez PostLab
                                        </h4>

                                        <p className="text-muted-foreground leading-relaxed">
                                            Développement d'une application web en <span className="font-semibold text-foreground">Symfony</span> pour
                                            former des formateurs
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {['Symfony', 'PHP', 'Bootstrap', 'Formation'].map((tag) => (
                                                <Badge key={tag} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                                </MotionOnScroll>

                                <MotionOnScroll delay={0.04}>
                                <Card className="group hover:shadow-lg transition-all duration-300">
                                    <CardContent className="flex flex-col gap-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="size-3 bg-muted-foreground rounded-full"></div>
                                                <Badge variant="secondary">Terminé</Badge>
                                            </div>
                                            <span className="text-sm text-muted-foreground font-medium">
                                                04/2024 - 06/2024
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-foreground">
                                            Stage chez Rubambelle
                                        </h4>

                                        <p className="text-muted-foreground leading-relaxed">
                                            Création d'une boutique en ligne en utilisant <span className="font-semibold text-foreground">WordPress</span> et
                                            <span className="font-semibold text-foreground"> PHP/JS</span>
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {['WordPress', 'PHP', 'JavaScript', 'E-commerce'].map((tag) => (
                                                <Badge key={tag} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                                </MotionOnScroll>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto w-full">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Technologies &amp; Outils
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full"></div>
                            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                                Les technologies que j'utilise pour créer des expériences numériques exceptionnelles
                            </p>
                        </div>

                        <Tabs value={activeSkillCategory} onValueChange={setActiveSkillCategory}>
                            <TabsList className="mx-auto mb-8">
                                {skillsData.map((category) => (
                                    <TabsTrigger key={category.title} value={category.title}>
                                        {category.title}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {skillsData.map((category) => (
                                <TabsContent key={category.title} value={category.title}>
                                    <Card className="max-w-4xl mx-auto rounded-2xl p-8 shadow-xl">
                                        <CardContent className="px-0">
                                            <div className="text-center mb-8">
                                                <div className="size-20 bg-gradient-to-br from-brand/20 to-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                    <div className="size-3 bg-brand rounded-full shadow-lg animate-pulse"></div>
                                                </div>
                                                <h4 className="text-3xl font-bold text-foreground mb-2">
                                                    {category.title}
                                                </h4>
                                                <div className="w-16 h-px bg-brand mx-auto mb-4"></div>
                                                <p className="text-muted-foreground text-lg">
                                                    {category.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                                {category.technologies.map((tech, index) => {
                                                    const IconComponent = tech.icon;
                                                    return (
                                                        <MotionOnScroll key={tech.name} delay={index * 0.02}>
                                                            <div className="group/tech flex flex-col items-center gap-4 rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:scale-105 hover:border-brand/50 hover:bg-brand/10 hover:shadow-xl">
                                                                <IconComponent className="size-8 text-muted-foreground transition-transform duration-300 group-hover/tech:scale-110 group-hover/tech:text-brand-text" />
                                                                <span className="text-sm font-semibold text-muted-foreground group-hover/tech:text-brand-text">
                                                                    {tech.name}
                                                                </span>
                                                            </div>
                                                        </MotionOnScroll>
                                                    );
                                                })}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

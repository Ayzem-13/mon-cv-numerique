import { Projets } from "../data/mockData";
import { LuExternalLink, LuGithub, LuCalendar, LuTag, LuEye } from "react-icons/lu";
import MotionOnScroll from "../components/MotionOnScroll";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Project() {
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/40 to-background relative overflow-hidden">

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="size-2 bg-brand rounded-full shadow-md animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Mes Projets
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Projets.map((project, index) => (
                        <MotionOnScroll key={project.id} delay={index * 0.06}>
                        <Card className="group h-full pt-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:ring-brand/50 hover:-translate-y-3">
                            <div className="relative overflow-hidden h-48 bg-muted">
                                {project.image ? (
                                    <>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </>
                                ) : (
                                    <div className="size-full flex items-center justify-center">
                                        <div className="text-6xl text-muted-foreground opacity-50">
                                            💻
                                        </div>
                                    </div>
                                )}

                                <div className="absolute top-4 right-4">
                                    <Badge
                                        variant={project.status === 'Terminé' ? 'brand' : 'secondary'}
                                        className="h-auto px-3 py-1 font-bold uppercase tracking-wide backdrop-blur-sm"
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl group-hover:text-brand-text transition-colors duration-300">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="font-medium text-brand-text">
                                    {project.subtitle}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex flex-col gap-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <LuCalendar />
                                    <span>{project.date}</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline" className="h-auto gap-1 px-2 py-1">
                                            <LuTag />
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex-col gap-3 bg-transparent border-t-0">
                                {project.links.demo && project.links.demo !== '#' && (
                                    <Button
                                        variant="brand"
                                        render={
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />
                                        }
                                        className="h-auto w-full px-4 py-3 font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <LuEye data-icon="inline-start" />
                                        Demo
                                    </Button>
                                )}

                                {project.links.github && project.links.github !== '#' && (
                                    <Button
                                        render={
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />
                                        }
                                        className="h-auto w-full px-4 py-3 font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <LuGithub data-icon="inline-start" />
                                        Code
                                    </Button>
                                )}

                                {project.links.external && project.links.external !== '#' && (
                                    <Button
                                        variant="brand-outline"
                                        render={
                                            <a
                                                href={project.links.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            />
                                        }
                                        className="h-auto w-full px-4 py-3 font-semibold transition-all duration-300 hover:scale-105"
                                    >
                                        <LuExternalLink data-icon="inline-start" />
                                        Voir
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                        </MotionOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}

import { LuGithub, LuLinkedin, LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,
  SiPhp, SiSymfony, SiMysql, SiPython,
  SiGit, SiUnity, SiFigma, SiWordpress, SiVite, SiBootstrap,
  SiNextdotjs,
  SiSlack,
  SiTrello,
  SiGithub
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import type { NavItem, Section, SkillCategory } from '../types';

// Route navigation
export const navItems: NavItem[] = [
  { label: 'Accueil', href: '#welcome' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const sections: Section[] = [
  { id: 'welcome', label: '1', name: 'Accueil' },
  { id: 'about', label: '2', name: 'À propos' },
  { id: 'projects', label: '3', name: 'Projets' },
  { id: 'contact', label: '4', name: 'Contact' },
];

export const Projets = [
  {
    id: 1,
    title: "crousgame",
    subtitle: "Projet universitaire unity",
    description: "C'est un jeux 3D ou il faut recuperer des cookies et arrivé au point final pour terminé le jeux.",
    image: "",
    category: "Jeu vidéo",
    date: "08/10/2024",
    status: "Terminé",
    tags: ["Unity", "C#"],
    links: {
      demo: "#",
      github: "https://github.com/Noobos100/crousgame",
      external: "#"
    }
  },
  {
    id: 2,
    title: "Site Web Ananta France",
    subtitle: "C'est un projet Fan basé sur le jeux Ananta",
    description: "Le but de ce site est de relayé l'actualité du jeux pour la communauté francophone faite en collaboration avec 2 personnes et voir plus encore une fois que le jeux sera sortie.",
    image: "https://media.discordapp.net/attachments/1227164039789150218/1414521868580421773/image.png?ex=68bfdfa6&is=68be8e26&hm=c5f37b9543656abb22fb4d240bf068a35c59794eb8a9259d9f5b488eef78768e&=&format=webp&quality=lossless",
    category: ["Jeu vidéo", "Site Web"],
    date: "01/09/2025",
    status: "En cours",
    tags: ["Figma", "NextJS", "React", "TypeScript", "TailwindCSS"],
    links: {
      demo: "#",
      github: "#",
      external: "https://www.figma.com/design/DE8nxEjDuIDbGto0znV5xG/Ananta-France?node-id=0-1&t=r5V34VbL9bkzMWMC-1"
    }
  },
  {
    id: 3,
    title: "Portfolio",
    subtitle: "Mon portfolio personnel",
    description: "Un site vitrine présentant mes projets et compétences.",
    image: "https://media.discordapp.net/attachments/1227164039789150218/1414258449440833628/image.png?ex=68beea51&is=68bd98d1&hm=0a43293094f7159febc60ae54397ea6a9b4c168516e43308397ebb3a5b5b0f09&=&format=webp&quality=lossless&width=1872&height=826",
    category: ["Site Web"],
    date: "01/09/2025",
    status: "En cours",
    tags: ["React", "TypeScript", "TailwindCSS"],
    links: {
      demo: "https://axel-roubaud-cv.netlify.app/",
      github: "https://github.com/ROUBAUD-Axel-2225073b/mon-cv-numerique",
      external: "#"
    }
  },
];

export const ContactInfo = [
  {
    icon: LuPhone,
    label: "Téléphone",
    value: "—",
    href: "",
    description: "Disponible pour des appels ou SMS"
  },
  {
  icon: LuMail,
  label: "Email",
  value: "roubaudaxel2@gmail.com",
  href: "mailto:roubaudaxel2@gmail.com",
  description: "Contactez-moi directement"
},
{
  icon: LuMapPin,
  label: "Localisation",
  value: "Marseille, France",
  href: null,
  description: "Disponible"
},
{
  icon: LuLinkedin,
  label: "LinkedIn",
  value: "Axel Roubaud",
  href: "https://www.linkedin.com/in/axel-roubaud-8504252b0/",
  description: "Profil professionnel"
},
{
  icon: LuGithub,
  label: "GitHub",
  value: "ROUBAUD-Axel-2225073b",
  href: "https://github.com/ROUBAUD-Axel-2225073b",
  description: "Mes projets et contributions"
}
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Interface utilisateur & expérience",
    technologies: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "ReactNative", icon: TbBrandReactNative },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ]
  },
  {
    title: "Backend",
    description: "Serveur & base de données",
    technologies: [
      { name: "PHP", icon: SiPhp },
      { name: "Symfony", icon: SiSymfony },
      { name: "MySQL", icon: SiMysql },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython }
    ]
  },
  {
    title: "Outils",
    description: "Développement , design & Collaboration",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "Github", icon: SiGithub },
      { name: "Unity", icon: SiUnity },
      { name: "Figma", icon: SiFigma },
      { name: "WordPress", icon: SiWordpress },
      { name: "Vite", icon: SiVite },
      { name: "Slack", icon: SiSlack },
      { name: "Trello", icon: SiTrello },
    ]
  }
];  
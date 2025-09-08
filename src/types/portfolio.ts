export interface NavItem {
  label: string;
  href: string;
}

export interface Section {
  id: string;
  label: string;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
  icon: string[];
  imageUrl: string;
  projectUrl: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  description: string;
}

export interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  description: string;
  technologies: Technology[];
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  live?: string;
  paper?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: Array<{
    text: string;
    keywords?: string[];
  }>;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  duration: string;
  description?: string;
  gpa?: string;
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

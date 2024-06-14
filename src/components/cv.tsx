

interface Experience {
    date: string;
    label: string;
    title: string;
    description: string | string[];
    image: string | string[];
  }
  
  interface Education {
    date: string;
    label: string;
    title: string;
    description: string | string[];
  }
  
  interface Project {
    date: string;
    label: string;
    title: string;
    description: string | string[];
  }
  
  interface Skill {
    description: string;
  }
  
  interface Feature {
    date: string;
    label: string;
    title: string;
    description: string | string[];
  }
  
  interface Contact {
    phone: string;
    email: string;
    important_links: {
      [key: string]: string;
    };
  }
  
  interface CVData {
    EXPERIENCE: Experience[];
    EDUCATION: Education[];
    PROJECTS: Project[];
    SKILLS: Skill[];
    FEATURES: Feature[];
    CONTACT: Contact[];
  }

//export interfaces
export type { Experience, Education, Project, Skill, Feature, Contact, CVData };



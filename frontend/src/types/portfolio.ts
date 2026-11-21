export type PortfolioMode = 'gateway' | 'archive';

export type SectionIndex = 0 | 1 | 2 | 3;

export interface ArtifactItem {
  id: string;
  title: string;
  category: string;
  highlights: string[];
  techStack: string[];
  otherUrl?: string;
  githubUrl?: string;
}

export interface JourneyItem {
  id: string;
  role: string;
  company: string;
  period: string;
  tag?: string;
  achievements: string[];
  techStack: string[];
}

export interface PortfolioData {
  identity: {
    name: string;
    role: string;
    photoUrl: string;
    bio: string;
    statusBadge: string;
    semester: string;
    major: string;
    university: string;
    gpa: string;
    seeking: string;
    location: string;
  };
  artifacts: ArtifactItem[];
  journey: JourneyItem[];
  alliance: {
    headline: string;
    subheadline: string;
    links: {
      whatsapp: string;
      github: string;
      email: string;
      linkedin: string;
    };
    cv: {
      dataScience: {
        filename: string;
        url: string;
      };
      backend: {
        filename: string;
        url: string;
      };
    };
  };
}

export interface Project {
	id: string;
	domain: string;
	title: string;
	image: string;
	shortDescription: string;
	problem: string;
	solution: string;
	technologies: string[];
	personalContribution: string[];
	metricsTakeaway: string;
	githubUrl?: string;
	colabUrl?: string;
}

export interface SkillCategory {
	title: string;
	skills: string[];
}

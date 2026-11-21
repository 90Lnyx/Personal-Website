export interface EducationEntry {
	institution: string;
	program: string;
	semester: string;
	period: string;
	location: string;
	description: string;
	coursework: string[];
}

export interface ExperienceEntry {
	id: string;
	role: string;
	organization: string;
	period: string;
	location: string;
	responsibilities: string[];
}

export interface ContactChannel {
	id: string;
	label: string;
	displayValue: string;
	url: string;
	iconName: string;
}

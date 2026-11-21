import type { EducationEntry, ExperienceEntry, ContactChannel } from '../types/journey';

export const educationData: EducationEntry = {
	institution: 'Universitas Multimedia Nusantara',
	program: 'Bachelor of Informatics',
	semester: 'Semester 5',
	period: 'Aug 2024 – Aug 2028 (Expected)',
	location: 'Gading Serpong, Tangerang Selatan, Indonesia',
	description: 'lorem ipsum',
	coursework: ['lorem ipsum'],
};

export const experienceData: ExperienceEntry[] = [
	{
		id: 'private-tutor',
		role: 'Private Tutor (Mathematics, Physics, Mandarin)',
		organization: 'Independent Academic Mentor',
		period: 'Aug 2024 – Present',
		location: 'Tangerang, Indonesia',
		responsibilities: [
			'Formulate structured, step-by-step problem-solving frameworks for students tackling advanced calculus, physics mechanics, and mathematical reasoning.',
			'Conduct regular one-on-one analytical reviews, pinpointing root causes of conceptual misunderstandings and building disciplined quantitative thinking.',
			'Instruct students in Mandarin conversational fluency, pronunciation accuracy, and Chinese character fundamentals.',
		],
	},
	{
		id: 'sales-representative',
		role: 'Sales Representative',
		organization: 'Allianz Indonesia',
		period: 'Professional Experience',
		location: 'Tangerang, Indonesia',
		responsibilities: [
			'Engaged with clients to assess personal risk profiles and present customized financial protection structures.',
			'Developed clear, disciplined client communication, objection handling, and consultative stakeholder management skills.',
		],
	},
];

export const contactChannels: ContactChannel[] = [
	{
		id: 'email',
		label: 'Email',
		displayValue: 'lnyx90prive@gmail.com',
		url: 'mailto:lnyx90prive@gmail.com',
		iconName: 'mail',
	},
	{
		id: 'whatsapp',
		label: 'WhatsApp',
		displayValue: '+62 812-3456-7890',
		url: 'https://wa.me/6281234567890',
		iconName: 'message-circle',
	},
	{
		id: 'linkedin',
		label: 'LinkedIn',
		displayValue: 'linkedin.com/in/josiah-suryadi-6837113a2',
		url: 'https://www.linkedin.com/in/josiah-suryadi-6837113a2/',
		iconName: 'linkedin',
	},
	{
		id: 'github',
		label: 'GitHub',
		displayValue: 'github.com/lnyx9',
		url: 'https://github.com/lnyx9',
		iconName: 'github',
	},
];

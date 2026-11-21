import type { SkillCategory } from '../types/project';

export const skillCategories: SkillCategory[] = [
	{
		title: 'Frontend & UI Engineering',
		skills: [
			'React & Vite',
			'TypeScript',
			'TailwindCSS & Modern CSS',
			'Responsive Hybrid Grids',
			'Accessible UI (WCAG 2.1 AA)',
		],
	},
	{
		title: 'Backend & Systems',
		skills: [
			'Node.js & Express.js',
			'RESTful API Architecture',
			'JWT Authentication & RBAC',
			'Sequelize ORM & Mongoose ODM',
			'Docker Containerization & Git',
		],
	},
	{
		title: 'Database & Storage',
		skills: [
			'MySQL (ACID, 3NF Normalization)',
			'MongoDB (Document Store)',
			'PostgreSQL',
			'Dual-Database Synchronization',
		],
	},
	{
		title: 'Programming & Machine Learning',
		skills: [
			'Python & PyTorch (1D-CNN, BiLSTM)',
			'XGBoost, Pandas & Scikit-Learn',
			'C & Kotlin Fundamentals',
			'Google Gemini API Integration',
			'Data Structures & Algorithms',
		],
	},
];

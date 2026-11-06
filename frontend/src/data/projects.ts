import type { Project } from '../types/project';

export const projects: Project[] = [
	{
		id: 'sleep-stage-prediction',
		domain: 'Deep Learning · PyTorch',
		title: 'Sleep Stage Transition Prediction Model',
		image: '/eeg-preview.jpg',
		shortDescription:
			'Architected a CNN-BiLSTM model in PyTorch to classify sleep stages from single-channel raw EEG signals.',
		problem:
			'High temporal dependency and subtle transitional patterns in high-volume bio-signal data often cause catastrophic memory overflow during deep training.',
		solution:
			'Combined 1D-CNN for localized spatial feature extraction with bidirectional LSTM layers, supplemented by np.memmap disk-streaming.',
		technologies: ['PyTorch', 'Python', '1D-CNN', 'BiLSTM', 'Google Colab'],
		personalContribution: [
			'Architected end-to-end CNN-BiLSTM sequential pipeline in PyTorch.',
			'Engineered an optimized data pipeline via np.memmap to stream over 450,000 sequential epochs within strict RAM constraints.',
			'Conducted single-channel montage frequency extraction to eliminate multi-lead hardware requirements without losing fidelity.',
		],
		metricsTakeaway:
			'Achieved 86.70% Overall Accuracy and 73.27% Macro F1-Score over 450,000+ sequential EEG epochs.',
		colabUrl: '',
	},
	{
		id: 'nyx-hotel',
		domain: 'Dual-Database Architecture · Full-Stack Backend',
		title: 'Nyx Hotel Management System',
		image: '/nyx-preview.jpg',
		shortDescription:
			'Engineered a reservation system backend featuring a dual-database architecture separating transactional operations from analytical audit logs.',
		problem:
			'High concurrent room reservations risk race conditions, inconsistent audit trails, and double-booking failures.',
		solution:
			'Implemented ACID-compliant MySQL transactions for state-critical bookings, delegating audit logs and event history asynchronously to MongoDB.',
		technologies: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'JWT Auth'],
		personalContribution: [
			'Designed a normalized 9-table MySQL relational schema enforcing strict foreign key constraints and ACID properties.',
			'Built stateless RESTful APIs secured with JSON Web Token (JWT) role-based authorization.',
			'Constructed MongoDB document schemas for flexible booking history analytics.',
		],
		metricsTakeaway:
			'Architected a resilient dual-database backend guaranteeing zero overbooking under concurrent transactional load.',
		githubUrl: 'https://github.com/lnyx9',
	},
	{
		id: 'valorant-win-prediction',
		domain: 'Machine Learning · Predictive Analytics',
		title: 'VCT Win Rate Prediction Model',
		image: '/valorant-preview.jpg',
		shortDescription:
			'Constructed a gradient boosting regression pipeline forecasting professional esports tournament match win rates from multi-match player synergy statistics.',
		problem:
			'Individual player combat scores in professional esports fail to capture complex inter-round synergy and team performance variability.',
		solution:
			'Aggregated match datasets, engineering composite player rating ratios (VLR.gg Rating 2.0 & ACS) and round-differential variance features.',
		technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-Learn', 'Google Colab'],
		personalContribution: [
			'Extracted, cleaned, and merged disparate historical tournament telemetry into normalized analytical matrices.',
			'Trained and hyper-tuned an XGBoost regression model with cross-validation.',
			'Formulated feature importance correlations establishing ACS and rating deviation as leading win predictors.',
		],
		metricsTakeaway:
			'Achieved a 13.69% Mean Absolute Error (MAE) on unseen tournament match brackets.',
		githubUrl: 'https://github.com/lnyx9',
	},
	{
		id: 'aegis',
		domain: 'Hackathon 7.0 · Backend & AI Integration',
		title: 'AEGIS — Workplace Safety Platform',
		image: '/aegis-preview.jpg',
		shortDescription:
			'Built a workplace safety compliance backend integrating Google Gemini API for real-time automated incident risk assessment during Garuda Hacks 7.0.',
		problem:
			'Traditional workplace hazard reports suffer from delayed reviews, ambiguous categorization, and manual compliance auditing.',
		solution:
			'Integrated an automated generative AI analysis pipeline using Gemini API to parse incident photos/descriptions and provide immediate OSHA guidelines.',
		technologies: ['Node.js', 'MySQL', 'Gemini API', 'JWT Auth', 'REST APIs'],
		personalContribution: [
			'Developed authenticated RESTful backend endpoints under a strict 36-hour hackathon timeline.',
			'Configured Google Gemini API structured prompts for consistent automated workplace safety severity scoring.',
			'Designed relational schema for incident logs, department escalation, and real-time hazard status.',
		],
		metricsTakeaway:
			'Delivered a functional AI-powered compliance backend with automated hazard assessment under competition conditions.',
		githubUrl: 'https://github.com/lnyx9',
	},
];

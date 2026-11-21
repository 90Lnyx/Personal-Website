import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  identity: {
    name: 'Josiah Maximus Suryadi',
    role: 'Data Scientist & Backend Engineer',
    photoUrl: '',
    bio: 'I am an Informatics student focused on data science and backend engineering. I enjoy analyzing complex data to find meaningful insights and building reliable backend systems that support them. Along with strong analytical thinking, I focus on writing clean code and communicating technical ideas clearly within a team.',
    statusBadge: 'Open for Internship (Jan 2027)',
    semester: 'Semester 4 // Class of 2024',
    major: 'S1 Informatika (Informatics)',
    university: 'Universitas Multimedia Nusantara',
    gpa: '3.79 / 4.00',
    seeking: '6–12 Months Internship starting January 2027 (Data Scientist & Backend Engineer)',
    location: 'Greater Jakarta • Open to Remote & Hybrid',
  },
  artifacts: [
    {
      id: 'sleep-stage-prediction',
      title: 'Sleep Stage Transition Prediction',
      category: 'Deep Learning & Biosignals',
      highlights: [
        '**Architected hybrid deep learning model** combining Multi-scale 1D CNNs, BiLSTM, and Multi-head Attention in PyTorch to classify sleep stages from raw EEG signals.',
        '**Achieved 88.05% Accuracy** and a 75.65% Macro F1-Score across distinct sleep stage transitions.',
        '**Engineered optimized training pipeline** utilizing Automatic Mixed Precision (AMP) and local memory-mapping for 450,000+ sequential epochs under strict hardware constraints.',
      ],
      techStack: ['Python', 'PyTorch', '1D-CNN', 'BiLSTM', 'Multi-Head Attention', 'AMP'],
      otherUrl: 'https://www.kaggle.com/code/lnyx90/skrining-anomali-struktur-tidur-tingkat-pasien',
    },
    {
      id: 'nyx-hotel-management',
      title: 'Nyx Hotel Management System',
      category: 'Dual-Database Backend Architecture',
      highlights: [
        '**Architected dual-database backend** utilizing MySQL for transactional workflows and MongoDB for flexible document storage, powering dedicated Admin and Guest portals.',
        '**Developed secure RESTful APIs** with JWT authentication to manage real-time room availability, shopping cart state synchronization, and automated PDF invoice generation.',
      ],
      techStack: ['Node.js', 'Express.js', 'MySQL', 'MongoDB', 'JWT Auth', 'REST APIs'],
      githubUrl: 'https://github.com/Willyapee/nyx_hotel',
    },
    {
      id: 'aegis-garuda-hacks',
      title: 'AEGIS — Garuda Hacks 7.0',
      category: 'AI Systems & Workplace Safety',
      highlights: [
        '**Engineered Node.js & MySQL backend** within a strict 48-hour hackathon, powering an HR dashboard for tracking BPJS compliance and enabling real-time incident reporting.',
        '**Integrated Google Gemini API** to build an interactive K3 safety assistant and automatically translate complex medical reports into accessible language.',
      ],
      techStack: ['Node.js', 'Express.js', 'MySQL', 'Google Gemini API', 'REST APIs'],
      otherUrl: 'https://devpost.com/software/aegis-jwg8lr',
      githubUrl: 'https://github.com/Lnyx90/AEGIS',
    },
    {
      id: 'vct-win-rate-prediction',
      title: 'VCT Win Rate Prediction Model',
      category: 'Esports Analytics & Predictive ML',
      highlights: [
        '**Engineered core performance metrics** by aggregating individual player ratings to calculate overall team strength across competitive esports tournament datasets.',
        '**Trained baseline XGBoost regression model** achieving a Mean Absolute Error of 13.69% during out-of-time validation on unseen future tournament data.',
      ],
      techStack: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn'],
      otherUrl: 'https://colab.research.google.com/drive/1PR1NmfN8moDHcG90F4XdOZiJ4FDtqogx',
    },
  ],
  journey: [
    {
      id: 'mentor-experience',
      role: 'Independent Academic Mentor',
      company: 'Private Tutoring (Mathematics, Physics, Mandarin)',
      period: 'Aug 2024 - Present',
      tag: 'PRIVATE ACADEMIC MENTORING',
      achievements: [
        '**Mentored elementary & high school students** in Mathematics, Physics, and Mandarin by diagnosing individual learning gaps and tailoring instruction.',
        '**Deconstructed complex scientific concepts** into intuitive principles to accelerate student comprehension and problem-solving.',
        '**Conducted bilingual instruction** in English and Mandarin fostering analytical discipline and sustained academic excellence.',
      ],
      techStack: [
        'Differentiated Instruction',
        'Bilingual Education',
        'Analytical Skills',
      ],
    },
    {
      id: 'allianz-experience',
      role: 'Sales Service Representative (Contract)',
      company: 'Allianz Indonesia',
      period: 'Jun 2025 - Dec 2025',
      tag: 'SALES & CLIENT ADVISORY',
      achievements: [
        '**Conducted direct client consultations** to evaluate multi-factor personal and asset risk profiles.',
        '**Structured tailored protective solutions** matching specific financial security and risk management objectives.',
        '**Delivered high-touch client advisory** and clear communication to build sustained long-term stakeholder trust.',
      ],
      techStack: [
        'Needs Analysis',
        'Solution Selling',
        'Relationship Building',
      ],
    },
  ],
  alliance: {
    headline: 'Ready to Build & Scale',
    subheadline:
      'Looking for a 6–12 month Data Science or Backend Engineering internship starting January 2027. Ready to build machine learning models and scalable backend systems. Feel free to reach out below.',
    links: {
      whatsapp: 'https://wa.me/6281315346758',
      github: 'https://github.com/Lnyx90',
      email: 'mailto:lnyx90prive@gmail.com',
      linkedin: 'https://linkedin.com/in/josiah-suryadi-6837113a2',
    },
    cv: {
      dataScience: {
        filename: 'Josiah Maximus Suryadi - Data Science.pdf',
        url: '/cv/Josiah Maximus Suryadi - Data Science.pdf',
      },
      backend: {
        filename: 'Josiah Maximus Suryadi - Backend.pdf',
        url: '/cv/Josiah Maximus Suryadi - Backend.pdf',
      },
    },
  },
};

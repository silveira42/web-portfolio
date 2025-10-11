import { Project, ProjectData } from '../types/Project';

export const projects: Project[] = [
	{
		id: 'pong',
		filename: 'pong.ts',
		icon: 'assets/icons/pong_logo.png',
		category: 'front-end',
		title: 'Pong',
		description: 'Vivamus ultricies enim finibus orci sollicitudin, non tristique orci interdum. Ut mattis, metus sed tempor faucibus, turpis nisl posuere tortor, id pulvinar quam libero a ligula.',
		gameImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop&q=80',
		technologies: [
			{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
			{ name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
			{ name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
			{ name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
		],
		learnings: [
			'State Management',
			'Component Logic',
			'Event Handling',
			'Game Logic',
			'UI Design'
		],
		linkToCode: 'https://github.com/silveira42/pong-game',
		linkToDemo: 'https://pong.thesilver.com.br/',
	},
	{
		id: 'hangman',
		filename: 'hangman.ts',
		icon: 'assets/icons/hangman.png',
		category: 'front-end',
		title: 'Jogo da forca',
		description: 'Um simples porém divertido jogo da forca que desenvolvi para praticar React com TypeScript.',
		gameImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=400&fit=crop&q=80',
		technologies: [
			{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
			{ name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
		],
		learnings: [
			'State Management',
			'Component Logic',
			'Event Handling',
			'Game Logic',
			'UI Design'
		],
		linkToCode: 'https://github.com/silveira42/forca-react',
		linkToDemo: 'https://forca.thesilver.com.br/',
	},
	{
		id: 'beam',
		filename: 'beam.docker',
		icon: 'assets/icons/beam-logo-black.png',
		category: 'sysadmin',
		title: 'Beam',
		description: 'A simple solution for hosting and downloading non-sensitive files.',
		gameImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80',
		technologies: [
			{ name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
			{ name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' }
		],
		learnings: [
			'Containers',
			'Networking',
			'Lightwait applications',
			'HTML Interfaces'
		],
		linkToCode: 'https://github.com/silveira42/beam',
		linkToDemo: undefined,
	},
	{
		id: 'back-end-projeto-1',
		filename: 'kafka-store.ts',
		icon: 'assets/icons/kafka.jpg',
		category: 'back-end',
		title: 'Kafka Store API',
		description: 'Uma API de loja virtual que utiliza Apache Kafka para comunicação entre microserviços.',
		gameImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80',
		technologies: [
			{ name: 'Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
			{ name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
			{ name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
		],
		learnings: [
			'Microservices',
			'Message Queues',
			'API Design',
			'Scalability',
			'Event Streaming'
		],
		linkToCode: 'https://github.com/silveira42/kafka-store-api',
		linkToDemo: undefined,
	},
	{
		id: 'full-stack-projeto-1',
		filename: 'iris-demo.cls',
		icon: 'assets/icons/intersystems-iris-remote.png',
		category: 'full-stack',
		title: 'IRIS Demo',
		description: 'Neste projeto eu demonstro o uso do Intersystems® IRIS como plataforma de integração entre um ERP e um site de vendas.',
		gameImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80',
		technologies: [
			{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
			{ name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
			{ name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
		],
		learnings: [
			'System Integration',
			'Database Design',
			'API Development',
			'Full-stack Architecture',
			'Business Logic'
		],
		linkToCode: 'https://github.com/silveira42/iris-mkt-erp-demo',
		linkToDemo: 'https://thesilver.com.br/',
	},
];

// Create projectData object for backward compatibility
export const projectData: ProjectData = projects.reduce((acc, project) => {
	const key = `${project.category}/${project.filename}`;
	acc[key] = project;
	return acc;
}, {} as ProjectData);

// Helper functions
export const getProjectsByCategory = (category: 'front-end' | 'back-end' | 'full-stack' | 'sysadmin') => {
	return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
	return projects.find(project => project.id === id);
};

export const getProjectByPath = (path: string) => {
	return projectData[path];
};

export const getCategories = () => {
	const categories = Array.from(new Set(projects.map(project => project.category)));
	return categories.sort(); // Sort alphabetically for consistent order
};

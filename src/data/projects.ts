import { Project, ProjectData } from '../types/Project';

export const projects: Project[] = [
	{
		id: 'pong',
		filename: 'pong.tsx',
		iconLightTheme: 'assets/icons/pong_logo.png',
		iconDarkTheme: 'assets/icons/pong_logo.png',
		category: 'front-end',
		content: {
			en: {
				title: 'Pong',
				description: 'A faithful recreation of the classic Pong arcade game using modern React and TypeScript. Features real-time ball physics, paddle collision detection, score tracking, and smooth 60fps animations for an authentic retro gaming experience.',
				learnings: [
					'State Management',
					'Game Physics',
					'Event Handling',
					'Animation Loops',
					'Component Architecture'
				]
			},
			pt_br: {
				title: 'Pong',
				description: 'Uma recriação fiel do clássico jogo arcade Pong usando React e TypeScript modernos. Apresenta física de bola em tempo real, detecção de colisão com raquetes, acompanhamento de pontuação e animações suaves de 60fps para uma experiência de jogo retrô autêntica.',
				learnings: [
					'Gerenciamento de Estado',
					'Física de Jogos',
					'Manipulação de Eventos',
					'Loops de Animação',
					'Arquitetura de Componentes'
				]
			}
		},
		projectImage: 'assets/project-thumbnails/pong.png',
		technologies: [
			{
				name: 'React',
				iconLightTheme: 'assets/icons/react-original.svg',
				iconDarkTheme: 'assets/icons/react-original.svg'
			},
			{
				name: 'TypeScript',
				iconLightTheme: 'assets/icons/typescript-original.svg',
				iconDarkTheme: 'assets/icons/typescript-original.svg'
			},
			{
				name: 'CSS3',
				iconLightTheme: 'assets/icons/css3-original.svg',
				iconDarkTheme: 'assets/icons/css3-original.svg'
			},
			{
				name: 'Docker',
				iconLightTheme: 'assets/icons/docker-original.svg',
				iconDarkTheme: 'assets/icons/docker-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/pong-react',
		linkToDemo: 'https://pong.thesilver.com.br/',
	},
	{
		id: 'hangman',
		filename: 'hangman.tsx',
		iconLightTheme: 'assets/icons/hangman.svg',
		iconDarkTheme: 'assets/icons/hangman.svg',
		category: 'front-end',
		content: {
			en: {
				title: 'Hangman Game',
				description: 'An interactive hangman game built with React and TypeScript featuring random word selection from a curated database, visual feedback for correct and incorrect guesses, and progressive difficulty levels. Includes smooth animations and responsive design for engaging gameplay.',
				learnings: [
					'State Management',
					'Component Logic',
					'Event Handling',
					'Game State Logic',
					'Interactive UI Design'
				]
			},
			pt_br: {
				title: 'Jogo da Forca',
				description: 'Um jogo da forca interativo construído com React e TypeScript apresentando seleção aleatória de palavras de um banco de dados curado, feedback visual para palpites corretos e incorretos, e níveis de dificuldade progressivos. Inclui animações suaves e design responsivo para jogabilidade envolvente.',
				learnings: [
					'Gerenciamento de Estado',
					'Lógica de Componentes',
					'Manipulação de Eventos',
					'Lógica de Estado do Jogo',
					'Design de UI Interativo'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'React',
				iconLightTheme: 'assets/icons/react-original.svg',
				iconDarkTheme: 'assets/icons/react-original.svg'
			},
			{
				name: 'TypeScript',
				iconLightTheme: 'assets/icons/typescript-original.svg',
				iconDarkTheme: 'assets/icons/typescript-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/forca-react',
		linkToDemo: 'https://forca.thesilver.com.br/',
	},
	{
		id: 'beam',
		filename: 'beam.docker',
		iconLightTheme: 'assets/icons/beam-logo-black.png',
		iconDarkTheme: 'assets/icons/beam-logo-white.png',
		category: 'sysadmin',
		content: {
			en: {
				title: 'Beam',
				description: 'A lightweight containerized file hosting solution designed for non-sensitive file sharing and downloads. Built with Docker for easy deployment and featuring a clean HTML interface for intuitive file management and access.',
				learnings: [
					'Container Architecture',
					'Network Configuration',
					'Lightweight Applications',
					'Web Interfaces',
					'File System Management'
				]
			},
			pt_br: {
				title: 'Beam',
				description: 'Uma solução leve de hospedagem de arquivos containerizada projetada para compartilhamento e downloads de arquivos não sensíveis. Construída com Docker para fácil implantação e apresentando uma interface HTML limpa para gerenciamento e acesso intuitivo de arquivos.',
				learnings: [
					'Arquitetura de Containers',
					'Configuração de Rede',
					'Aplicações Leves',
					'Interfaces Web',
					'Gerenciamento de Sistema de Arquivos'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'Docker',
				iconLightTheme: 'assets/icons/docker-original.svg',
				iconDarkTheme: 'assets/icons/docker-original.svg'
			},
			{
				name: 'HTML5',
				iconLightTheme: 'assets/icons/html5-original.svg',
				iconDarkTheme: 'assets/icons/html5-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/beam',
		linkToDemo: undefined,
	},
	{
		id: 'back-end-projeto-1',
		filename: 'kafka-store.ts',
		iconLightTheme: 'assets/icons/apachekafka-original.svg',
		iconDarkTheme: 'assets/icons/apachekafka-original.svg',
		category: 'back-end',
		content: {
			en: {
				title: 'Kafka Store API',
				description: 'A scalable e-commerce backend API built on Apache Kafka messaging architecture. Implements event-driven microservices for order processing, inventory management, and real-time notifications, demonstrating modern distributed system patterns.',
				learnings: [
					'Microservices Architecture',
					'Event-Driven Design',
					'Message Queue Systems',
					'API Development',
					'Distributed Systems'
				]
			},
			pt_br: {
				title: 'Kafka Store API',
				description: 'Uma API backend de e-commerce escalável construída na arquitetura de mensageria Apache Kafka. Implementa microserviços orientados a eventos para processamento de pedidos, gerenciamento de inventário e notificações em tempo real, demonstrando padrões modernos de sistemas distribuídos.',
				learnings: [
					'Arquitetura de Microserviços',
					'Design Orientado a Eventos',
					'Sistemas de Fila de Mensagens',
					'Desenvolvimento de APIs',
					'Sistemas Distribuídos'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'Kafka',
				iconLightTheme: 'assets/icons/apachekafka-original.svg',
				iconDarkTheme: 'assets/icons/apachekafka-original.svg'
			},
			{
				name: 'Node.js',
				iconLightTheme: 'assets/icons/nodejs-original.svg',
				iconDarkTheme: 'assets/icons/nodejs-original.svg'
			},
			{
				name: 'TypeScript',
				iconLightTheme: 'assets/icons/typescript-original.svg',
				iconDarkTheme: 'assets/icons/typescript-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/kafka-store-api',
		linkToDemo: undefined,
	},
	{
		id: 'iris-demo',
		filename: 'iris-demo.cls',
		iconLightTheme: 'assets/icons/intersystems-iris-remote.png',
		iconDarkTheme: 'assets/icons/intersystems-iris-remote.png',
		category: 'full-stack',
		content: {
			en: {
				title: 'IRIS Integration Platform Demo',
				description: 'A comprehensive demonstration of InterSystems IRIS as an enterprise integration platform, bridging ERP systems with e-commerce websites. Features real-time data synchronization, business process orchestration, and seamless API integration.',
				learnings: [
					'Enterprise Integration',
					'Database Architecture',
					'Business Process Design',
					'Full-stack Development',
					'System Orchestration'
				]
			},
			pt_br: {
				title: 'Demo Plataforma Integração IRIS',
				description: 'Uma demonstração abrangente do InterSystems IRIS como plataforma de integração empresarial, conectando sistemas ERP com sites de e-commerce. Apresenta sincronização de dados em tempo real, orquestração de processos de negócio e integração API perfeita.',
				learnings: [
					'Integração Empresarial',
					'Arquitetura de Banco de Dados',
					'Design de Processos de Negócio',
					'Desenvolvimento Full-stack',
					'Orquestração de Sistemas'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'React',
				iconLightTheme: 'assets/icons/react-original.svg',
				iconDarkTheme: 'assets/icons/react-original.svg'
			},
			{
				name: 'Node.js',
				iconLightTheme: 'assets/icons/nodejs-original.svg',
				iconDarkTheme: 'assets/icons/nodejs-original.svg'
			},
			{
				name: 'TypeScript',
				iconLightTheme: 'assets/icons/typescript-original.svg',
				iconDarkTheme: 'assets/icons/typescript-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/iris-mkt-erp-demo',
		linkToDemo: 'https://thesilver.com.br/',
	},
	{
		id: 'web-landing-page',
		filename: 'landing-page.tsx',
		iconLightTheme: 'assets/icons/react-original.svg',
		iconDarkTheme: 'assets/icons/react-original.svg',
		category: 'front-end',
		content: {
			en: {
				title: 'Modern Landing Page',
				description: 'A responsive and modern landing page built with React and TypeScript. Features smooth animations, mobile-first design, and optimized performance for business presentation.',
				learnings: [
					'Responsive Design',
					'CSS Animations',
					'Performance Optimization',
					'Modern UI/UX',
					'TypeScript Integration'
				]
			},
			pt_br: {
				title: 'Landing Page Moderna',
				description: 'Uma landing page responsiva e moderna construída com React e TypeScript. Apresenta animações suaves, design mobile-first e performance otimizada para apresentação empresarial.',
				learnings: [
					'Design Responsivo',
					'Animações CSS',
					'Otimização de Performance',
					'UI/UX Moderno',
					'Integração TypeScript'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'React',
				iconLightTheme: 'assets/icons/react-original.svg',
				iconDarkTheme: 'assets/icons/react-original.svg'
			},
			{
				name: 'TypeScript',
				iconLightTheme: 'assets/icons/typescript-original.svg',
				iconDarkTheme: 'assets/icons/typescript-original.svg'
			},
			{
				name: 'CSS3',
				iconLightTheme: 'assets/icons/css3-original.svg',
				iconDarkTheme: 'assets/icons/css3-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/web-landing-page',
		linkToDemo: undefined,
	},
	{
		id: 'marketplace-demo',
		filename: 'marketplace.tsx',
		iconLightTheme: 'assets/icons/react-original.svg',
		iconDarkTheme: 'assets/icons/react-original.svg',
		category: 'full-stack',
		content: {
			en: {
				title: 'Marketplace Demo Frontend',
				description: 'A complete marketplace frontend built with React and TypeScript. Features product listings, shopping cart, user authentication, and modern e-commerce functionality.',
				learnings: [
					'E-commerce Development',
					'State Management',
					'User Authentication',
					'API Integration',
					'Modern React Patterns'
				]
			},
			pt_br: {
				title: 'Frontend Demo Marketplace',
				description: 'Um frontend completo de marketplace construído com React e TypeScript. Apresenta listagem de produtos, carrinho de compras, autenticação de usuários e funcionalidades modernas de e-commerce.',
				learnings: [
					'Desenvolvimento E-commerce',
					'Gerenciamento de Estado',
					'Autenticação de Usuários',
					'Integração de APIs',
					'Padrões Modernos React'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'React',
				iconLightTheme: 'assets/icons/react-original.svg',
				iconDarkTheme: 'assets/icons/react-original.svg'
			},
			{
				name: 'TypeScript',
				iconLightTheme: 'assets/icons/typescript-original.svg',
				iconDarkTheme: 'assets/icons/typescript-original.svg'
			},
			{
				name: 'CSS3',
				iconLightTheme: 'assets/icons/css3-original.svg',
				iconDarkTheme: 'assets/icons/css3-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/marketplace-demo-frontend-react-ts',
		linkToDemo: undefined,
	},
	{
		id: 'kafka-store-webapp',
		filename: 'kafka-store.html',
		iconLightTheme: 'assets/icons/html5-original.svg',
		iconDarkTheme: 'assets/icons/html5-original.svg',
		category: 'full-stack',
		content: {
			en: {
				title: 'Kafka Store WebApp',
				description: 'A web application frontend for the Kafka Store API. Provides a clean interface for browsing products and managing orders with real-time updates via Kafka messaging.',
				learnings: [
					'Frontend Integration',
					'Real-time Updates',
					'API Consumption',
					'Web Application Design',
					'Event-driven Architecture'
				]
			},
			pt_br: {
				title: 'WebApp Kafka Store',
				description: 'Uma aplicação web frontend para a API Kafka Store. Fornece uma interface limpa para navegar produtos e gerenciar pedidos com atualizações em tempo real via mensageria Kafka.',
				learnings: [
					'Integração Frontend',
					'Atualizações em Tempo Real',
					'Consumo de APIs',
					'Design de Aplicação Web',
					'Arquitetura Orientada a Eventos'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'HTML5',
				iconLightTheme: 'assets/icons/html5-original.svg',
				iconDarkTheme: 'assets/icons/html5-original.svg'
			},
			{
				name: 'JavaScript',
				iconLightTheme: 'assets/icons/javascript-original.svg',
				iconDarkTheme: 'assets/icons/javascript-original.svg'
			},
			{
				name: 'Kafka',
				iconLightTheme: 'assets/icons/apachekafka-original.svg',
				iconDarkTheme: 'assets/icons/apachekafka-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/kafka-store-webapp',
		linkToDemo: undefined,
	},
	{
		id: 'appneus',
		filename: 'appneus.dart',
		iconLightTheme: 'assets/icons/flutter-original.svg',
		iconDarkTheme: 'assets/icons/flutter-original.svg',
		category: 'front-end',
		content: {
			en: {
				title: 'AppNeus Mobile App',
				description: 'A mobile application developed with Flutter and Dart. Features cross-platform compatibility, modern UI design, and native performance for enhanced user experience.',
				learnings: [
					'Mobile Development',
					'Flutter Framework',
					'Cross-platform Development',
					'Dart Programming',
					'Mobile UI/UX'
				]
			},
			pt_br: {
				title: 'App Mobile AppNeus',
				description: 'Uma aplicação mobile desenvolvida com Flutter e Dart. Apresenta compatibilidade multiplataforma, design de UI moderno e performance nativa para experiência de usuário aprimorada.',
				learnings: [
					'Desenvolvimento Mobile',
					'Framework Flutter',
					'Desenvolvimento Multiplataforma',
					'Programação Dart',
					'UI/UX Mobile'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'Flutter',
				iconLightTheme: 'assets/icons/flutter-original.svg',
				iconDarkTheme: 'assets/icons/flutter-original.svg'
			},
			{
				name: 'Dart',
				iconLightTheme: 'assets/icons/dart-original.svg',
				iconDarkTheme: 'assets/icons/dart-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/appneus',
		linkToDemo: undefined,
	},
	{
		id: 'folders-to-git-branches',
		filename: 'folder-to-branch.sh',
		iconLightTheme: 'assets/icons/bash.svg',
		iconDarkTheme: 'assets/icons/bash-white.svg',
		category: 'sysadmin',
		content: {
			en: {
				title: 'Folders to Git Branches',
				description: 'A shell script utility that automatically converts folder structures into Git branches. Streamlines repository organization and branch management for complex projects.',
				learnings: [
					'Shell Scripting',
					'Git Automation',
					'Repository Management',
					'DevOps Tooling',
					'Workflow Optimization'
				]
			},
			pt_br: {
				title: 'Pastas para Branches Git',
				description: 'Um utilitário em shell script que converte automaticamente estruturas de pastas em branches Git. Agiliza a organização de repositórios e gerenciamento de branches para projetos complexos.',
				learnings: [
					'Shell Scripting',
					'Automação Git',
					'Gerenciamento de Repositórios',
					'Ferramentas DevOps',
					'Otimização de Workflow'
				]
			}
		},
		projectImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=400&fit=crop&q=80',
		technologies: [
			{
				name: 'Bash',
				iconLightTheme: 'assets/icons/bash-original.svg',
				iconDarkTheme: 'assets/icons/bash-white.png'
			},
			{
				name: 'Git',
				iconLightTheme: 'assets/icons/git-original.svg',
				iconDarkTheme: 'assets/icons/git-original.svg'
			}
		],
		linkToCode: 'https://github.com/silveira42/folders-to-git-branches',
		linkToDemo: undefined,
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

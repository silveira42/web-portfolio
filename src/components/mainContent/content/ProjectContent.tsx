interface ProjectContentProps {
	projectFile: string;
}

// Updated project data with new structure
const projectData = {
	'front-end/projeto-1.html': {
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
			'Lorem',
			'Ipsum',
			'Dolor',
			'Sit',
			'Amet'
		],
		linkToCode: 'https://github.com/silveira42/pong-game',
		linkToDemo: 'https://pong-demo.thesilver.com.br/',
	},
	'front-end/projeto-2.html': {
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
	'back-end/projeto-1.html': {
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
	'full-stack/projeto-1.html': {
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
	'full-stack/projeto-2.html': {
		category: 'full-stack',
		title: 'Sistema ERP',
		description: 'Sistema completo de gestão empresarial desenvolvido com arquitetura moderna e escalável.',
		gameImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80',
		technologies: [
			{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
			{ name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
			{ name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
		],
		learnings: [
			'Enterprise Software',
			'Database Management',
			'User Experience',
			'System Architecture',
			'Performance Optimization'
		],
		linkToCode: 'https://github.com/silveira42',
		linkToDemo: undefined,
	},
};

export default function ProjectContent({ projectFile }: ProjectContentProps) {
	const project = projectData[projectFile as keyof typeof projectData];
	if (!project) {
		return (
			<div className="project-container">
				<div className="project-header">
					<div className="project-category">projeto</div>
					<div className="project-title">Projeto não encontrado</div>
				</div>
			</div>
		);
	}

	return (
		<div className="project-container">
			{/* Header Section */}
			<div className="project-header">
				<div className="project-category">{project.category}</div>
				<div className="project-title">{project.title}</div>
				<div className="project-actions">
					<a href={project.linkToCode} target="_blank" rel="noopener noreferrer" className="action-button code">
						📋 Ver código
					</a>
					{project.linkToDemo && (
						<a href={project.linkToDemo} target="_blank" rel="noopener noreferrer" className="action-button demo">
							🚀 Ver demonstração
						</a>
					)}
				</div>
			</div>

			{/* Game/Project Preview */}
			<div className="project-preview">
				<img src={project.gameImage} alt={project.title} className="project-image" />
			</div>

			{/* Description */}
			<div className="project-description">
				<span className="terminal-prompt">&gt; </span>
				{project.description}
			</div>

			{/* Two Column Layout */}
			<div className="project-details">
				{/* Stack Column */}
				<div className="project-column">
					<div className="column-title">
						<span className="terminal-prompt">&gt; </span>
						Stack
					</div>
					<div className="tech-stack">
						{project.technologies.map((tech, index) => (
							<div key={index} className="tech-item" title={tech.name}>
								<img src={tech.icon} alt={tech.name} className="tech-icon" />
							</div>
						))}
					</div>
				</div>

				{/* Learning Column */}
				<div className="project-column">
					<div className="column-title">
						<span className="terminal-prompt">&gt; </span>
						O que eu aprendi
					</div>
					<div className="learning-list">
						{project.learnings.map((learning, index) => (
							<div key={index} className="learning-item">
								&gt; {learning}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

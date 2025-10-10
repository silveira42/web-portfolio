interface ProjectContentProps {
	projectFile: string;
}

// Using the existing project data from the original codebase
const projectData = {
	'front-end/projeto-1.html': {
		title: 'Silver Hub',
		description:
			'Esta é a landing page que criei para utilizar na raiz do meu domínio. Utilizo arquivos de configuração e uma arquitetura flexível para poder adicionar e remover aplicativos da página com facilidade.',
		technologies: ['React TS'],
		linkToCode: 'https://github.com/silveira42/web-landing-page',
		linkToDemo: 'https://thesilver.com.br/',
	},
	'front-end/projeto-2.html': {
		title: 'Jogo da forca',
		description:
			'Um simples porém divertido jogo da forca que desenvolvi para praticar React com TypeScript.',
		technologies: ['React TS'],
		linkToCode: 'https://github.com/silveira42/forca-react',
		linkToDemo: 'https://forca.thesilver.com.br/',
	},
	'back-end/projeto-1.html': {
		title: 'Kafka Store API',
		description:
			'Uma API de loja virtual que utiliza Apache Kafka para comunicação entre microserviços.',
		technologies: ['Kafka', 'Node TS'],
		linkToCode: 'https://github.com/silveira42/kafka-store-api',
		linkToDemo: undefined,
	},
	'full-stack/projeto-1.html': {
		title: 'IRIS Demo',
		description:
			'Neste projeto eu demonstro o uso do Intersystems® IRIS como plataforma de integração entre um ERP e um site de vendas. Para isso, desenvolvi tanto a integração quanto ambos sistemas de ponta, e utilizei de submódulos git para organizar o código.',
		technologies: ['Intersystems® IRIS', 'Node TS', 'React TS'],
		linkToCode: 'https://github.com/silveira42/iris-mkt-erp-demo',
		linkToDemo: 'https://thesilver.com.br/',
	},
	'full-stack/projeto-2.html': {
		title: 'Sistema ERP',
		description:
			'Sistema completo de gestão empresarial desenvolvido com arquitetura moderna e escalável.',
		technologies: ['React TS', 'Node TS', 'PostgreSQL'],
		linkToCode: 'https://github.com/silveira42',
		linkToDemo: undefined,
	},
};

export default function ProjectContent({ projectFile }: ProjectContentProps) {
	const project = projectData[projectFile as keyof typeof projectData];

	if (!project) {
		return (
			<div className="header-section">
				<div className="title-section">
					<div className="greeting">Projeto não encontrado</div>
					<div className="terminal-prompt">root@portfolio:~/projects# cat {projectFile}</div>
				</div>
			</div>
		);
	}

	const getCategory = (file: string) => {
		if (file.includes('front-end')) return 'Frontend';
		if (file.includes('back-end')) return 'Backend';
		if (file.includes('full-stack')) return 'Full-stack';
		return 'Projeto';
	};

	return (
		<>
			<div className="header-section">
				<div className="title-section">
					<div className="greeting">{getCategory(projectFile)}</div>
					<div className="name">{project.title}</div>
					<div className="role">{project.technologies.join(' • ')}</div>
					<div className="terminal-prompt">root@portfolio:~/projects# cat {projectFile}</div>
				</div>
			</div>
			<div className="content-section">
				<div className="project-section">
					<div className="section-title">Descrição</div>
					<div className="section-content">
						{project.description}
					</div>
				</div>
				<div className="project-section">
					<div className="section-title">Tecnologias</div>
					<div className="section-content">
						{project.technologies.map((tech, index) => (
							<span key={index} className="tech-tag">
								{tech}
								{index < project.technologies.length - 1 ? ' • ' : ''}
							</span>
						))}
					</div>
				</div>
				<div className="project-section">
					<div className="section-title">Links</div>
					<div className="section-content">
						<div className="project-links">
							<a href={project.linkToCode} target="_blank" rel="noopener noreferrer" className="project-link">
								📋 Ver código
							</a>
							{project.linkToDemo && (
								<a href={project.linkToDemo} target="_blank" rel="noopener noreferrer" className="project-link">
									🚀 Ver demo
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

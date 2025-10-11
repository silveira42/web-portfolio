import { useProjects } from '../../../context/ProjectContext';
import { Technology } from '../../../types/Project';

interface ProjectContentProps {
	projectFile: string;
}

export default function ProjectContent({ projectFile }: ProjectContentProps) {
	const { getProjectByPath } = useProjects();
	const project = getProjectByPath(projectFile);
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
				<span className="column-prompt">&gt; </span>
				{project.description}
			</div>

			{/* Two Column Layout */}
			<div className="project-details">
				{/* Stack Column */}
				<div className="project-column">
					<div className="column-title">
						<span className="column-prompt">&gt; </span>
						Stack
					</div>
					<div className="tech-stack">
						{project.technologies.map((tech: Technology, index: number) => (
							<div key={index} className="tech-item" title={tech.name}>
								<img src={tech.icon} alt={tech.name} className="tech-icon" />
							</div>
						))}
					</div>
				</div>

				{/* Learning Column */}
				<div className="project-column">
					<div className="column-title">
						<span className="column-prompt">&gt; </span>
						O que eu aprendi
					</div>
					<div className="learning-list">
						{project.learnings.map((learning: string, index: number) => (
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

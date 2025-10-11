import { useProjects } from '../../../context/ProjectContext';
import { Technology } from '../../../types/Project';
import { useContext } from '../../../AppContext';

interface ProjectContentProps {
	projectFile: string;
}

export default function ProjectContent({ projectFile }: ProjectContentProps) {
	const { getProjectByPath } = useProjects();
	const { intl } = useContext();
	const dictionary = intl.getDictionary();
	const currentLanguage = intl.getLanguage();

	const project = getProjectByPath(projectFile);
	if (!project) {
		return (
			<div className="project-container">
				<div className="project-header">
					<div className="project-category">{dictionary.portfolio.projects.categoryLabel}</div>
					<div className="project-title">{dictionary.portfolio.projects.notFound}</div>
				</div>
			</div>
		);
	}

	// Get content for current language
	const projectContent = project.content[currentLanguage];

	return (
		<div className="project-container">
			{/* Header Section */}
			<div className="project-header">
				<div className="project-category">{project.category}</div>
				<div className="project-title">{projectContent.title}</div>
				<div className="project-actions">
					<a href={project.linkToCode} target="_blank" rel="noopener noreferrer" className="action-button code">
						{dictionary.portfolio.projects.viewCode}
					</a>
					{project.linkToDemo && (
						<a href={project.linkToDemo} target="_blank" rel="noopener noreferrer" className="action-button demo">
							{dictionary.portfolio.projects.viewDemo}
						</a>
					)}
				</div>
			</div>

			{/* Game/Project Preview */}
			<div className="project-preview">
				<img src={project.gameImage} alt={projectContent.title} className="project-image" />
			</div>

			{/* Description */}
			<div className="project-description">
				<span className="column-prompt">&gt; </span>
				{projectContent.description}
			</div>

			{/* Two Column Layout */}
			<div className="project-details">
				{/* Stack Column */}
				<div className="project-column">
					<div className="column-title">
						<span className="column-prompt">&gt; </span>
						{dictionary.portfolio.projects.stackLabel}
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
						{dictionary.portfolio.projects.learningsLabel}
					</div>
					<div className="learning-list">
						{projectContent.learnings.map((learning: string, index: number) => (
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

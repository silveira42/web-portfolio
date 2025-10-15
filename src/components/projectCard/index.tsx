import { Project } from '../../types/Project';
import { useContext } from '../../AppContext';
import './styles.css';

interface ProjectCardProps {
	project: Project;
	onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
	const { intl } = useContext();
	const dictionary = intl.getDictionary();
	const currentLanguage = intl.getLanguage();

	const projectContent = project.content[currentLanguage as keyof typeof project.content];

	return (
		<div className="project-card">
			<div className="project-card-image">
				<img
					src={project.projectImage}
					alt={projectContent.title}
					loading="lazy"
				/>
				<div className="project-card-overlay">
					<span className="view-project-text" onClick={onClick}>
						{dictionary.portfolio.projects.viewProject}
					</span>
				</div>
			</div>
			<div className="project-card-content">
				<div className="project-card-header">
					<h3 className="project-card-title">{projectContent.title}</h3>
					<span className="project-card-category">{project.category}</span>
				</div>
				<p className="project-card-description">
					{projectContent.description}
				</p>
				<div className="project-card-tech">
					{project.technologies.slice(0, 3).map((tech, index) => (
						<span key={index} className="tech-tag">
							{tech.name}
						</span>
					))}
					{project.technologies.length > 3 && (
						<span className="tech-more">
							+{project.technologies.length - 3}
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

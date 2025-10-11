import './styles.css';
import { useContentContext } from '../../context/ContentContext';
import { useProjects } from '../../context/ProjectContext';
import HomeContent from './content/HomeContent';
import CurriculoContent from './content/CurriculoContent';
import ProjectContent from './content/ProjectContent';

export default function MainContent() {
	const { selectedFile } = useContentContext();
	const { getProjectByPath } = useProjects();

	const renderContent = () => {
		console.log('MainContent: Selected file:', selectedFile); // Debug log

		switch (selectedFile) {
			case 'home.html':
				return <HomeContent />;
			case 'curriculo.pdf':
				return <CurriculoContent />;
			default:
				// Check if it's a project file
				const project = getProjectByPath(selectedFile);
				console.log('MainContent: Found project:', project); // Debug log
				if (project) {
					return <ProjectContent projectFile={selectedFile} />;
				}
				// Default to home content
				return <HomeContent />;
		}
	};

	return (
		<div className="main-content-container">
			{renderContent()}
		</div>
	);
}

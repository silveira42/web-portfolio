import './styles.css';
import { useContentContext } from '../../context/ContentContext';
import HomeContent from './content/HomeContent';
import CurriculoContent from './content/CurriculoContent';
import ProjectContent from './content/ProjectContent';

export default function MainContent() {
	const { selectedFile } = useContentContext();

	const renderContent = () => {
		switch (selectedFile) {
			case 'home.html':
				return <HomeContent />;
			case 'curriculo.pdf':
				return <CurriculoContent />;
			case 'back-end/projeto-1.html':
			case 'front-end/projeto-1.html':
			case 'front-end/projeto-2.html':
			case 'full-stack/projeto-1.html':
			case 'full-stack/projeto-2.html':
				return <ProjectContent projectFile={selectedFile} />;
			default:
				return <HomeContent />;
		}
	};

	return (
		<div className="main-content-container">
			{renderContent()}
		</div>
	);
}

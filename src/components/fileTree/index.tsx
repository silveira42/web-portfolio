import React, { Fragment } from 'react';
import './styles.css';
import { useContentContext } from '../../context/ContentContext';
import { useContext } from '../../AppContext';
import { useProjects } from '../../context/ProjectContext';

interface FileTreeProps {
	onFileSelect?: () => void;
}

export default function FileTree({ onFileSelect }: FileTreeProps) {
	const { selectedFile, setSelectedFile } = useContentContext();
	const { theme, intl } = useContext();
	const { getProjectsByCategory, getCategories } = useProjects();

	const dictionary = intl.getDictionary();
	const currentLanguage = intl.getLanguage();

	const handleFileClick = (fileName: string) => {
		console.log('FileTree: Clicking file:', fileName); // Debug log
		setSelectedFile(fileName);
		if (onFileSelect) {
			onFileSelect();
		}
	};

	const handleDarkTheme = () => {
		theme.setTheme('dark');
		if (onFileSelect) {
			onFileSelect();
		}
	};

	const handleLightTheme = () => {
		theme.setTheme('light');
		if (onFileSelect) {
			onFileSelect();
		}
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
		e.preventDefault(); // Prevent default navigation
		const confirmMessage = dictionary.portfolio.navigation.confirmDialog.replace('{url}', url);
		const confirmed = window.confirm(confirmMessage);
		if (confirmed) {
			window.open(url, '_blank', 'noopener,noreferrer');
		}
		if (onFileSelect) {
			onFileSelect();
		}
	};

	return (
		<div className="file-tree">
			<div className="file-tree-title">
				<span className="path">~/Bruno/Silveira/Santos</span>
			</div>
			<div className="file-tree-content">
				<div className="file-tree-item folder">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">{dictionary.portfolio.fileTree.welcome}</span>
				</div>
				<div
					className={`file-tree-item file level-1 ${selectedFile === 'home.html' ? 'selected' : ''}`}
					onClick={() => handleFileClick('home.html')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">home.html</span>
				</div>
				{/* <div
					className={`file-tree-item file level-1 ${selectedFile === 'curriculo.pdf' ? 'selected' : ''}`}
					onClick={() => handleFileClick('curriculo.pdf')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">curriculo.pdf</span>
				</div> */}
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">links</span>
				</div>
				<a
					className="file-tree-item file level-2"
					href='https://github.com/silveira42'
					target='_blank'
					rel="noreferrer"
					onClick={(e) => handleLinkClick(e, 'https://github.com/silveira42')}
				>
					<span className="file-icon terminal">🔗</span>
					<span className="item-name">{dictionary.portfolio.fileTree.openGithub}</span>
				</a>
				<a
					className="file-tree-item file level-2"
					href='https://linkedin.com/in/silveirabruno842'
					target='_blank'
					rel="noreferrer"
					onClick={(e) => handleLinkClick(e, 'https://linkedin.com/in/silveirabruno842')}
				>
					<span className="file-icon terminal">🔗</span>
					<span className="item-name">{dictionary.portfolio.fileTree.openLinkedin}</span>
				</a>
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">projects</span>
				</div>

				{/* Dynamic Project Categories */}
				{getCategories().map((category) => (
					<Fragment key={category}>
						<div className="file-tree-item folder level-2">
							<span className="arrow open">▼</span>
							<span className="folder-icon">📂</span>
							<span className="item-name">{category}</span>
						</div>
						{getProjectsByCategory(category).map((project) => {
							const projectPath = `${project.category}/${project.filename}`;
							const projectContent = project.content[currentLanguage];
							return (
								<div
									key={project.id}
									className={`file-tree-item file level-3 ${selectedFile === projectPath ? 'selected' : ''}`}
									onClick={() => handleFileClick(projectPath)}
								>
									<img src={project.icon} alt={projectContent.title} className="file-icon" />
									<span className="item-name">{project.filename}</span>
								</div>
							);
						})}
					</Fragment>
				))}
				<div className="file-tree-item folder">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">config</span>
				</div>
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">language</span>
				</div>
				<div
					className="file-tree-item file level-2"
					onClick={() => intl.changeLanguage('pt_br')}
				>
					<span className="file-icon">🇧🇷</span>
					<span className="item-name">portugues.srt</span>
				</div>
				<div
					className="file-tree-item file level-2"
					onClick={() => intl.changeLanguage('en')}
				>
					<span className="file-icon">🇺🇸</span>
					<span className="item-name">english.srt</span>
				</div>
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">theme</span>
				</div>
				<div
					className="file-tree-item file level-2"
					onClick={() => handleLightTheme()}
				>
					<span className="file-icon">🎨</span>
					<span className="item-name">modo-claro.css</span>
				</div>
				<div
					className="file-tree-item file level-2"
					onClick={() => handleDarkTheme()}
				>
					<span className="file-icon">🎨</span>
					<span className="item-name">modo-escuro.css</span>
				</div>
			</div>
		</div>
	);
}

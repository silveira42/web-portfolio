import './styles.css';
import { useContentContext } from '../../context/ContentContext';
import { useContext } from '../../AppContext';

interface FileTreeProps {
	onFileSelect?: () => void;
}

export default function FileTree({ onFileSelect }: FileTreeProps) {
	const { selectedFile, setSelectedFile } = useContentContext();
	const { theme } = useContext();

	const handleFileClick = (fileName: string) => {
		setSelectedFile(fileName);
		if (onFileSelect) {
			onFileSelect();
		}
	};

	const handleLinkClick = (url: string) => {
		window.open(url, '_blank');
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

	return (
		<div className="file-tree">
			<div className="file-tree-title">
				<span className="path">~/Bruno/Silveira/Santos</span>
			</div>
			<div className="file-tree-content">
				<div className="file-tree-item folder">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">bem-vindo-ao-meu-portfolio</span>
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
				<a href='https://github.com/silveira42' target='_blank' rel="noreferrer">
					<div
						className="file-tree-item file level-2"
						onClick={() => handleLinkClick('https://github.com/silveira42')}
						>
						<span className="file-icon terminal">🔗</span>
						<span className="item-name">abrir-github.sh</span>
					</div>
				</a>
				<a href='https://linkedin.com/in/silveirabruno842' target='_blank' rel="noreferrer">
					<div
						className="file-tree-item file level-2"
						onClick={() => handleLinkClick('https://linkedin.com/in/silveirabruno842')}
					>
						<span className="file-icon terminal">🔗</span>
						<span className="item-name">abrir-linkedin.sh</span>
					</div>
				</a>
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">projects</span>
				</div>
				<div className="file-tree-item folder level-2">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">back-end</span>
				</div>
				<div
					className={`file-tree-item file level-3 ${selectedFile === 'back-end/projeto-1.html' ? 'selected' : ''}`}
					onClick={() => handleFileClick('back-end/projeto-1.html')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-1.html</span>
				</div>
				<div className="file-tree-item folder level-2">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">front-end</span>
				</div>
				<div
					className={`file-tree-item file level-3 ${selectedFile === 'front-end/projeto-1.html' ? 'selected' : ''}`}
					onClick={() => handleFileClick('front-end/projeto-1.html')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-1.html</span>
				</div>
				<div
					className={`file-tree-item file level-3 ${selectedFile === 'front-end/projeto-2.html' ? 'selected' : ''}`}
					onClick={() => handleFileClick('front-end/projeto-2.html')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-2.html</span>
				</div>
				<div className="file-tree-item folder level-2">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📂</span>
					<span className="item-name">full-stack</span>
				</div>
				<div
					className={`file-tree-item file level-3 ${selectedFile === 'full-stack/projeto-1.html' ? 'selected' : ''}`}
					onClick={() => handleFileClick('full-stack/projeto-1.html')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-1.html</span>
				</div>
				<div
					className={`file-tree-item file level-3 ${selectedFile === 'full-stack/projeto-2.html' ? 'selected' : ''}`}
					onClick={() => handleFileClick('full-stack/projeto-2.html')}
				>
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-2.html</span>
				</div>
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
					onClick={() => handleDarkTheme()}
				>
					<span className="file-icon">🇧🇷</span>
					<span className="item-name">portugues.srt</span>
				</div>
				<div
					className="file-tree-item file level-2"
					onClick={() => handleDarkTheme()}
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

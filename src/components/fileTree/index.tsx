import './styles.css';

export default function FileTree() {
	return (
		<div className="file-tree">
			<div className="file-tree-title">
				<span className="path">~/Bruno/Silveira/Santos</span>
			</div>
			<div className="file-tree-content">
				<div className="file-tree-item folder">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📁</span>
					<span className="item-name">bem-vindo-ao-meu-portfolio</span>
				</div>
				<div className="file-tree-item file level-1">
					<span className="file-icon">📄</span>
					<span className="item-name">home.html</span>
				</div>
				<div className="file-tree-item file level-1">
					<span className="file-icon">📄</span>
					<span className="item-name">curriculo.pdf</span>
				</div>
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📁</span>
					<span className="item-name">links</span>
				</div>
				<div className="file-tree-item file level-2">
					<span className="file-icon terminal">⬜</span>
					<span className="item-name">abrir-github.sh</span>
				</div>
				<div className="file-tree-item file level-2">
					<span className="file-icon terminal">⬜</span>
					<span className="item-name">abrir-linkedin.sh</span>
				</div>
				<div className="file-tree-item folder level-1">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📁</span>
					<span className="item-name">projects</span>
				</div>
				<div className="file-tree-item folder level-2">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📁</span>
					<span className="item-name">back-end</span>
				</div>
				<div className="file-tree-item file level-3">
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-1.html</span>
				</div>
				<div className="file-tree-item folder level-2">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📁</span>
					<span className="item-name">front-end</span>
				</div>
				<div className="file-tree-item file level-3">
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-1.html</span>
				</div>
				<div className="file-tree-item file level-3">
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-2.html</span>
				</div>
				<div className="file-tree-item folder level-2">
					<span className="arrow open">▼</span>
					<span className="folder-icon">📁</span>
					<span className="item-name">full-stack</span>
				</div>
				<div className="file-tree-item file level-3">
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-1.html</span>
				</div>
				<div className="file-tree-item file level-3">
					<span className="file-icon">📄</span>
					<span className="item-name">projeto-2.html</span>
				</div>
				<div className="file-tree-item file">
					<span className="file-icon">📄</span>
					<span className="item-name">modo-claro.css</span>
				</div>
				<div className="file-tree-item file">
					<span className="file-icon">📄</span>
					<span className="item-name">modo-escuro.css</span>
				</div>
			</div>
		</div>
	);
}

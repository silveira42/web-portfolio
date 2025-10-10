export default function CurriculoContent() {
	return (
		<>
			<div className="header-section">
				<div className="title-section">
					<div className="greeting">Currículo</div>
					<div className="name">Bruno Silveira</div>
					<div className="role">desenvolvedor de software</div>
					<div className="terminal-prompt">root@portfolio:~# cat curriculo.pdf</div>
				</div>
			</div>
			<div className="content-section">
				<div className="curriculo-section">
					<div className="section-title">Experiência</div>
					<div className="section-content">
						<div className="experience-item">
							<div className="experience-title">Desenvolvedor Full-stack</div>
							<div className="experience-period">2020 - Presente</div>
							<div className="experience-description">
								Desenvolvimento de aplicações web completas utilizando React, Node.js e TypeScript.
								Experiência com arquitetura de microserviços e integração de sistemas.
							</div>
						</div>
					</div>
				</div>
				<div className="curriculo-section">
					<div className="section-title">Formação</div>
					<div className="section-content">
						<div className="education-item">
							<div className="education-title">Ciência da Computação</div>
							<div className="education-description">
								Conhecimento sólido em algoritmos, estruturas de dados e desenvolvimento de software.
							</div>
						</div>
					</div>
				</div>
				<div className="curriculo-section">
					<div className="section-title">Competências Técnicas</div>
					<div className="section-content">
						• React, TypeScript, JavaScript, HTML, CSS<br/>
						• Node.js, Python, APIs RESTful<br/>
						• Docker, Nginx, Git, Linux<br/>
						• Kafka, Microserviços, Integração de Sistemas<br/>
						• DevOps, Infraestrutura, Redes, Segurança
					</div>
				</div>
			</div>
		</>
	);
}

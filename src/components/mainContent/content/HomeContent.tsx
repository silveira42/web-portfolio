export default function HomeContent() {
	return (
		<>
			<div className="header-section home">
				<div className="title-section">
					<div className="greeting">Olá, eu sou</div>
					<div className="name">Bruno Silveira</div>
					<div className="role">desenvolvedor de software</div>
					<div className="terminal-prompt">root@portfolio:~#</div>
				</div>
				<div className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			</div>
			<div className="content-section home">
				<div className="about-section">
					<div className="section-title">Sobre mim</div>
					<div className="section-content">
						Vivamus ultricies enim finibus orci sollicitudin, non tristique orci interdum. Ut mattis, metus sed tempor faucibus, turpis nisi posuere tortor, id pulvinar quam libero a ligula. Praesent pharetra urna nulla, ac suscipit odio malesuada hendrerit. Duis dictum ex vel sem rutrum rutrum. Morbi quis diam consequat, tempor elit quis, fermentum est.
					</div>
				</div>
				<div className="skills-section">
					<div className="section-title">Skills</div>
					<div className="skills-content">
						<div className="skill-category">
							<div className="skill-category-title">Frontend</div>
							<div className="skill-list">React • TypeScript • HTML • CSS • JavaScript</div>
						</div>
						<div className="skill-category">
							<div className="skill-category-title">Backend</div>
							<div className="skill-list">Node.js • Python • Kafka • APIs RESTful</div>
						</div>
						<div className="skill-category">
							<div className="skill-category-title">DevOps & Infraestrutura</div>
							<div className="skill-list">Docker • Nginx • Git • Linux • Redes</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

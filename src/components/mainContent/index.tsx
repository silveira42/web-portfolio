import './styles.css';

export default function MainContent() {
	return (
		<div className="main-content-container">
			<div className="header-section">
				<div className="title-section">
					<div className="greeting">Olá, eu sou</div>
					<div className="name">Bruno Silveira</div>
					<div className="role">desenvolvedor de software</div>
					<div className="terminal-prompt">root@portfolio:~#</div>
				</div>
				<div className="lorem-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			</div>
			<div className="content-section">
				<div className="about-section">
					<div className="section-title">Sobre mim</div>
					<div className="section-content">
						Vivamus ultricies enim finibus orci sollicitudin, non tristique orci interdum. Ut mattis, metus sed tempor faucibus, turpis nisi posuere tortor, id pulvinar quam libero a ligula. Praesent pharetra urna nulla, ac suscipit odio malesuada hendrerit. Duis dictum ex vel sem rutrum rutrum. Morbi quis diam consequat, tempor elit quis, fermentum est.
					</div>
				</div>
				<div className="skills-section">
					<div className="section-title">Skills</div>
				</div>
			</div>
		</div>
	);
}

import { useEffect, useState } from 'react';

export default function HomeContent() {
	const [scrollOpacity, setScrollOpacity] = useState(1);

	useEffect(() => {
		const handleScroll = () => {
			const mainContent = document.querySelector('.main-content');
			const scrolled = mainContent ? mainContent.scrollTop : window.scrollY;

			// Fade out quickly as soon as user starts scrolling
			// Arrow disappears completely after scrolling 100px
			if (scrolled > 0) {
				// const opacity = Math.max(0, 1 - (scrolled / 100));
				setScrollOpacity(0);
			}
		};

		const mainContent = document.querySelector('.main-content');

		if (mainContent) {
			mainContent.addEventListener('scroll', handleScroll);
		}

		// Fallback to window scroll
		window.addEventListener('scroll', handleScroll);

		return () => {
			if (mainContent) {
				mainContent.removeEventListener('scroll', handleScroll);
			}
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToContent = () => {
		const headerSection = document.querySelector('.header-section.home');
		const mainContent = document.querySelector('.main-content');

		if (headerSection && mainContent) {
			const headerHeight = headerSection.getBoundingClientRect().height;
			mainContent.scrollTo({
				top: headerHeight,
				behavior: 'smooth'
			});
		}
	};

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
				<div
					className="scroll-indicator"
					style={{ opacity: scrollOpacity }}
					onClick={scrollToContent}
				>
					<div className="scroll-arrow">
						<span>↓</span>
					</div>
				</div>
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

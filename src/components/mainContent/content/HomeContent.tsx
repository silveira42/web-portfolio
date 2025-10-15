import { useEffect, useState } from 'react';
import { useContext } from '../../../AppContext';
import Contact from '../../contact';
import ProjectCarousel from '../../projectCarousel';
import { projects } from '../../../data/projects';
import { useContentContext } from '../../../context/ContentContext';
import { Project } from '../../../types/Project';

export default function HomeContent() {
	const [scrollOpacity, setScrollOpacity] = useState(1);
	const { intl } = useContext();
	const dictionary = intl.getDictionary();
	const { setSelectedFile } = useContentContext();

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

	const handleProjectClick = (project: Project) => {
		setSelectedFile(`${project.category}/${project.filename}`)
	};

	return (
		<>
			<div className="header-section home">
				<div className="title-section">
					<div className="greeting">{dictionary.portfolio.home.greeting}</div>
					<div className="name">{dictionary.portfolio.home.name}</div>
					<div className="role">{dictionary.portfolio.home.role}</div>
					<div className="terminal-prompt">
						{dictionary.portfolio.home.terminalPrompt} <span className="blinking-cursor">█</span>
					</div>
				</div>
				<div className="lorem-text">ObjectScript | JavaScript | TypeScript | Python | Node.js | Express | Flask | Intersystems IRIS | Bash | SQL | IRIS DB | TDD | Agile (Scrum) | Code Review | Test Automation | Design Patterns | GitFlow | Software Architecture | Pipeline CI/CD</div>
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
					<div className="section-title">{dictionary.portfolio.home.aboutTitle}</div>
					<div className="section-content">
						{dictionary.portfolio.home.aboutContent}
					</div>
				</div>
				<ProjectCarousel
					projects={projects}
					onProjectClick={handleProjectClick}
				/>
				<Contact />
			</div>
		</>
	);
}

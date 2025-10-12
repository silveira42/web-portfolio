import { useState, useEffect } from 'react';
import { Project } from '../../types/Project';
import ProjectCard from '../projectCard';
import './styles.css';

interface ProjectCarouselProps {
	projects: Project[];
	onProjectClick: (project: Project) => void;
}

export default function ProjectCarousel({ projects, onProjectClick }: ProjectCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardsToShow, setCardsToShow] = useState(3);

	// Update cards to show based on screen size
	useEffect(() => {
		const updateCardsToShow = () => {
			if (window.innerWidth < 768) {
				setCardsToShow(1);
			} else if (window.innerWidth < 1024) {
				setCardsToShow(2);
			} else {
				setCardsToShow(3);
			}
		};

		updateCardsToShow();
		window.addEventListener('resize', updateCardsToShow);

		return () => window.removeEventListener('resize', updateCardsToShow);
	}, []);

	const maxIndex = Math.max(0, projects.length - cardsToShow);

	const goToPrevious = () => {
		setCurrentIndex(prev => Math.max(0, prev - 1));
	};

	const goToNext = () => {
		setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
	};

	// Auto-scroll functionality (optional)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prev => {
				if (prev >= maxIndex) {
					return 0; // Loop back to start
				}
				return prev + 1;
			});
		}, 8000); // Change slide every 8 seconds

		return () => clearInterval(interval);
	}, [maxIndex]);

	return (
		<div className="project-carousel">
			<div className="carousel-header">
				<h2 className="carousel-title">Featured Projects</h2>
				<div className="carousel-controls">
					<button
						className="carousel-btn carousel-btn-prev"
						onClick={goToPrevious}
						disabled={currentIndex === 0}
						aria-label="Previous projects"
					>
						‹
					</button>
					<div className="carousel-dots">
						{Array.from({ length: maxIndex + 1 }, (_, index) => (
							<button
								key={index}
								className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
								onClick={() => goToSlide(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
					<button
						className="carousel-btn carousel-btn-next"
						onClick={goToNext}
						disabled={currentIndex === maxIndex}
						aria-label="Next projects"
					>
						›
					</button>
				</div>
			</div>

			<div className="carousel-container">
				<div
					className="carousel-track"
					style={{
						transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
						width: `${(projects.length / cardsToShow) * 100}%`
					}}
				>
					{projects.map((project, index) => (
						<div
							key={project.id}
							className="carousel-slide"
							style={{ width: `${100 / projects.length}%` }}
						>
							<ProjectCard
								project={project}
								onClick={() => onProjectClick(project)}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="carousel-progress">
				<div
					className="carousel-progress-bar"
					style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
				/>
			</div>
		</div>
	);
}

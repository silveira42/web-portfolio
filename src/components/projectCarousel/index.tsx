import { useState, useEffect, useCallback, useRef } from 'react';
import { Project } from '../../types/Project';
import ProjectCard from '../projectCard';
import './styles.css';

interface ProjectCarouselProps {
	projects: Project[];
	onProjectClick: (project: Project) => void;
}

export default function ProjectCarousel({ projects, onProjectClick }: ProjectCarouselProps) {
	// Create a multiplied array of projects for infinite loop feeling
	const multipliedProjects = Array.from({ length: projects.length * 20 }, (_, index) => {
		const originalIndex = index % projects.length;
		const repetitionNumber = Math.floor(index / projects.length);
		return {
			...projects[originalIndex],
			id: `${projects[originalIndex].id}-repeat-${repetitionNumber}`
		};
	});

	const [scrollOffset, setScrollOffset] = useState(0); // Pixel offset instead of slide index
	const [cardsToShow, setCardsToShow] = useState(3);
	const [autoScrollKey, setAutoScrollKey] = useState(0); // Key to force useEffect re-run
	const [isDragging, setIsDragging] = useState(false);
	const [containerWidth, setContainerWidth] = useState(0);
	const [isVisible, setIsVisible] = useState(false); // Track if carousel is visible
	const carouselRef = useRef<HTMLDivElement>(null);
	const carouselTrackRef = useRef<HTMLDivElement>(null);
	const dragStateRef = useRef({
		isDragging: false,
		startX: 0,
		startScrollOffset: 0,
		currentScrollOffset: 0
	});

	// Intersection Observer to detect when carousel is visible
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{
				threshold: 0.3, // Trigger when 30% of the carousel is visible
				rootMargin: '0px'
			}
		);

		if (carouselRef.current) {
			observer.observe(carouselRef.current);
		}

		return () => {
			if (carouselRef.current) {
				observer.unobserve(carouselRef.current);
			}
		};
	}, []);

	// Update cards to show based on screen size and track container width
	useEffect(() => {
		const updateCardsToShow = () => {
			const width = window.innerWidth;
			setContainerWidth(width);

			if (width < 768) {
				setCardsToShow(1);
			} else if (width < 1024) {
				setCardsToShow(2);
			} else {
				setCardsToShow(3);
			}
		};

		updateCardsToShow();
		window.addEventListener('resize', updateCardsToShow);

		return () => window.removeEventListener('resize', updateCardsToShow);
	}, []);

	// Calculate pixel movement needed to show next/previous set of cards
	const getSlideWidth = () => {
		const carouselElement = document.querySelector('.project-carousel') as HTMLElement;
		const carouselWidth = carouselElement ? carouselElement.offsetWidth : containerWidth;
		return carouselWidth * 0.75;
	};

	const maxScrollOffset = Math.max(0, (multipliedProjects.length - cardsToShow) * getSlideWidth());

	const goToPrevious = () => {
		setAutoScrollKey(prev => prev + 1); // Reset auto-scroll timer
		const slideWidth = getSlideWidth();
		setScrollOffset(prev => Math.max(0, prev - slideWidth));
	};

	const goToNext = () => {
		setAutoScrollKey(prev => prev + 1); // Reset auto-scroll timer
		const slideWidth = getSlideWidth();
		setScrollOffset(prev => Math.min(maxScrollOffset, prev + slideWidth));
	};

	// Direct DOM manipulation drag functionality - bypasses React state for performance
	const handleDragStart = useCallback((clientX: number) => {
		dragStateRef.current = {
			isDragging: true,
			startX: clientX,
			startScrollOffset: scrollOffset,
			currentScrollOffset: scrollOffset
		};
		setIsDragging(true);
		setAutoScrollKey(prev => prev + 1); // Reset auto-scroll timer
	}, [scrollOffset]);

	const handleDragMove = useCallback((clientX: number) => {
		if (!dragStateRef.current.isDragging || !carouselTrackRef.current) return;

		const dragDistance = clientX - dragStateRef.current.startX;
		const newOffset = dragStateRef.current.startScrollOffset - dragDistance;
		const clampedOffset = Math.max(0, Math.min(maxScrollOffset, newOffset));

		dragStateRef.current.currentScrollOffset = clampedOffset;

		// Direct DOM manipulation - no React state update
		carouselTrackRef.current.style.transform = `translateX(-${clampedOffset}px)`;
	}, [maxScrollOffset]);

	const handleDragEnd = useCallback(() => {
		if (!dragStateRef.current.isDragging) return;

		dragStateRef.current.isDragging = false;
		setIsDragging(false);

		// Sync React state with final position
		setScrollOffset(dragStateRef.current.currentScrollOffset);
	}, []);

	// Mouse events
	const handleMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		handleDragStart(e.clientX);
	};

	// Touch events for mobile with optimized performance
	const handleTouchStart = (e: React.TouchEvent) => {
		e.preventDefault(); // Prevent scrolling
		handleDragStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		e.preventDefault(); // Prevent scrolling
		if (isDragging) {
			handleDragMove(e.touches[0].clientX);
		}
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		e.preventDefault(); // Prevent scrolling
		handleDragEnd();
	};

	// Auto-scroll functionality with timer reset on user interaction
	// Only starts when carousel is visible
	useEffect(() => {
		if (!isVisible) return; // Don't start auto-scroll until carousel is visible

		const interval = setInterval(() => {
			setScrollOffset(prev => {
				const slideWidth = getSlideWidth();
				const nextOffset = prev + slideWidth;
				if (nextOffset >= maxScrollOffset) {
					return 0; // Loop back to start
				}
				return nextOffset;
			});
		}, 8000); // Change slide every 8 seconds

		return () => clearInterval(interval);
	}, [maxScrollOffset, autoScrollKey, containerWidth, isVisible]); // Restart timer when dependencies change

	// Optimized global mouse event listeners using direct DOM manipulation
	useEffect(() => {
		const handleGlobalMouseMove = (e: MouseEvent) => {
			if (dragStateRef.current.isDragging) {
				handleDragMove(e.clientX);
			}
		};

		const handleGlobalMouseUp = () => {
			if (dragStateRef.current.isDragging) {
				handleDragEnd();
			}
		};

		if (isDragging) {
			document.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
			document.addEventListener('mouseup', handleGlobalMouseUp);
		}

		return () => {
			document.removeEventListener('mousemove', handleGlobalMouseMove);
			document.removeEventListener('mouseup', handleGlobalMouseUp);
		};
	}, [isDragging, handleDragMove, handleDragEnd]);

	return (
		<div className="project-carousel" ref={carouselRef}>
			<div className="carousel-header">
				<h2 className="carousel-title column-prompt">Featured Projects</h2>
				<div className="carousel-controls">
					<button
						className="carousel-btn carousel-btn-prev"
						onClick={goToPrevious}
						disabled={scrollOffset === 0}
						aria-label="Previous projects"
					>
						‹
					</button>
					<button
						className="carousel-btn carousel-btn-next"
						onClick={goToNext}
						disabled={scrollOffset >= maxScrollOffset}
						aria-label="Next projects"
					>
						›
					</button>
				</div>
			</div>

			<div
				className="carousel-container"
				onMouseDown={handleMouseDown}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{
					cursor: isDragging ? 'grabbing' : 'grab',
					userSelect: 'none', // Prevent text selection during drag
					touchAction: 'none' // Prevent default touch behaviors
				}}
			>
				<div
					ref={carouselTrackRef}
					className="carousel-track"
					style={{
						transform: `translateX(-${scrollOffset}px)`,
						width: `${multipliedProjects.length * (containerWidth / cardsToShow)}px`,
						transition: isDragging ? 'none' : 'transform 0.3s ease-out'
					}}
				>
					{multipliedProjects.map((project, index) => (
						<div
							key={project.id}
							className="carousel-slide"
						>
							<ProjectCard
								project={project}
								onClick={() => onProjectClick(project)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

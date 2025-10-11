export interface Technology {
	name: string;
	icon: string;
}

export interface Project {
	id: string;
	filename: string;
	icon: string; // SVG path in assets folder
	category: 'front-end' | 'back-end' | 'full-stack' | 'sysadmin';
	title: string;
	description: string;
	gameImage: string;
	technologies: Technology[];
	learnings: string[];
	linkToCode: string;
	linkToDemo?: string;
}

export interface ProjectData {
	[key: string]: Project;
}

export interface ProjectCategory {
	name: string;
	folder: string;
	projects: Project[];
}

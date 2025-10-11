export interface Technology {
	name: string;
	icon: string;
}

// Multilingual content for projects
export interface ProjectContent {
	title: string;
	description: string;
	learnings: string[];
}

export interface Project {
	id: string;
	filename: string;
	icon: string; // SVG path in assets folder
	category: 'front-end' | 'back-end' | 'full-stack' | 'sysadmin';
	// Multilingual content
	content: {
		en: ProjectContent;
		pt_br: ProjectContent;
	};
	// Language-independent data
	gameImage: string;
	technologies: Technology[];
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

export interface Technology {
	name: string;
	iconLightTheme: string;
	iconDarkTheme: string;
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
	iconLightTheme: string;
	iconDarkTheme: string;
	category: 'front-end' | 'back-end' | 'full-stack' | 'sysadmin';
	// Multilingual content
	content: {
		en: ProjectContent;
		pt_br: ProjectContent;
	};
	// Language-independent data
	projectImage: string;
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

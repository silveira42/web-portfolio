import React, { createContext, useContext, ReactNode } from 'react';
import { Project } from '../types/Project';
import { projects, getProjectsByCategory, getProjectById, getProjectByPath, getCategories } from '../data/projects';

interface ProjectContextType {
	projects: Project[];
	getProjectsByCategory: (category: 'front-end' | 'back-end' | 'full-stack' | 'sysadmin') => Project[];
	getProjectById: (id: string) => Project | undefined;
	getProjectByPath: (path: string) => Project | undefined;
	getCategories: () => ('front-end' | 'back-end' | 'full-stack' | 'sysadmin')[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
	children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
	const contextValue: ProjectContextType = {
		projects,
		getProjectsByCategory,
		getProjectById,
		getProjectByPath,
		getCategories,
	};

	return (
		<ProjectContext.Provider value={contextValue}>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProjects = (): ProjectContextType => {
	const context = useContext(ProjectContext);
	if (context === undefined) {
		throw new Error('useProjects must be used within a ProjectProvider');
	}
	return context;
};

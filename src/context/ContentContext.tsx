import { createContext, useContext, useState, ReactNode } from 'react';

interface ContentContextType {
	selectedFile: string;
	setSelectedFile: (file: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentProviderProps {
	children: ReactNode;
}

export function ContentProvider({ children }: ContentProviderProps) {
	const [selectedFile, setSelectedFile] = useState('home.html');

	return (
		<ContentContext.Provider value={{ selectedFile, setSelectedFile }}>
			{children}
		</ContentContext.Provider>
	);
}

export function useContentContext() {
	const context = useContext(ContentContext);
	if (context === undefined) {
		throw new Error('useContentContext must be used within a ContentProvider');
	}
	return context;
}

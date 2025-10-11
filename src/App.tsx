import './reset.css';
import './App.css';
import { useContext } from './AppContext';
import FileTree from './components/fileTree';
import MainContent from './components/mainContent';
import { ContentProvider } from './context/ContentContext';
import { ProjectProvider } from './context/ProjectContext';
import { useState } from 'react';

export default function App() {
	const { theme } = useContext();
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<ProjectProvider>
			<ContentProvider>
				<div className='App' data-theme={theme.getCurrent()}>
					<button
						className="mobile-menu-toggle"
						onClick={() => setSidebarOpen(!sidebarOpen)}
					>
						☰
					</button>
					<div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
						<FileTree onFileSelect={() => setSidebarOpen(false)} />
					</div>
					<div className='main-content'>
						<div className='content-wrapper'>
							<MainContent />
						</div>
					</div>
				</div>
			</ContentProvider>
		</ProjectProvider>
	);
}

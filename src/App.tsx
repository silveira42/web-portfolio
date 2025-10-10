import './reset.css';
import './App.css';
import { useContext } from './AppContext';
import FileTree from './components/fileTree';
import MainContent from './components/mainContent';

export default function App() {
	const { theme } = useContext();
	return (
		<div className='App' data-theme={theme.getCurrent()}>
			<div className='sidebar'>
				<FileTree />
			</div>
			<div className='main-content'>
				<div className='content-wrapper'>
					<MainContent />
				</div>
			</div>
		</div>
	);
}

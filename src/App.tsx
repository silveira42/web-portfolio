import Header from './components/header';
import Home from './pages/home';
import './reset.css';
import './App.css';
import Footer from './components/footer';
import { useContext } from './AppContext';

export default function App() {
	const { theme } = useContext();
	return (
		<div className='App' data-theme={theme.getCurrent()}>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

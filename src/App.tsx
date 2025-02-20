import Header from './components/header';
import Home from './pages/home';
import './reset.css';
import './App.css';
import Footer from './components/footer';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

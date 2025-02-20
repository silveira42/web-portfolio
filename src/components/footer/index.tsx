import { useContext } from '../../AppContext';
import './styles.css';

export default function Footer() {
	const { theme } = useContext();

	return (
		<footer className='footer' data-theme={theme.getCurrent()}>
			<div className='footer-title'>
				<h4>Portfólio de Bruno Silveira</h4>
			</div>
			<div className='footer-menu'>
				<div className='footer-menu-item'>
					<p>Conheça o Silver Hub:</p>
					<a href='https://thesilver.com.br' target='_blank' rel='noreferrer'>
						https://thesilver.com.br
					</a>
				</div>
				<div className='footer-menu-item'>
					<p>Meu LinkedIn:</p>
					<a
						href='https://linkedin.com/in/silveirabruno842'
						target='_blank'
						rel='noreferrer'
					>
						https://linkedin.com/in/silveirabruno842
					</a>
				</div>
				<div className='footer-menu-item'>
					<p>Meu GitHub:</p>
					<a
						href='https://github.com/silveira42'
						target='_blank'
						rel='noreferrer'
					>
						https://github.com/silveira42
					</a>
				</div>
				<h6>Feito com ❤️ por Bruno Silveira</h6>
			</div>
		</footer>
	);
}

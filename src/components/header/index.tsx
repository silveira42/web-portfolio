import './styles.css';

export default function Header() {
	return (
		<header className='header'>
			<div className='header-title'>
				<h2>Bruno Silveira</h2>
			</div>
			<div className='header-menu'>
				<a href='https://thesilver.com.br' target='_blank' rel='noreferrer'>
					SilverHub
				</a>
				<a
					href='https://linkedin.com/in/silveirabruno842'
					target='_blank'
					rel='noreferrer'
				>
					LinkedIn
				</a>
				<a
					href='https://github.com/silveira42'
					target='_blank'
					rel='noreferrer'
				>
					Github
				</a>
			</div>
		</header>
	);
}

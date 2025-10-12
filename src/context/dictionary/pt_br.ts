import Dictionary from './Type';

const pt_brDictionary: Dictionary = {
	portfolio: {
		home: {
			greeting: 'Olá, eu sou',
			name: 'Bruno Silveira',
			role: 'desenvolvedor de software',
			terminalPrompt: 'root@portfolio:~#',
			aboutTitle: 'Sobre mim',
			aboutContent: 'Vivamus ultricies enim finibus orci sollicitudin, non tristique orci interdum. Ut mattis, metus sed tempor faucibus, turpis nisi posuere tortor, id pulvinar quam libero a ligula. Praesent pharetra urna nulla, ac suscipit odio malesuada hendrerit. Duis dictum ex vel sem rutrum rutrum. Morbi quis diam consequat, tempor elit quis, fermentum est.',
			skillsTitle: 'Skills',
			skills: {
				frontend: {
					title: 'Frontend',
					list: 'React • TypeScript • HTML • CSS • JavaScript'
				},
				backend: {
					title: 'Backend',
					list: 'Node.js • Python • Kafka • APIs RESTful'
				},
				devops: {
					title: 'DevOps & Infraestrutura',
					list: 'Docker • Nginx • Git • Linux • Redes'
				}
			}
		},
		contact: {
			title: 'Contato',
			email: 'email',
			phone: 'celular',
			linkedin: 'linkedIn',
			github: 'github',
			location: 'localização',
			emailValue: 'silverdev42@gmail.com',
			phoneValue: '+55 11 93448-0842',
			linkedinValue: 'linkedin.com/in/silveirabruno842',
			githubValue: 'github.com/silveira42',
			locationValue: 'São Paulo, Brasil',
		},
		projects: {
			notFound: 'Projeto não encontrado',
			categoryLabel: 'projeto',
			stackLabel: 'Stack',
			learningsLabel: 'O que eu aprendi',
			viewCode: '📋 Ver código',
			viewDemo: '🚀 Ver demonstração'
		},
		fileTree: {
			welcome: 'bem-vindo-ao-meu-portfolio',
			openGithub: 'abrir-github.sh',
			openLinkedin: 'abrir-linkedin.sh',
			projects: 'projetos',
			lightMode: 'modo-claro.css',
			darkMode: 'modo-escuro.css',
			config: 'config',
			language: 'idioma',
			theme: 'tema',
		},
		navigation: {
			confirmDialog: 'Você está prestes a abrir {url} em uma nova aba. Confirma?'
		},
		language: {
			switchTo: 'Switch to English'
		}
	},
	common: {
		or: 'ou',
		and: 'e',
		greeting: 'Olá',
		close: 'Fechar',
		loading: 'Carregando...'
	}
};

export default pt_brDictionary;

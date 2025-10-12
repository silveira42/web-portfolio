import Dictionary from './Type';

const enDictionary: Dictionary = {
	portfolio: {
		home: {
			greeting: 'Hello, I am',
			name: 'Bruno Silveira',
			role: 'software developer',
			terminalPrompt: 'root@portfolio:~#',
			aboutTitle: 'About me',
			aboutContent: 'Experienced software developer passionate about creating efficient and scalable solutions. I work with modern technologies and always strive to deliver clean, maintainable code that meets business requirements.',
			skillsTitle: 'Skills',
			skills: {
				frontend: {
					title: 'Frontend',
					list: 'React • TypeScript • HTML • CSS • JavaScript'
				},
				backend: {
					title: 'Backend',
					list: 'Node.js • Python • Kafka • RESTful APIs'
				},
				devops: {
					title: 'DevOps & Infrastructure',
					list: 'Docker • Nginx • Git • Linux • Networks'
				}
			}
		},
		fileTree: {
			welcome: 'welcome-to-my-portfolio',
			openGithub: 'open-github.sh',
			openLinkedin: 'open-linkedin.sh',
			projects: 'projects',
			lightMode: 'light-mode.css',
			darkMode: 'dark-mode.css',
			config: 'config',
			language: 'language',
			theme: 'theme',
		},
		projects: {
			notFound: 'Project not found',
			categoryLabel: 'project',
			stackLabel: 'Stack',
			learningsLabel: 'What I learned',
			viewCode: '📋 View code',
			viewDemo: '🚀 View demo'
		},
		navigation: {
			confirmDialog: 'You are about to open {url} in a new tab. Confirm?'
		},
		language: {
			switchTo: 'Mudar para Português'
		}
	},
	common: {
		or: 'or',
		and: 'and',
		greeting: 'Hello',
		close: 'Close',
		loading: 'Loading...'
	}
};

export default enDictionary;

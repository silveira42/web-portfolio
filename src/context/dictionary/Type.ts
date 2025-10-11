type Dictionary = {
	// Portfolio-specific translations
	portfolio: {
		home: {
			greeting: string;
			name: string;
			role: string;
			terminalPrompt: string;
			aboutTitle: string;
			aboutContent: string;
			skillsTitle: string;
			skills: {
				frontend: {
					title: string;
					list: string;
				};
				backend: {
					title: string;
					list: string;
				};
				devops: {
					title: string;
					list: string;
				};
			};
		};
		projects: {
			notFound: string;
			categoryLabel: string;
			stackLabel: string;
			learningsLabel: string;
			viewCode: string;
			viewDemo: string;
		};
		fileTree: {
			welcome: string;
			openGithub: string;
			openLinkedin: string;
		};
		navigation: {
			confirmDialog: string;
		};
		language: {
			switchTo: string;
		};
	};
	// Common UI elements
	common: {
		or: string;
		and: string;
		greeting: string;
		close: string;
		loading: string;
	};
};

export default Dictionary;

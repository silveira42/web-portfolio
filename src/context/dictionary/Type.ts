type Dictionary = {
	or: string;
	and: string;
	greeting: string;
	userName: string;
	close: string;
	welcomeBack: string;
	welcome: string;
	loading: string;
	signup: {
		self: string;
		action: string;
		fullName: string;
		nickName: string;
		fiscalId: string;
		dateOfBirth: string;
		email: string;
		password: string;
		phone: string;
		username: string;
		gender: {
			self: string;
			notDeclared: string;
			nonBinary: string;
			male: string;
			female: string;
		};
	};
	login: {
		self: string;
	};
	bank: {
		self: string;
		balance: string;
		reserved: string;
		total: string;
	};
	creditBank: {
		self: string;
		currentBill: string;
		remainingAmount: string;
		statementAmount: string;
		closureDay: string;
		reserved: string;
		total: string;
	};
	menu: {
		dashboard: string;
		transactions: string;
		banks: string;
		credit: string;
		settings: string;
		creditBanks: string;
		categories: string;
		periods: string;
	};
};

export default Dictionary;

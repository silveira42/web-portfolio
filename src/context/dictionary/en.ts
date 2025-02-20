import Dictionary from './Type';

const enDictionary: Dictionary = {
	or: 'or',
	and: 'and',
	greeting: 'Hello',
	userName: 'User',
	close: 'Close',
	welcomeBack: 'Welcome back!',
	welcome: 'Welcome!',
	loading: 'Loading...',
	signup: {
		self: 'Signup',
		action: 'Sign up',
		fullName: 'Full name',
		nickName: 'Nickname',
		fiscalId: 'Fiscal ID',
		dateOfBirth: 'Date of birth',
		email: 'E-mail',
		password: 'Password',
		phone: 'Phone',
		username: 'Username',
		gender: {
			self: 'Gender',
			notDeclared: 'Not declared',
			nonBinary: 'Non binary',
			male: 'Male',
			female: 'Female',
		},
	},
	login: {
		self: 'Login',
	},
	bank: {
		self: 'Bank',
		balance: 'Balance',
		reserved: 'Reserved',
		total: 'Total',
	},
	creditBank: {
		self: 'Credit bank',
		currentBill: 'Current bill',
		closureDay: 'Closure day',
		remainingAmount: 'Remaining amount',
		statementAmount: 'Statement amount',
		reserved: 'Reserved',
		total: 'Total',
	},
	menu: {
		dashboard: 'Dashboard',
		transactions: 'Transactions',
		banks: 'Banks',
		credit: 'Credit',
		settings: 'Settings',
		creditBanks: 'Credit banks',
		categories: 'Categories',
		periods: 'Periods',
	},
};

export default enDictionary;

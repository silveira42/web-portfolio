import React from 'react';
import { Theme, Themes } from './context/model/Theme';
import { Currencies, Intl, Languages } from './context/model/Intl';
import pt_brDictionary from './context/dictionary/pt_br';
import useLocalStorage from './util/useLocalStorage';
import enDictionary from './context/dictionary/en';

const theme: Theme = {
	getCurrent: () => localStorage.getItem('theme') as keyof Themes,
	toggleTheme: () => {},
};

const intl: Intl = {
	getLanguage: () => localStorage.getItem('language') as keyof Languages,
	getCurrency: () => localStorage.getItem('currency') as keyof Currencies,
	getDictionary: () => pt_brDictionary,
	changeLanguage: (language: keyof Languages) => {},
	changeCurrency: (currency: keyof Currencies) => {},
};

const AppContext = React.createContext({
	theme: theme,
	intl: intl,
});

export const AppContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [currentTheme, setCurrentTheme] = useLocalStorage<keyof Themes>(
		'theme',
		theme.getCurrent()
	);
	const [currentLanguage, setCurrentLanguage] = useLocalStorage<
		keyof Languages
	>('language', intl.getLanguage());
	const [currentCurrency, setCurrentCurrency] = useLocalStorage<
		keyof Currencies
	>('currency', intl.getCurrency());

	theme.getCurrent = () => currentTheme;
	theme.toggleTheme = () => {
		setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
	};

	intl.getLanguage = () => currentLanguage;
	intl.getCurrency = () => currentCurrency;
	intl.changeLanguage = (language: keyof Languages) => {
		setCurrentLanguage(language);
	};
	intl.changeCurrency = (currency: keyof Currencies) => {
		setCurrentCurrency(currency);
	};

	switch (currentLanguage) {
		case 'en':
			intl.getDictionary = () => enDictionary;
			break;
		case 'pt_br':
			intl.getDictionary = () => pt_brDictionary;
			break;
		default:
			intl.getDictionary = () => pt_brDictionary;
	}

	return (
		<AppContext.Provider value={{ theme, intl }}>
			{children}
		</AppContext.Provider>
	);
};

export const useContext = () => React.useContext(AppContext);

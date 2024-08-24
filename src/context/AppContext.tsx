import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface AppContextProps {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    themeColor: string;
    setThemeColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}

interface AppProviderProps {
    children: ReactNode; // Explicitly define the children prop
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState<string>('Your City');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [themeColor, setThemeColor] = useState<string>('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState<string>('#f5f5f5');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <AppContext.Provider
            value={{
                selectedCity,
                setSelectedCity,
                theme,
                toggleTheme,
                themeColor,
                setThemeColor,
                backgroundColor,
                setBackgroundColor,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

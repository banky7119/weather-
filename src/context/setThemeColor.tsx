import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface AppContextProps {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    themeColor: string;
    setThemeColor: (color: string) => void;
    backgroundColor: string;
    setBackgroundColor: (color: string) => void;
}

// Create the context with a default value of undefined
export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

// Define the AppProvider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState<string>('Your City');
    const [themeColor, setThemeColor] = useState<string>('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState<string>('#f5f5f5');

    return (
        <AppContext.Provider
            value={{
                selectedCity,
                setSelectedCity,
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

// Custom hook to use the context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';
import RightSideBar from './components/RightSideBar';
import './App.css';

const ThemeToggleButton: React.FC = () => {
    const { toggleTheme, theme } = useAppContext();  // Ensure useAppContext is used correctly

    return (
        <button
            className="theme-toggle-button"
            onClick={toggleTheme}
        >
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

const AppContent: React.FC = () => {
    return (
        <div className="app">
            <ThemeToggleButton />
            <Sidebar />
            <MainContent />
            <RightSideBar />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
};

export default App;

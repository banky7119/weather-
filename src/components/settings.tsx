import React from 'react';
import { useAppContext } from '../context/AppContext';
import './styles/settings.css';

const Settings: React.FC = () => {
    const { themeColor, setThemeColor, backgroundColor, setBackgroundColor } = useAppContext();

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div className="setting-item">
                <label>Theme Color:</label>
                <input
                    type="color"
                    value={themeColor}
                    onChange={e => setThemeColor(e.target.value)}
                />
            </div>
            <div className="setting-item">
                <label>Background Color:</label>
                <input
                    type="color"
                    value={backgroundColor}
                    onChange={e => setBackgroundColor(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Settings;

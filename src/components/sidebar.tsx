import React from 'react';
import './styles/sidebar.css';

// Define the Sidebar component as a functional component using TypeScript
const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">Weather</div>
            <div className="sidebar-item">Cities</div>
            <div className="sidebar-item">Map</div>
            <div className="sidebar-item">Settings</div>
        </div>
    );
};

export default Sidebar;


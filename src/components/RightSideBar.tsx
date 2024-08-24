import React from 'react';
import './styles/RightSideBar.css';


const weatherData = [
    { day: 'Mon', icon: '☀️', temperature: '24°C' },
    { day: 'Tue', icon: '🌤️', temperature: '22°C' },
    { day: 'Wed', icon: '🌦️', temperature: '20°C' },
    { day: 'Thu', icon: '🌧️', temperature: '18°C' },
    { day: 'Fri', icon: '🌩️', temperature: '19°C' },
    { day: 'Sat', icon: '🌨️', temperature: '15°C' },
    { day: 'Sun', icon: '🌥️', temperature: '21°C' },
];


const RightSidebar: React.FC = () => {
    return (
        <div className="right-sidebar">
            <div className="right-sidebar-logo">MyApp</div>
            <div className="right-sidebar-item">Notifications</div>
            <div className="right-sidebar-item">Messages</div>
           
            <div className="right-sidebar-item">Profile</div>
            <div className="forecast">
                <h3>7-Day Forecast</h3>
                <div className="forecast-list">
                    {weatherData.map((item, index) => (
                        <div key={index} className="forecast-item">
                            <p className="day">{item.day}</p>
                            <p className="icon">{item.icon}</p>
                            <p className="temperature">{item.temperature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;

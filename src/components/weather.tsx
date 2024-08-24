import React from 'react';
import { useAppContext } from '../context/AppContext';
import './styles/weather.css';

const Weather: React.FC = () => {
    const { selectedCity } = useAppContext();

    const weatherData = {
        city: selectedCity,
        description: 'Sunny',
        temperature: 25,
        forecast: [
            { time: '6:00 AM', temperature: 20, icon: '☀️' },
            { time: '9:00 AM', temperature: 22, icon: '☀️' },
            { time: '12:00 PM', temperature: 25, icon: '☀️' },
            { time: '3:00 PM', temperature: 27, icon: '☀️' },
            { time: '6:00 PM', temperature: 26, icon: '☀️' },
            { time: '9:00 PM', temperature: 22, icon: '🌙' },
        ],
    };

    return (
        <div className="weather">
            <h1>{weatherData.city}</h1>
            <p>{weatherData.description}</p>
            <p>{weatherData.temperature}°C</p>
            <h3>Tomorrow's Forecast</h3>
            <div className="forecast">
                {weatherData.forecast.map((item, index) => (
                    <div key={index} className="forecast-item">
                        <p>{item.time}</p>
                        <p>{item.icon}</p>
                        <p>{item.temperature}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Weather;

import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import './styles/weather.css';

// Define the shape of the weather data you expect from the API
interface WeatherData {
    city: string;
    description: string;
    temperature: number;
    forecast: { time: string; temperature: number; icon: string }[];
}

const Weather: React.FC = () => {
    const { selectedCity } = useAppContext();
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/weather?city=${selectedCity}`)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }, [selectedCity]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

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

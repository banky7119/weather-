import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import './styles/cities.css';

const Cities: React.FC = () => {
    const { setSelectedCity } = useAppContext();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const cities = ['New York', 'Los Angeles', 'Chicago', 'London', 'Paris'];

    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cities">
            <input
                type="text"
                placeholder="Search for cities..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredCities.map(city => (
                    <li key={city} onClick={() => setSelectedCity(city)}>
                        {city}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cities;

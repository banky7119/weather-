const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || "G6xDI3de4uRyJdx9GWKwnJUspM3A0AUa"; // Use environment variable if possible

app.get('/weather', async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    try {
        const response = await axios.get('https://api.tomorrow.io/v4/weather/forecast', {
            params: {
                location: `${lat},${lon}`,
                apikey: WEATHER_API_KEY,
                units: '60', // Adjust according to your needs
            },
        });

        // Adjust response handling based on the actual data structure from Tomorrow.io
        const weatherData = response.data;

        res.json({
            temperature: weatherData.temperature, // Adjust based on the actual response structure
            description: weatherData.weather.description,
            icon: weatherData.weather.icon,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

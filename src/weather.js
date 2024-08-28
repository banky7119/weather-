fetch('http://localhost:5000/weather?city=London')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Update your UI with the weather data here
    })
    .catch(error => console.error('Error fetching weather data:', error));

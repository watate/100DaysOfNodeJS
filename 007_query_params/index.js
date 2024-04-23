const express = require('express');
const app = express();
const port = 3000;

// http://localhost:3000/weather?city=London&unit=celsius

const weatherData = {
    "London": { weather: "Rainy", tempC: 15 },
    "New York": { weather: "Cloudy", tempC: 18 },
    "Tokyo": { weather: "Sunny", tempC: 22 },
    "Sydney": { weather: "Windy", tempC: 20 },
    "Moscow": { weather: "Snowy", tempC: -5 }
};

const cToF = (celsius) => {
    return celsius * 1.8 + 32;
}


app.get("/weather", (req, res) => {
    const city = req.query.city;
    const unit = req.query.unit;
    if (unit === "celsius") {
        res.json({
            city: city,
            weather: weatherData[city].weather,
            temperature: weatherData[city].tempC
        })
    } else {
        res.json({
            city: city,
            weather: weatherData[city].weather,
            temperature: cToF(weatherData[city].tempC)
        })
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
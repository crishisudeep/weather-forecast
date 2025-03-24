let map = L.map('map').setView([20, 0], 2);  // Centered on the world

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

let cities = [
    { name: "New York", lat: 40.7128, lon: -74.0060 },
    { name: "London", lat: 51.5074, lon: -0.1278 },
    { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
    { name: "Delhi", lat: 28.6139, lon: 77.2090 },
    { name: "Sydney", lat: -33.8688, lon: 151.2093 },
    { name: "Paris", lat: 48.8566, lon: 2.3522 },
    { name: "Moscow", lat: 55.7558, lon: 37.6173 },
    { name: "Beijing", lat: 39.9042, lon: 116.4074 },
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago", lat: 41.8781, lon: -87.6298 },
    { name: "Toronto", lat: 43.65107, lon: -79.347015 },
    { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
    { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
    { name: "Dubai", lat: 25.276987, lon: 55.296249 },
    { name: "Istanbul", lat: 41.0082, lon: 28.9784 },
    { name: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
    { name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
    { name: "Cairo", lat: 30.0444, lon: 31.2357 },
    { name: "Seoul", lat: 37.5665, lon: 126.9780 },
    { name: "Bangkok", lat: 13.7563, lon: 100.5018 },
    { name: "Jakarta", lat: -6.2088, lon: 106.8456 },
    { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
    { name: "Berlin", lat: 52.5200, lon: 13.4050 },
    { name: "Madrid", lat: 40.4168, lon: -3.7038 },
    { name: "Rome", lat: 41.9028, lon: 12.4964 },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
    { name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869 },
    { name: "Manila", lat: 14.5995, lon: 120.9842 }
];


let apiKey = "7717c69566a825669299d10c9d270c32";  // Replace with OpenWeatherMap API key

cities.forEach(async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    let popupContent = `
        <h3>${city.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;

    L.marker([city.lat, city.lon])
        .addTo(map)
        .bindPopup(popupContent);
});

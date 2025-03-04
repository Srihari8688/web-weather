
import { useState, useEffect } from "react";
import axios from "axios";

const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "0156f28db6be787c6a8a1111ec90234d";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(API_URL);
        setWeather(response.data);
      } catch (err) {
        setError("City not found. Please try again.");
      }
      setLoading(false);
    };

    if (city) fetchWeather();
  }, [city]);

  if (loading)
    return <p className="text-center text-lg font-semibold text-gray-800">⏳ Loading...</p>;

  if (error)
    return <p className="text-center text-lg font-semibold text-red-500">{error}</p>;

  if (!weather) return null;

  return (
    <div className="mt-6 p-6 max-w-sm bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg text-center transition transform hover:scale-105 " >
            {/* // <div className="main"> */}
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p className="text-lg capitalize">{weather.weather[0].description}</p>
      <p className="text-5xl font-semibold my-2">{weather.main.temp}°C</p>
    {/*<img
    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt="Weather Icon"
    className="mx-auto"
  />*/} 
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <p className="bg-white/20 p-2 rounded-lg">💨 Wind: {weather.wind.speed} m/s</p>
        <p className="bg-white/20 p-2 rounded-lg">💧 Humidity: {weather.main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;


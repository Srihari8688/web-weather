

import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import "./index.css";

export default function App() {
  const [city, setCity] = useState("");

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
    <div className="main" >
      <h1 className="text-3xl font-bold mb-6"  >🌤 Weather App</h1>
      <SearchBar onSearch={setCity} />
      {city && <WeatherCard city={city} />}
    </div>
  );
}


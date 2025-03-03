import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") onSearch(city);
  };

  return (
    // <div className="flex space-x-2">
    <div className="main" style={{"display":"inline"}}>
      <input
        type="text"
        placeholder="Enter city name"
        className="p-2 border rounded-md"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

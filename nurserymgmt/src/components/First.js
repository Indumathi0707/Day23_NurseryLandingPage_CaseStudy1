import React, { useState } from "react";
import "./First.css";

function First() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const locations = ["Chennai", "Bangalore", "Mumbai", "Delhi"];
  const flowers = ["Rose", "Lily", "Tulip", "Sunflower", "Jasmine"];

  return (
    <div className="first">
      <h2>Creating the Nursery Page</h2>
      <p>
        Welcome to our beautiful nursery! Explore our wide variety of flowers
        and plants.
      </p>

      <div className="location-selector">
        <label htmlFor="location">Select your location: </label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {locations.map((location, index) => (
            <option
              key={index}
              value={location}
              selected={location === "Bangalore"}
            >
              {location}
            </option>
          ))}
        </select>
      </div>

      <div className="flowers-section">
        <h3>Our Flowers:</h3>
        <ul className="flower-list">
          {flowers.map((flower, index) => (
            <li key={index}>
              {flower}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default First;

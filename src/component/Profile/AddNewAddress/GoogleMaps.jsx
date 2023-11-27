import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

export const GoogleMaps = () => {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user's location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []); // Run once when component mounts

  const center = currentLocation || { lat: -34.397, lng: 150.644 }; // Default center if currentLocation is not available

  const onMapLoad = (map) => {
    setMap(map);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCCfkOqB3TTsRb4RaARSnAVwsox83s0eRA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15} // Adjust the zoom level for better visibility
        onLoad={onMapLoad}
      >
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;

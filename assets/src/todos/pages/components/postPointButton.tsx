import React, { useState } from "react";

const RandomPointButton = () => {
  // We don't need to store any state in this component if we're only sending a random point
  // However, if you want to display the point or the response, you can use useState here

  const handleSubmit = async () => {
    // Generate a random point within specified ranges
    const latitude = (Math.random() * 180 - 90).toFixed(6); // Latitude between -90 and 90
    const longitude = (Math.random() * 360 - 180).toFixed(6); // Longitude between -180 and 180

    const data = {
      latitude,
      longitude,
    };

    try {
      const response = await fetch('/api/add_location/', { // Ensure the endpoint matches your Django URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Successfully posted random point:", result);
      // You can set state here if you want to display something based on the response
    } catch (error) {
      console.error("Could not post random point", error);
      // Handle errors here, such as updating the UI to reflect the failure
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={handleSubmit}>
        Send Random Point to Database
      </button>
    </div>
  );
};

export default RandomPointButton;

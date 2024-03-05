import React, { useState } from "react";

const PostButton = () => {
  // Inside one of your React components
  const [studentName, setStudentName] = useState("");

  const handleSubmit = async () => {
    const data = {
      name: studentName,
    };

    try {
      const response = await fetch("/create-item/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      // Handle success
    } catch (error) {
      console.error("Could not post data", error);
      // Handle errors here
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <input
        style={{ marginBottom: "10px" }}
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleSubmit}>hei</button>
    </div>
  );
};

export default PostButton;

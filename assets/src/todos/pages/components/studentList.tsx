import React, { useState, useEffect } from "react";

const NamesList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/list-items/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setStudents(data); // Assuming the API returns an array of names
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;

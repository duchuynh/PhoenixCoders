// src/pages/HomePage.js
import React, { useState } from 'react';
import MealForm from '../MealForm/MealForm';

function Home() {
  const [meals, setMeals] = useState([]);

  const generateMeals = async (people) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/meals/?number_of_people=${people}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  return (
    <div className="Home">
      <h1>Meal Planner</h1>
      <MealForm onGenerateMeals={generateMeals} />
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {meals.map((meal, index) => (
          <li key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
            {meal}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
import React, { useState } from 'react';

function MealForm({ onGenerateMeals }) {
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateMeals(people);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
      <label>
        Number of People:
        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          style={{ margin: '10px 0', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </label>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Generate Meals
      </button>
    </form>
  );
}

export default MealForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import './Onboarding.css';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedCuisines, setSelectedCuisines] = useState([]); // State to hold selected cuisines
  const [selectedRestrictions, setSelectedRestrictions] = useState([]); // State to hold dietary restrictions
  const [skillLevel, setSkillLevel] = useState(1); // State to hold cooking skill level
  const navigate = useNavigate();

  const cuisines = ['Japanese', 'Italian', 'Mexican', 'Chinese', 'Indian', 'French', 'Mediterranean', 'Thai'];
  const restrictions = ['Gluten-Free', 'Vegan', 'Vegetarian', 'Dairy-Free', 'Nut-Free', 'Soy-Free'];

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisines((prevSelected) => {
      if (prevSelected.includes(cuisine)) {
        return prevSelected.filter((c) => c !== cuisine);
      } else {
        return [...prevSelected, cuisine];
      }
    });
  };

  const handleRestrictionChange = (restriction) => {
    setSelectedRestrictions((prevSelected) => {
      if (prevSelected.includes(restriction)) {
        return prevSelected.filter((r) => r !== restriction);
      } else {
        return [...prevSelected, restriction];
      }
    });
  };

  const handleSkillChange = (e) => {
    setSkillLevel(parseInt(e.target.value));
  };

  const handleNext = async () => {
    if (step === 1) {
      // Move to next step
      setStep(2);
    } else if (step === 2) {
      // Move to next step
      setStep(3);
    } else if (step === 3) {
      // Final step - submit data
      try {
        const response = await api.post('/api/onboarding', {
          cuisines: selectedCuisines.join(','),
          restrictions: selectedRestrictions.join(','),
          skill_level: skillLevel,
        });
        console.log('Onboarding data submitted:', response.data);
        navigate('/home');
      } catch (error) {
        console.error('Error during onboarding:', error);
      }
    }
  };

  return (
    <div className="onboarding-container">
      <h2>Onboarding</h2>
      
      {/* Step 1: Select Cuisines */}
      {step === 1 && (
        <div className="onboarding-step">
          <h3>Select Your Cuisine Preferences</h3>
          <div className="checkbox-group">
            {cuisines.map((cuisine) => (
              <label key={cuisine} className="option-button">
                <span>{cuisine}</span>
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(cuisine)}
                  onChange={() => handleCuisineChange(cuisine)}
                />
                <span className="checkbox-custom"></span>
              </label>
            ))}
          </div>
          <button className="onboarding-button" onClick={handleNext}>Next</button>
        </div>
      )}

      {/* Step 2: Select Dietary Restrictions */}
      {step === 2 && (
        <div className="onboarding-step">
          <h3>Select Your Dietary Restrictions</h3>
          <div className="checkbox-group">
            {restrictions.map((restriction) => (
              <label key={restriction} className="option-button">
                <span>{restriction}</span>
                <input
                  type="checkbox"
                  checked={selectedRestrictions.includes(restriction)}
                  onChange={() => handleRestrictionChange(restriction)}
                />
                <span className="checkbox-custom"></span>
              </label>
            ))}
          </div>
          <button className="onboarding-button" onClick={handleNext}>Next</button>
        </div>
      )}

      {/* Step 3: Rate Cooking Skill */}
      {step === 3 && (
        <div className="onboarding-step">
          <h3>Rate Your Cooking Skill Level</h3>
          <div className="radio-group">
            {[1, 2, 3, 4, 5].map((level) => (
              <label key={level} className="radio-label">
                <input
                  type="radio"
                  value={level}
                  checked={skillLevel === level}
                  onChange={handleSkillChange}
                />
                {level} ({["Beginner", "Novice", "Intermediate", "Advanced", "Expert"][level - 1]})
              </label>
            ))}
          </div>
          <button className="onboarding-button" onClick={handleNext}>Finish Onboarding</button>
        </div>
      )}
    </div>
  );
}

export default Onboarding;

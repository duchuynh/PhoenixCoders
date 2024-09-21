import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setChecked(false); // Reset the checkbox for the next step
    } else {
      navigate('/home');
    }
  };

  return (
    <div>
      <h2>Onboarding</h2>
      {step === 1 && (
        <div>
          <h3>Select Your Cuisine Preferences</h3>
          <label>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            I have selected my cuisine preferences
          </label>
          {checked && <button onClick={handleNext}>Next</button>}
        </div>
      )}
      {step === 2 && (
        <div>
          <h3>Select Your Dietary Restrictions</h3>
          <label>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            I have selected my dietary restrictions
          </label>
          {checked && <button onClick={handleNext}>Next</button>}
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Rate Your Cooking Skill Level</h3>
          <label>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            I have rated my cooking skill level
          </label>
          {checked && <button onClick={handleNext}>Finish Onboarding</button>}
        </div>
      )}
    </div>
  );
}

export default Onboarding;
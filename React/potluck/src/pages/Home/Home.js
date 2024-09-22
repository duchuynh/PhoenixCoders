import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api'; // Your axios setup
import './Home.css';

function Home() {
  const [userData, setUserData] = useState(null);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [invitees, setInvitees] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data after onboarding
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('user_id'); // Assuming userId is stored in local storage
        const response = await api.get(`/api/user/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('user_id'); // Ensure this is available
    try {
      const response = await api.post('/api/create-event', {
        user_id: userId,
        name: eventName,
        date: eventDate,
        time: eventTime,
        location: eventLocation,
        invitees: invitees.split(','), // Split by comma to create an array of invitees
      });
      console.log('Event created:', response.data);
      // Redirect or update the UI after event creation
      navigate('/event-success'); // Or any other route after successful event creation
    } catch (error) {
      console.error('Failed to create event:', error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  return (
    <div className="home-container">
      <h2>Welcome, {userData.first_name}!</h2>
      <div className="preferences">
        <h3>Your Preferences:</h3>
        <p><strong>Preferred Cuisines:</strong> {userData.cuisines.join(', ')}</p>
        <p><strong>Dietary Restrictions:</strong> {userData.restrictions.join(', ')}</p>
        <p><strong>Cooking Skill Level:</strong> {userData.skill_level}</p>
      </div>

      <div className="create-event-form">
        <h3>Create a Potluck Event</h3>
        <form onSubmit={handleCreateEvent}>
          <div>
            <label>Event Name:</label>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Invitees (comma-separated emails):</label>
            <input
              type="text"
              value={invitees}
              onChange={(e) => setInvitees(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="create-event-button">Create Event</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import FeedbackForm from '../components/FeedbackForm';
import FeedbackDisplay from '../components/FeedbackDisplay';
import GoogleLogin from '../components/GoogleLogin';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [stats, setStats] = useState([]);


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/stats');
        const data = await response.json();
        setStats(data.stats);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  const handleLogin = async (tokenId) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokenId }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
        setUserId(data.user.userId);
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  const handleSubmitFeedback = async (feedback) => {
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...feedback, userId }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Feedback submitted successfully');
      } else {
        console.error('Failed to submit feedback:', data.message);
      }
    } catch (err) {
      console.error('Error submitting feedback:', err);
    }
  };

  return (
    <div>
      <h1>Customer Feedback Platform</h1>
      {!isLoggedIn && <GoogleLogin onLogin={handleLogin} />}
      {isLoggedIn && (
        <>
          <h2>Welcome back!</h2>
          <FeedbackForm onSubmit={handleSubmitFeedback} />
        </>
      )}
      <FeedbackDisplay stats={stats} />
    </div>
  );
};

export default Home;

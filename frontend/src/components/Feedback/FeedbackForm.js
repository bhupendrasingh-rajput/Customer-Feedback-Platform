import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const FeedbackForm = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');
  const { getAccessTokenSilently } = useAuth0();

  const submitFeedback = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios.post('http://localhost:5000/api/feedback', { category, rating, comments }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '5vh' }}>
      <h2>Feedback Form</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '30vw', height: '6vh' }}>
        <option value="Product Features">Product Features</option>
        <option value="Product Pricing">Product Pricing</option>
        <option value="Product Usability">Product Usability</option>
      </select>
      <input
        type="number"
        placeholder='Enter rating'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        style={{ width: '30vw', height: '6vh' }}
      />
      <textarea
        placeholder='Enter Comments'
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        style={{ width: '30vw', height: '6vh' }}
      />
      <button onClick={submitFeedback} style={{ width: '30vw', height: '6vh' }}>Submit</button>
    </div>
  );
};

export default FeedbackForm;

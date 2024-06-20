import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const FeedbackForm = () => {
  const [category, setCategory] = useState('Product Features');
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
    <div>
      <h2>Submit Feedback</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Product Features">Product Features</option>
        <option value="Product Pricing">Product Pricing</option>
        <option value="Product Usability">Product Usability</option>
      </select>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button onClick={submitFeedback}>Submit</button>
    </div>
  );
};

export default FeedbackForm;

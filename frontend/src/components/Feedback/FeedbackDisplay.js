import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDisplay = () => {
  const [feedbackData, setFeedbackData] = useState({});

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('/api/feedback/ProductFeatures');
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Feedback Display</h2>
      <h3>Product Features</h3>
      <p>Rating: {feedbackData.rating}</p>
      <p>Comments: {feedbackData.comments}</p>
    </div>
  );
};

export default FeedbackDisplay;

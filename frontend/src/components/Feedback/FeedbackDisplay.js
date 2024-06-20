import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDisplay = () => {
  const [feedbackData, setFeedbackData] = useState({
    ProductFeatures: {},
    ProductPricing: {},
    ProductUsability: {}
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async (category) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/feedback/${category}`);
        setFeedbackData(prevData => ({
          ...prevData,
          [category]: response.data
        }));
      } catch (error) {
        console.error(`Error fetching feedback for ${category}`, error);
        setError(`Error fetching feedback for ${category}`);
      }
    };

    fetchFeedback('ProductFeatures');
    fetchFeedback('ProductPricing');
    fetchFeedback('ProductUsability');
  }, []);

  return (
    <div>
      <h2>Feedback Display</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {Object.entries(feedbackData).map(([category, data]) => (
        <div key={category}>
          <h3>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
          <p>Rating: {data.rating}</p>
          <p>Comments: {data.comments}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackDisplay;

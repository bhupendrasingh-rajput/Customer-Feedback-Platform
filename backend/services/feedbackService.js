const axios = require('axios');
const { apiKey, projectId } = require('../config/frillConfig');

exports.submitFeedback = async ({ category, rating, comments }) => {
  const response = await axios.post(`https://api.frill.co/v1/projects/${projectId}/feedback`, {
    category,
    rating,
    comments
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
};

exports.getFeedbackByCategory = async (category) => {
  const response = await axios.get(`https://api.frill.co/v1/projects/${projectId}/feedback?category=${category}`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data;
};

const feedbackService = require('../services/feedbackService');

exports.submitFeedback = async (req, res) => {
  try {
    const { category, rating, comments } = req.body;
    await feedbackService.submitFeedback({ category, rating, comments });
    res.status(201).send('Feedback submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting feedback');
  }
};

exports.getFeedbackByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const feedback = await feedbackService.getFeedbackByCategory(category);
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).send('Error retrieving feedback');
  }
};

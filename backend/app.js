const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();

// Middleware
app.use(bodyParser.json());

// Auth0 middleware
const checkJwt = auth({
  audience: 'YOUR_API_IDENTIFIER',
  issuerBaseURL: `https://YOUR_AUTH0_DOMAIN/`
});

app.use('/api/auth', authRoutes);
app.use('/api/feedback', checkJwt, feedbackRoutes);

module.exports = app;

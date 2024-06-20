const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const { auth } = require('express-oauth2-jwt-bearer');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Auth0 middleware
const checkJwt = auth({
  audience: `${process.env.API_IDENTIFIER}`,
  issuerBaseURL: `${process.env.BASE_URL}`
});

app.use('/api/auth', authRoutes);
app.use('/api/feedback', checkJwt, feedbackRoutes);

module.exports = app;

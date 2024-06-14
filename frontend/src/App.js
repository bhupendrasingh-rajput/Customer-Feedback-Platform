import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Auth/Login';
import FeedbackForm from './components/Feedback/FeedbackForm';
import FeedbackDisplay from './components/Feedback/FeedbackDisplay';

const App = () => {
  return (
    <Auth0Provider
      domain="dev-exhxz5nsz2r7b7as.us.auth0.com"
      clientId="xYpurYzlS4ojvDEBvUYDdeNRTzSkFZCF"
      redirectUri={window.location.origin}
      audience="https://dev-exhxz5nsz2r7b7as.us.auth0.com/api/v2/"
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/display-feedback" element={<FeedbackDisplay />} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;

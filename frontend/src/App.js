import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './components/Auth/Login';
import FeedbackForm from './components/Feedback/FeedbackForm';
import FeedbackDisplay from './components/Feedback/FeedbackDisplay';
import AuthCallback from './components/Auth/AuthCallback';

const App = () => {
  return (
    <Auth0Provider
      domain="dev-exhxz5nsz2r7b7as.us.auth0.com"
      clientId="2VxUobvUEe5zmweI4UkUwjudoaIrH1oq"
      audience="https://dev-exhxz5nsz2r7b7as.us.auth0.com/api/v2/"
      authorizationParams={{ redirect_uri: window.location.origin + '/callback' }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/callback' element={<AuthCallback />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/display-feedback" element={<FeedbackDisplay />} />
        </Routes>
      </Router>
    </Auth0Provider >
  );
};

export default App;

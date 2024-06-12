import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <h1>Authentication</h1>
      {isAuthenticated ? (
        <>
          <LogoutButton />
          <Profile />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default App;

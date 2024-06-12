import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));
console.log(window.location.origin)
root.render(
  <Auth0Provider
    domain='https://dev-exhxz5nsz2r7b7as.us.auth0.com'
    clientId='2VxUobvUEe5zmweI4UkUwjudoaIrH1oq'
    authorizationParams={{redirect_uri:window.location.origin}}
    cacheLocation="localstorage"
    useRefreshTokens={true}
  >
    <App />
  </Auth0Provider>,
);
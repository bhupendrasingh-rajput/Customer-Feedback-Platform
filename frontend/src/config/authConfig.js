import { createAuth0Client } from '@auth0/auth0-react';

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = window.location.origin + '/callback';

export const auth0Client = createAuth0Client({
  domain: auth0Domain,
  client_id: clientId,
  redirect_uri: redirectUri,
});

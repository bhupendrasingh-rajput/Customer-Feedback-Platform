const jwt = require('jsonwebtoken');
const { domain, clientId, clientSecret, audience, redirectUri } = require('../config/authConfig');
const axios = require('axios');

exports.login = async (req, res) => {
  const { token } = req.body;

  try {
    const response = await axios.post(`https://${domain}/oauth/token`, {
      client_id: clientId,
      client_secret: clientSecret,
      audience: audience,
      grant_type: 'authorization_code',
      code: token,
      redirect_uri: redirectUri
    });

    const { access_token } = response.data;
    const user = jwt.decode(access_token);

    res.json({ accessToken: access_token, user });
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};

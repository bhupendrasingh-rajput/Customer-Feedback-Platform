const axios = require('axios');
const { domain, clientId, clientSecret, audience } = require('../config/authConfig');

exports.login = async (req, res) => {
  const { code } = req.body;

  try {
    const response = await axios.post(`https://${domain}/oauth/token`, {
      client_id: clientId,
      client_secret: clientSecret,
      audience: audience,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'YOUR_REDIRECT_URI'
    });

    const { access_token } = response.data;
    const userInfo = await getUserInfo(access_token);

    res.json({ accessToken: access_token, userInfo });
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Failed to authenticate user' });
  }
};

const getUserInfo = async (accessToken) => {
  try {
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user information:', error.message);
    throw new Error('Failed to fetch user information');
  }
};

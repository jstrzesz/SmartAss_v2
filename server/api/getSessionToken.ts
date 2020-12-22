export {};
const axios = require('axios');

const getToken = async () => {
  const token = await axios.get('https://opentdb.com/api_token.php?command=request');
  console.log(token.data.token, 'line 3 getSessionToken.ts');
  return token.data.token;
};

module.exports = getToken;
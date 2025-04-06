const axios = require('axios')

const getGamesLive = async () => {

  const API_URL = process.env.REACT_APP_API_URL_GAMES
  const API_HOST = process.env.REACT_APP_API_HOST
  const API_KEY = process.env.REACT_APP_API_KEY

    const options = {
      method: 'GET',
      url: API_URL,
      params: {live: 'all'},
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data.response
    } catch (error) {
        console.error(error);
    }
}

module.exports = getGamesLive
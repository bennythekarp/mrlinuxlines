const axios = require('axios')

const getPlayerStats = async (params) => { 

  const API_URL = process.env.REACT_APP_API_URL_PLAYERS_STATS
  const API_HOST = process.env.REACT_APP_API_HOST
  const API_KEY = process.env.REACT_APP_API_KEY

    const options = {
        method: 'GET',
        url: API_URL,
        params: params,
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST
        }
    };
    try {
      let rawData = await axios.request(options);
      console.log(rawData)
      let response = rawData.data.response
        return response
    } catch (error) {
        console.error(error);
    }    
}

module.exports = getPlayerStats
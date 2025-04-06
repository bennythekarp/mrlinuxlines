const axios = require('axios')

const getStatsPerTeamAndSeason = async (id) => {

    const API_URL = process.env.REACT_APP_API_URL_PLAYERS_STATS
    const API_HOST = process.env.REACT_APP_API_HOST
    const API_KEY = process.env.REACT_APP_API_KEY
  
    const options = {
        method: 'GET',
        url: API_URL,
        params: {
          team: id,
          season: '2024'
        },
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST
        }
    };
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = getStatsPerTeamAndSeason
const axios = require('axios')

const getGameStatsPerID = async (id) => {
    console.log(id)

    const API_URL = process.env.REACT_APP_API_URL_PLAYERS_STATS
    const API_HOST = process.env.REACT_APP_API_HOST
    const API_KEY = process.env.REACT_APP_API_KEY
    
    const options = {
        method: 'GET',
        url: API_URL,
        params: {game: id},
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST
        }
    };
      
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}
module.exports = getGameStatsPerID
